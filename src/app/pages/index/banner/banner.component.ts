import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Slider } from 'ngx-slider';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {
  public slider = new Slider();

  slideItems = [
    {
      src: '/assets/images/banner.jpg',
      title: 'Lee, Tsai & Partners',
      info: ['台灣新創科技', '的法律先驅']
    },
    {
      src: '/assets/images/banner.jpg',
      title: 'Lee, Tsai & Partners',
      info: ['多元化', '法律專業團體']
    },
    {
      src: '/assets/images/banner.jpg',
      title: 'Lee, Tsai & Partners',
      info: ['大中華市場', '的在地化', '法律服務']
    }
  ];
  bannerIndex = 0;
  infoClose = false;

  constructor() {
    this.slider.config.loop = true;
    this.slider.config.showPreview = false;
    this.slider.config.showTitle = false;
    this.slider.config.showNavigator = false;
  }

  ngOnInit() {
    this.slider.items = this.slideItems;
  }

  ngAfterViewInit() {
    const dots = document.getElementsByClassName('dots');
    for (let i = 0; i < dots.length; i++) {
      document.getElementsByClassName('dots')[i].addEventListener('click', () => {
        this.infoClose = true;
        setTimeout(() => {
          this.bannerIndex = i;
          this.infoClose = false;
        }, 300);
      });
    }
  }

}
