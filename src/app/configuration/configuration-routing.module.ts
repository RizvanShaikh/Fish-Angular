import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { UpdateConfigurationComponent } from './update-configuration/update-configuration.component';



const routes: Routes = [
  {
    path: '', component: ConfigurationComponent , data: {title: 'Configuration'}
  },
 
  {
    path: 'update', component: UpdateConfigurationComponent , data: {title: 'Update Configuration'}
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
