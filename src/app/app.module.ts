import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMatTimepickerModule} from "ngx-mat-timepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatGridListModule} from "@angular/material/grid-list";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { StartComponent } from './start/start.component';
import {RouterModule} from "@angular/router";
import { RecordComponent } from './record/record.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    RecordComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        BrowserAnimationsModule,
        FormsModule,
        NgxMatTimepickerModule,
        MatFormFieldModule,
        MatIconModule,
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatMenuModule,
        MatSelectModule,
        MatToolbarModule,
        MatTooltipModule,
        NgxMatTimepickerModule,
        MatGridListModule,
        NgbModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
