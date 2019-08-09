import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { interval, noop, Observable, of, throwError, timer } from 'rxjs';
import { catchError, delay, delayWhen, finalize, map, retryWhen, shareReplay, tap } from 'rxjs/operators';
import { createHttpObservable } from '../common/util';
import { Store } from '../common/store.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;


  constructor(private store: Store) {

  }

  ngOnInit() {
    const http$: Observable<Course[]> = createHttpObservable('http://localhost:3000/api/courses')
      .pipe(
        // todo  tap() - используется для выполнения какого-либо действия при генерации объектом Observable нового значения.
        tap(() => console.log('File: home.component.ts, Line - 30, ', 0)),
        map(res => Object.values(res.payload)),
        // todo  передает новым обработчикам заданное количество последних значений объекта.
        shareReplay(),
      );

    this.beginnerCourses$ = http$
      .pipe(
        map(res => res
          .filter(course => course.category === 'BEGINNER')),
      );

    this.advancedCourses$ = http$
      .pipe(
        map(res => res
          .filter(course => course.category === 'ADVANCED')),
      );
  }

}
