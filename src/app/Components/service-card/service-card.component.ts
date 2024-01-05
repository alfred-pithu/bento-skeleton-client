import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css',
})
export class ServiceCardComponent {
  @Input() bgColor?: string;

  hovered?: boolean = false;
  mouseOverHandler(): any {
    this.hovered = true;
    console.log(this.hovered);
  }

  mouseOutHandler() {
    this.hovered = false;
    console.log(this.hovered);
  }
}
