import { ExampleComponent } from './example.component';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular';

const routes: Routes = [
  { path: '', component: ExampleComponent },
];

export const exampleRoutes = NativeScriptRouterModule.forChild(routes);
