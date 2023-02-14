import { Component } from '@angular/core';
import utils from '@js-monorepo/utils';

@Component({
  selector: 'js-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = utils.name;
}
