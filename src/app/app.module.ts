import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentComponent } from './component/component.component';
import { BodyComponent } from './body/body.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { MemberInfoComponent } from './members/member-info/member-info.component';
import { AboutComponent } from './about/about.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AddmemberComponent } from './members/addmember/addmember.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ComponentComponent,
    BodyComponent,
    MainComponent,
    HomeComponent,
    MembersComponent,
    MemberInfoComponent,
    AboutComponent,
    SideNavComponent,
    AddmemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:LoginComponent
      },
      {
        path:'mainpage',
        component:MainComponent
      },
      {
        path:'homepage',
        component:HomeComponent
      },
      {
        path:'addmember',
        component:AddmemberComponent
      },
      {
        path:'aboutpage',
        component:AboutComponent
      }
      
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
