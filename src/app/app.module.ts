import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewContactComponent } from './components/my-portal/contacts/new-contact/new-contact.component';
// import { AddEventComponent } from './components/add-event/add-event.component';
import { ContactsListComponent } from './components/my-portal/contacts/manage-contacts/contacts-list.component';
import { UserProfileComponent } from './components/my-portal/profile/user-profile/user-profile.component';
import { CarouselComponent } from './components/core/carousel/carousel.component';
import { EventPortalComponent } from './components/my-portal/event-portal/event-portal.component';
import { EventTileComponent } from './components/core/event-tile/event-tile.component';
import { EventQuickLinksComponent } from './components/core/event-quick-links/event-quick-links.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { HeaderComponent } from './components/core/header/header.component';
import { SearchEventComponent } from './components/core/search-event/search-event.component';
import { ProfileComponent } from './components/my-portal/profile/profile.component';
import { HomeComponent } from './components/core/home/home.component';
import { SubEventComponent } from './components/my-portal/events/subevent/sub-event/sub-event.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Service } from './services/service';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AboutComponent } from './components/about/about.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MyEventComponent } from './components/my-event/my-event.component';
import { MyEventsComponent } from './components/my-events/my-events.component';
import { UserPortalComponent } from './components/user-portal/user-portal.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { EditEventComponent } from './components/my-portal/events/edit-event/edit-event.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ContactUsComponent } from './components/my-portal/contacts/contact/contact.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { LogoutComponent } from './components/logout/logout.component';
import { MainEventEditorComponent } from './components/my-portal/events/main-event-editor/main-event-editor.component';
import { MainEventDetailsComponent } from './components/my-portal/events/main-event-details/main-event-details.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { EditContactComponent } from './components/my-portal/contacts/edit-contact/edit-contact.component';
import { EventInvitationsComponent } from './components/event-invitations/event-invitations.component';
import { SubEventListComponent } from './components/sub-event-list/sub-event-list.component';
import { SubEventEditComponent } from './components/sub-event-edit/sub-event-edit.component';
import { NewSubEventEditComponent } from './components/new-sub-event-edit/new-sub-event-edit.component';
import { EventPeopleListComponent } from './components/event-people-list/event-people-list.component';
import { EventPeopleEditComponent } from './components/event-people-edit/event-people-edit.component';
import { NewEventPeopleComponent } from './components/new-event-people/new-event-people.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import { SubEventViewComponent } from './components/my-portal/events/subevent/sub-event-view/sub-event-view.component';
import {CommonModule} from '@angular/common';
import { RsvpComponent } from './components/rsvp/rsvp.component';
@NgModule({
  declarations: [
    AppComponent,
    NewContactComponent,
    // AddEventComponent,
    ContactsListComponent,
    UserPortalComponent,
    UserProfileComponent,
    CarouselComponent,
    EventPortalComponent,
    EventTileComponent,
    EventQuickLinksComponent,
      FooterComponent,
    HeaderComponent,
    SearchEventComponent,
    ProfileComponent,
    HomeComponent,
    SubEventComponent,
    LoginComponent,
    RegisterUserComponent,
    AboutComponent,
    ContactUsComponent,
    MyEventComponent,
    MyEventsComponent,
    NewEventComponent,
    EditEventComponent,
    LogoutComponent,
    MainEventEditorComponent,
    MainEventDetailsComponent,
    NotFound404Component,
    EditContactComponent,
    EventInvitationsComponent,
    SubEventListComponent,
    SubEventEditComponent,
    NewSubEventEditComponent,
    EventPeopleListComponent,
    EventPeopleEditComponent,
    NewEventPeopleComponent,
    AddEventComponent,
    SubEventViewComponent,
    RsvpComponent,

  ],
  imports: [
    NgbAccordionModule,
    BrowserModule,
      CommonModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    JwtModule.forRoot({})
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
