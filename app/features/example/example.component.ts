import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  alert(msg: string) {
    alert(msg);
  }

}
