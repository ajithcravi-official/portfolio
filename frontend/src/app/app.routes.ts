import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { AllSoftwaresComponent } from './pages/all-softwares/all-softwares.component';
import { AllBlogsComponent } from './pages/all-blogs/all-blogs.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: AllProjectsComponent },
    { path: 'softwares', component: AllSoftwaresComponent },
    { path: 'blogs', component: AllBlogsComponent },
    { path: '**', redirectTo: '' }
];
