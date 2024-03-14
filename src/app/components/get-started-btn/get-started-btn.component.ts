import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-get-started-btn',
  templateUrl: './get-started-btn.component.html',
  styleUrl: './get-started-btn.component.css',
})
export class GetStartedBtnComponent {
  @Input() bgColor?: string;
  @Input() hoverBgColor?: string;
}
