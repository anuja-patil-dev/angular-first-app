import { Component } from '@angular/core';
import { Hom } from './hom/hom';

@Component({
  selector: 'app-root',
  imports: [Hom],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  name = "Anuja";
}
