import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EstruturaComponent } from './components/estrutura/estrutura.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuitemComponent } from './components/menu-item/menuitem.component';
import { SidebarModule } from 'primeng/sidebar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';


@NgModule({
    declarations: [
      EstruturaComponent,
      FooterComponent,
      TopBarComponent,
      SideBarComponent,
      MenuComponent,
      MenuitemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule,
        CommonModule,
        SidebarModule,
        InputSwitchModule,
        ButtonModule,
        RadioButtonModule,
        RippleModule,
        ToastModule,
        TagModule,
        SliderModule
    ],
    exports: [EstruturaComponent]
})
export class LayoutModule { }
