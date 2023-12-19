import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionCardComponent } from './components/introduction-card/introduction-card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { EducationPageComponent } from './pages/education-page/education-page.component';
import { EducationCardComponent } from './components/education-card/education-card.component';
import { CertificateCardComponent } from './components/certificate-card/certificate-card.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionCardComponent,
    MenuBarComponent,
    HomePageComponent,
    AboutMeComponent,
    AboutMePageComponent,
    SkillsPageComponent,
    HardSkillsComponent,
    ProjectCardComponent,
    ProjectsPageComponent,
    SoftSkillsComponent,
    EducationPageComponent,
    EducationCardComponent,
    CertificateCardComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
