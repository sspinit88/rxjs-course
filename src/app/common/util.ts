import { Observable } from 'rxjs';


// todo создаем поток из данных, которые получаем с сервера (c fetch);
export function createHttpObservable(url: string): Observable<any[]> {
  return new Observable(observer => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(body => {
        observer.next(body);
        observer.complete();
      })
      .catch(error => {
        observer.error(error);
      });
  });

}


