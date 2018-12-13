import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes/routes.module';
import { NgxsModule } from '@ngxs/store';
import { CommentState } from './redux/comment/comment.redux';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([
      CommentState
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
