import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavService {
  navData$ = inject(HttpClient).get('https://reqres.in/api/users');
}
