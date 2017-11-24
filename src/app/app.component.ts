import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() slideId = 1;

  avancar() {
    this.slideId++;
  }

  voltar() {
    this.slideId--;
  }
}
