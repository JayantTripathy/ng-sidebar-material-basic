import { Routes } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';
import { InfoComponent } from './pages/info/info.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'info',
        component: InfoComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: '**',
        component: PagenotfoundComponent,
      }
];
