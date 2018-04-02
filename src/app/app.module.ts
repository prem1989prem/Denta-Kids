import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router'; 
import{ FormsModule } from '@angular/forms'

import { HeaderComponent } from './header/header.component';
import { MianComponent } from './mian/mian.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TeamComponent } from './team/team.component';
import { LearnComponent } from './learn/learn.component';


@NgModule({
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'About',
        component: AboutComponent
      },
      {
        path: 'Services',
        component: ServicesComponent
      },
      {
        path: 'Team',
        component: TeamComponent
      },
      
      {
        path: 'Contacts',
        component: ContactComponent
      },
      {
        path: 'Learn',
        component: LearnComponent
      },
      {
        path: 'Appointment',
        component: AppointmentComponent
      }
      
    ])   
    
  ],
  declarations: [
    HeaderComponent,
    MianComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    AppointmentComponent,
    TeamComponent,
    LearnComponent,
  ],
  providers: [],
  bootstrap: [MianComponent]
})
export class AppModule { }
