import { ExampleModule } from './features/example/example.module';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

export function getExampleModule() {
  return ExampleModule;
}

export const routes: Routes = [
  { path: "", redirectTo: '/example', pathMatch: "full" },
  { path: "example", loadChildren: getExampleModule },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
