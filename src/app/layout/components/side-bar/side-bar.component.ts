import { Component, ElementRef } from '@angular/core';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  constructor(public layoutService: LayoutService, public el: ElementRef) { }
}
