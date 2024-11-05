import { Routes } from '@angular/router';
import path from 'path';
import { LandinngpageComponent } from './landinngpage/landinngpage.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { PartnersComponent } from './partners/partners.component';
import { ClientComponent } from './client/client.component';

export const routes: Routes = [
    {
     path:"",
     component:LandinngpageComponent
    },
    {
        path:"about_us",
        component:WhoWeAreComponent
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"projects",
        component:ProjectsComponent
    },
    {
        path:"partners",
        component:PartnersComponent
    },
    {
        path:"clients",
        component:ClientComponent
    },
    
];
