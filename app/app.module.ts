import { AppComponent } from './app.component';
import { APP_DECLARATIONS } from './app.declarations';
import { APP_IMPORTS } from './app.imports';
import { APP_PROVIDERS } from './app.providers';
import { AppRoutingModule } from './app.routing';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    ...APP_IMPORTS
  ],
  declarations: [
    AppComponent,
    ...APP_DECLARATIONS
  ],
  providers: [
    ...APP_PROVIDERS
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
