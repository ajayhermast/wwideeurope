import { Routes } from '@angular/router';
import path from 'path';
import { LandinngpageComponent } from './landinngpage/landinngpage.component';
import { HeaderComponent } from './header/header.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { contains } from 'jquery';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { ProjectsComponent } from './projects/projects.component';
import { PartnersComponent } from './partners/partners.component';
import { ClientComponent } from './client/client.component';

export const routes: Routes = [
    {path: "",
     redirectTo: "landing_page",
     pathMatch: "full"   
    },
    {
     path:"",
     component:LandinngpageComponent
    },
    {
        path:"who_we_are",
        component:WhoWeAreComponent
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"careers",
        component:CareersComponent
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
