import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HomeModule} from './home/home.module';

import { ChartsModule } from './charts/charts.module';
import  { SearchBoxModule } from './home/nav-bar/search-box/search-box.module';
import { AlertModule, DatepickerModule,TypeaheadModule,DropdownModule,CollapseModule,TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { routing, appRoutingProviders }  from './app.routing';
import { DataTableModule } from 'angular-2-data-table';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { NavigationComponent } from './navigation/navigation.component';
import { CalenderComponent } from './common/calender/calender.component';

import { AppComponent } from './app.component';
import { TopologyComponent } from './topology/topology.component';
import { SearchBoxComponent } from './home/nav-bar/search-box/search-box.component';
import { DataTableComponent } from './data-table/data-table.component';
import { SettingsComponent } from './settings/settings.component';
import { SubSettingsComponent } from './settings/sub-settings/sub-settings.component';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2DataTableComponent } from './ng2-data-table/ng2-data-table.component';
import {SearchMultiselectDropdownComponent }    from './home/nav-bar/search-multiselect-dropdown/search-multiselect-dropdown.component';

import { GoogleMapModule } from './google-map/google-map.module';
import { TopoComponent } from './topo/topo.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent, TopologyComponent, NavigationComponent, CalenderComponent, SettingsComponent,
     SubSettingsComponent, DataTableComponent, Ng2DataTableComponent, TopoComponent,SearchMultiselectDropdownComponent, ReportComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule,
    FormsModule,
    HttpModule,
    HomeModule,
    SearchBoxModule,
    ChartsModule,
    DataTableModule,
    routing,
    TypeaheadModule,
    GoogleMapModule,
    Ng2TableModule,
    PaginationModule,
    TabsModule,
    MultiselectDropdownModule
     ], 
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }