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
    const http$ = createHttpObservable('http://localhost:3000/api/courses');

    const courses$ = http$.pipe(
      map(res => Object.values(res.payload)),
    );

    courses$.subscribe(res => {
      this.beginnerCourses$ = res.filter(course => course.category === 'BEGINNER');
      this.advancedCourses$ = res.filter(course => course.category === 'ADVANCED');
    });


  }

}
