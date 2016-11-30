import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import {ApiService} from "../api.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ServiceComponent]
})
export class ServiceModule { 

  static forRoot():ModuleWithProviders{
    return{
      ngModule:ServiceModule,
      providers :[ApiService]
    }
  }
}
