import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {FormsModule} from '@angular/forms';

import {LoginComponent,
        RegisterComponent,
        NotfoundComponent,
        DashboardComponent,
        AddNoteComponent} from './pages/exportPages'

import {AuthGuard,AuthService,LoginGuard,taskService} from './shared/exportServices';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    DashboardComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [AuthService,AuthGuard,LoginGuard,taskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
