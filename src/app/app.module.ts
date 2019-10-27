import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloginContainerComponent } from './Common/prelogin-container/prelogin-container.component';
import { PostloginContainerComponent } from './Common/postlogin-container/postlogin-container.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloginContainerComponent,
    PostloginContainerComponent,
    TestComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
