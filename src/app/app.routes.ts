import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandinngpageComponent } from './landinngpage/landinngpage.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { PartnersComponent } from './partners/partners.component';
import { ClientComponent } from './client/client.component';
import { MarketingComponent } from './marketing/marketing.component';
import { DesignComponent } from './design/design.component';
import { TurbineComponent } from './turbine/turbine.component';
import { SparepartComponent } from './sparepart/sparepart.component';

export const routes: Routes = [
    {
     path:"",
     component:LandinngpageComponent
    },
    {
        path:"about-us",
        component:WhoWeAreComponent
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"partners",
        component:PartnersComponent
    },
    {
        path: 'our-bussiness',
        component: ProjectsComponent
    },
    {
        path:"marketing-sales-of-plant-equipment",
        component:MarketingComponent
    },
    {
        path:"engineering-design-consultancy",
        component:DesignComponent
    },
    {
        path:"turbine-maintenance-and-overhauling",
        component:TurbineComponent
    },
    {
        path:"spare-parts-support",
        component:SparepartComponent
    },
      
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }