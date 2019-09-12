// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FileuploadComponent } from './fileupload/fileupload.component';





@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }