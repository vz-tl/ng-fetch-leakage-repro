import { interval, take } from 'rxjs';


interval(150)
  .pipe(
    take(1000),
  )
  .subscribe((index) => {
    console.log("index", index);

    fetch(`http://localhost:4000?cb=${index}`);
  });
