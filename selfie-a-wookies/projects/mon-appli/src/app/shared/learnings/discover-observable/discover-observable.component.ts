import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'saw-discover-observable',
  templateUrl: './discover-observable.component.html',
  styleUrls: ['./discover-observable.component.css']
})
export class DiscoverObservableComponent implements OnInit {

  ngOnInit(): void {
    console.info('-------------------------------');

    // setTimeout(() => {
    //   console.info('Ah que coucou');
    // }, 0);

    const promise = new Promise((resolve, reject) => {
      console.info('0. PROMESSE');

      setTimeout(() => {
          const result = 5 * 5; // ca prend bcp de temps
          resolve(result);
        }, 1000);
    }).then(item => console.info('Promesse', item));

    const observable$ = new Observable<number>(observer => {
        console.info('0. OBSERVABLE');


        // observer.complete();
        setTimeout(() => {
          console.info('Ah que coucou O');
          const result = 5*5;
          observer.next(result);
          observer.next(6*5);
          observer.next(7*5);
        }, 0);
    });

    observable$
    .pipe(
      map(item => item * 10),
      map(item => item / 10),
      tap(item => console.info('Ma valeur', item)),
      map(item => `RESULT ${item} ${item + 10}`),
      tap(item => console.info('Ma valeur 2', item)),
    )
    .subscribe(item => console.info('Observable', item));


    // observable$.subscribe();




    console.info('***********************************');
  }

}
