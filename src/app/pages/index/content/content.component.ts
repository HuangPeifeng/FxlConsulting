import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  recordList = [
    {
      cover: 'assets/images/record1.jpg',
      info: '理慈榮獲InterContinental Finance Magazine評選為2019年「世界前100法律事務所」'
    },
    {
      cover: 'assets/images/record2.png',
      info: '理慈榮獲CV Magazine 之2018年  Emerging Markets Business Awards 評選為「台灣年度併購法律事務所」及「台灣年度智慧財產交易專家法律事務所」。'
    },
    {
      cover: 'assets/images/record3.jpg',
      info: '理慈榮獲Corporate USA Today評選為2018年「台灣年度全方位法律事務所」'
    },
    {
      cover: 'assets/images/record4.jpg',
      info: '理慈榮獲Corporate Insider 2018 M&A Awards 評選為2018年「台灣年度法律事務所」'
    },
    {
      cover: 'assets/images/record5.png',
      info: '理慈榮獲Media Law International 評選為臺灣首選律師事務所之一'
    },
    {
      cover: 'assets/images/record6.jpg',
      info: '理慈暨陳信宏律師榮獲Acquisition International Magazine之2018 Global Excellence Awards評選為「2018年台灣公平交易法頂尖法律顧問」'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
