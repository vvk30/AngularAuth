import { Routes } from '@angular/router';

import {LoginComponent,
        RegisterComponent,
        NotfoundComponent,
        DashboardComponent,
        AddNoteComponent} from './pages/exportPages'

import {LoginGuard,AuthGuard} from './shared/exportServices'

 export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent,canActivate:[LoginGuard]},
  { path: 'register', component: RegisterComponent,canActivate:[LoginGuard] },
  { path:'dashboard',component: DashboardComponent,canActivate:[AuthGuard]},
  {path:'addNote',component: AddNoteComponent,canActivate:[AuthGuard] },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: NotfoundComponent }
];