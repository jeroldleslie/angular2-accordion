// imports all the nessesary classes, interfaces and services
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';

import { AppComponent } from './app.component';
import { Accordion } from './components/accordion/accordion.component';
import { AccordionGroup } from './components/accordion/accordion-group/accordion-group.component';
import { AccordionGroupHeaderComponent } from './components/accordion/accordion-group-header/accordion-group-header.component';

import { DataService } from './services/data.service';
import { SnackBarService } from './services/snack-bar.service';
import { Broadcaster } from './interfaces/broadcaster';

import { ProgressComponent } from './components/progress/progress.component';
import { ContentBoxComponent } from './components/content-box/content-box.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { BuildComponent } from './components/build/build.component';
import { UnitTestComponent } from './components/unit-test/unit-test.component';
import { FunctionalTestComponent } from './components/functional-test/functional-test.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ResultComponent } from './components/result/result.component';

import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ModalModule } from 'ng2-bootstrap/modal';


// ngmodule configurations
// declares all components
// imports modules
// provides services to components
@NgModule({
  declarations: [
    AppComponent,
    Accordion,
    AccordionGroup,
    AccordionGroupHeaderComponent,
    ProgressComponent,
    ContentBoxComponent,
    MetricsComponent,
    BuildComponent,
    UnitTestComponent,
    FunctionalTestComponent,
    ArrowComponent,
    PieChartComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [
  ],
  providers: [
    DataService,
    Broadcaster,
    SnackBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
