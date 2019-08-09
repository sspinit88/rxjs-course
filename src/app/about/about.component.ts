import { Component, OnInit, } from '@angular/core';
import {
  noop,
  Observable,
} from 'rxjs';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // ngOnInit() {
  //   // todo создаем поток из данных, которые получаем с сервера (c fetch);
  //   const http$ = new Observable(observer => {
  //     fetch('http://localhost:9000/api/courses')
  //       .then(response => {
  //         return response.json();
  //       })
  //       .then(body => {
  //         observer.next(body);
  //         observer.complete();
  //       })
  //       .catch(error => {
  //         observer.error(error);
  //       });
  //   });
  //
  //   http$.subscribe(
  //     res => console.log('File: about.component.ts, Line - 49, res', res),
  //     noop,
  //     () => console.log('File: about.component.ts, Line - 51, `complated`', `complated`),
  //   );
  // } // ngOnInit

  ngOnInit() {

    const http$ = new Observable(observer => {
      fetch('http://localhost:3000/api/courses')
        .then(response => {
          return response.json();
        })
        .then(body => {
          observer.next(body);
          observer.complete();
        })
        .catch(err => {
          observer.error(err);
        });
    });
    http$.subscribe(
      courses => console.log(courses),
      noop,
      () => console.log('completed')
    );
  }

}






