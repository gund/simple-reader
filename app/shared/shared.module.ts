import { ButtonComponent } from './components/button/button.component';
import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular';

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    NativeScriptModule,
  ],
  exports: [
    NativeScriptModule,
    ButtonComponent,
  ],
  providers: [
  ]
})
export class SharedModule { }
