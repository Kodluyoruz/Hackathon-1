import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {SssComponent} from './sss/sss.component';
import {AboutComponent} from './about/about.component';
import {NewHacksComponent} from './new-hacks/new-hacks.component';
import {OldHacksComponent} from './old-hacks/old-hacks.component';
import {NewHacksDetailComponent} from './new-hacks-detail/new-hacks-detail.component';
import {OldHacksDetailComponent} from './old-hacks-detail/old-hacks-detail.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {
    component: MainPageComponent,
    path: ''
  },
  {
    component: SssComponent,
    path: 'sss'
  },
  {
    component: AboutComponent,
    path: 'about'
  },
  {
    component: NewHacksComponent,
    path: 'new'
  },
  {
    component: OldHacksComponent,
    path: 'old'
  },
  {
    component: NewHacksDetailComponent,
    path: 'new/id'
  },
  {
    component: OldHacksDetailComponent,
    path: 'old/id'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
