import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css',
})
export class ServiceCardComponent {
  @Input() bgColor?: string;
  @Input() info?: { serviceName: string, serviceTagLine: string, serviceDescription: string, serviceImage: string }

  hovered?: boolean = false;
  mouseOverHandler(): any {
    this.hovered = true;
  }

  mouseOutHandler() {
    this.hovered = false;
  }
}
