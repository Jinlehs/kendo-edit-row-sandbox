import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonControlPanelComponent } from './button-control-panel/button-control-panel.component';
import { GridModule } from '@progress/kendo-angular-grid';
import {FormsModule} from "@angular/forms";
import {DropDownListModule} from "@progress/kendo-angular-dropdowns";


@NgModule({
  declarations: [
    AppComponent,
    ButtonControlPanelComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonsModule,
        BrowserAnimationsModule,
        GridModule,
        FormsModule,
        DropDownListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
