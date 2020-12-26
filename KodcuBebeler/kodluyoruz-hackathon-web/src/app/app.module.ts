import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SssComponent } from './sss/sss.component';
import { OldHacksComponent } from './old-hacks/old-hacks.component';
import { NewHacksComponent } from './new-hacks/new-hacks.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OldHacksDetailComponent } from './old-hacks-detail/old-hacks-detail.component';
import { NewHacksDetailComponent } from './new-hacks-detail/new-hacks-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SssComponent,
    OldHacksComponent,
    NewHacksComponent,
    MainPageComponent,
    OldHacksDetailComponent,
    NewHacksDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
