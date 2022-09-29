import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './page/product/product.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    ProgressSpinnerModule,
    SplitButtonModule,
    MenuModule,
    MenubarModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
