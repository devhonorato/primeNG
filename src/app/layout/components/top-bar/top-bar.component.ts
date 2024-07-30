import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { LayoutService } from '../../service/layout.service';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  providers: [ MessageService ]
})
export class TopBarComponent implements OnInit {
  items!: MenuItem[];
  sidebarVisible2: boolean = false;
  checkedTheme: boolean = false;
  loading: boolean = false;

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(
    public layoutService: LayoutService,
    public menuService: MenuService,
    private messageService: MessageService
  ) {
    let configCache = localStorage.getItem("layout");


      if(configCache!){
        try {
          let configCacheObj = JSON.parse(configCache);

          this.layoutService.config.ripple = configCacheObj.ripple;
          this.layoutService.config.inputStyle = configCacheObj.inputStyle;
          this.layoutService.config.menuMode = configCacheObj.menuMode;

          if(configCacheObj.colorScheme == "dark"){
            this.checkedTheme = true;
          }

          const newHref = `assets/theme/${configCacheObj.theme}/theme.css`;
          this.replaceThemeLink(newHref, () => {
            this.layoutService.config.theme = configCacheObj.theme;
            this.layoutService.config.colorScheme = configCacheObj.colorScheme;
            this.layoutService.onConfigUpdate();
          });

          this.layoutService.config.scale = configCacheObj.scale;
          this.applyScale();

        } catch (error) {
          // console.log("Erro no cache Layout")
          this.changeTheme(this.checkedTheme);
        }
      }else{
        this.changeTheme(this.checkedTheme);
      }

  }

  ngOnInit(): void {
    // console.log("TopBarComponent")
  }

  @Input() minimal: boolean = false;

  scales: number[] = [10, 11, 12, 13, 14, 15, 16, 17, 18];
  value!: number;


  get visible(): boolean {
    return this.layoutService.state.configSidebarVisible;
  }

  set visible(_val: boolean) {
    this.layoutService.state.configSidebarVisible = _val;
  }

  get scale(): number {
    return this.layoutService.config.scale;
  }

  set scale(_val: number) {
    this.layoutService.config.scale = _val;
  }

  get menuMode(): string {
    return this.layoutService.config.menuMode;
  }

  set menuMode(_val: string) {
    this.layoutService.config.menuMode = _val;
  }

  get inputStyle(): string {
    return this.layoutService.config.inputStyle;
  }

  set inputStyle(_val: string) {
    this.layoutService.config.inputStyle = _val;
  }

  get ripple(): boolean {
    return this.layoutService.config.ripple;
  }

  set ripple(_val: boolean) {
    this.layoutService.config.ripple = _val;
  }

  // onConfigButtonClick() {
  //   this.layoutService.showConfigSidebar();
  // }

  changeTheme(check: boolean) {

    let theme = "";
    let colorScheme = "";

    if (check) {
      theme = "default-dark-blue";
      colorScheme = "dark";
    } else {
      theme = "default-light-blue";
      colorScheme = "light";
    }

    const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
    const newHref = themeLink.getAttribute('href')!.replace(this.layoutService.config.theme, theme);
    this.layoutService.config.colorScheme
    this.replaceThemeLink(newHref, () => {
      this.layoutService.config.theme = theme;
      this.layoutService.config.colorScheme = colorScheme;
      this.layoutService.onConfigUpdate();
    });
  }

  replaceThemeLink(href: string, onComplete: Function) {
    const id = 'theme-css';
    const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
    const cloneLinkElement = <HTMLLinkElement>themeLink.cloneNode(true);

    cloneLinkElement.setAttribute('href', href);
    cloneLinkElement.setAttribute('id', id + '-clone');

    themeLink.parentNode!.insertBefore(cloneLinkElement, themeLink.nextSibling);

    cloneLinkElement.addEventListener('load', () => {
      themeLink.remove();
      cloneLinkElement.setAttribute('id', id);
      onComplete();
    });
  }

  decrementScale() {
    this.scale--;
    this.applyScale();
  }

  incrementScale() {
    this.scale++;
    this.applyScale();
  }

  incrementDecrementScale(){
    const currentIndex = this.scales.indexOf(this.scale);

    if (currentIndex > 0 && currentIndex < this.scales.length - 1) {
      this.scale = this.scales[currentIndex];
    }

    this.applyScale();
  }

  applyScale() {
    document.documentElement.style.fontSize = this.scale + 'px';
  }

  showConfig(){
    this.loading = true;
    try {
      // console.log(this.layoutService.config);
      localStorage.setItem("layout", JSON.stringify(this.layoutService.config));
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'As configurações foram salvas' });
      this.loading = false;
      this.sidebarVisible2 = false;
    } catch (error) {

    }
  }
}
