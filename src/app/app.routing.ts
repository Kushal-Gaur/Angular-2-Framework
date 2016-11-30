import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent }  from './home/home.component';
import {SearchOptionsComponent }    from './home/nav-bar/search-options/search-options.component';
import {SearchBoxComponent }    from './home/nav-bar/search-box/search-box.component';
import {ChartsComponent} from './charts/charts.component';
import {TopologyComponent} from './topology/topology.component';
import {TopoComponent} from './topo/topo.component';

import {DataTableComponent} from './data-table/data-table.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import {SubSettingsComponent} from './settings/sub-settings/sub-settings.component';
import {SettingsComponent} from './settings/settings.component';
import {ReportComponent} from './report/report.component';
import {Ng2DataTableComponent} from './ng2-data-table/ng2-data-table.component';
import {SearchMultiselectDropdownComponent }    from './home/nav-bar/search-multiselect-dropdown/search-multiselect-dropdown.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchOptionsComponent },
   { path: 'dropdown', component: SearchMultiselectDropdownComponent },
  { path: 'chart', component: ChartsComponent },
  { path: 'table', component: DataTableComponent },
  { path: 'table1', component: Ng2DataTableComponent },  
  { path: 'topology', component: TopologyComponent },
  { path: 'topo', component: TopoComponent },
  { path: 'googlemap', component: GoogleMapComponent},
  { path: 'report', component: ReportComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'settings/:id', component: SubSettingsComponent} 
];


export const appRoutingProviders: any[] = [
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
