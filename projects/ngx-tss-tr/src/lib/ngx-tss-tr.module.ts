import {NgModule} from '@angular/core';
import {NgxTssTrComponent} from './ngx-tss-tr.component';
import {CommonModule} from '@angular/common';
import {NgxTssTrPipe} from './ngx-tss-tr.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxTssTrComponent,
    NgxTssTrPipe
  ],
  exports: [
    NgxTssTrComponent,
    NgxTssTrPipe
  ]
})
export class NgxTssTrModule {
}
