import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavService } from './nav.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'leakage-repro-app';

  readonly navData$ = inject(NavService).navData$;
}
