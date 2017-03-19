import { SharedModule } from '../../shared/shared.module';
import { ExampleComponent } from './example.component';
import { exampleRoutes } from './example.routing';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    SharedModule,
    exampleRoutes,
  ],
  declarations: [
    ExampleComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ExampleModule { }
