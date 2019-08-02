import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from '../index/index.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SliderModule } from 'ngx-slider';


@NgModule({
  declarations: [IndexComponent, HeaderComponent, BannerComponent, ContentComponent, FooterComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SliderModule
  ]
})
export class IndexModule { }
