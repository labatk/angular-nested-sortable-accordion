import { Component } from '@angular/core';
import { SortablejsModule } from 'ngx-sortablejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  locations = [
    { name: 'Location 1', shortName: 'L1', parentLocation: null },
    // Add more location objects as needed
  ];
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/