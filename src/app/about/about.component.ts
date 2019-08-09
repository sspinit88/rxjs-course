import { Component, OnInit, } from '@angular/core';
import { concat, interval, of } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ngOnInit() {
    // todo of(), .interval(), .concat()
    const source1$ = interval(1000);
    const source2$ = of(4, 5, 6);
    const source3$ = of(7, 8, 9);
    const result$ = concat(source1$, source2$, source3$);
    // result$.subscribe(res => console.log('File: about.component.ts, Line - 19, res:', res));
  }

}

