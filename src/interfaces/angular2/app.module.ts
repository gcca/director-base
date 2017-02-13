import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent } from './app.component';
import { DirectorsComponent } from './directors.component';
import { DirectorComponent } from './director.component';
import { LineEditComponent } from './line-edit.component';


let RouterModuleForRoot = RouterModule.forRoot([{
  path: '',
  redirectTo: '/directors',
  pathMatch: 'full'
}, {
  path: 'directors',
  component: DirectorsComponent
}, {
  path: 'director/:fullName',
  component: DirectorComponent
}]);


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModuleForRoot ],
  declarations: [ AppComponent,
                  DirectorsComponent,
                  DirectorComponent,
                  LineEditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
