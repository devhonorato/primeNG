import { Component } from '@angular/core';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
        ],
      },
      {
        label: 'Outro Component',
        items: [
          {
            label: 'Vazio',
            icon: 'pi pi-fw pi-tags',
            routerLink: ['/set/vazio'],
          },
        ],
      }
    ];
  }
}
