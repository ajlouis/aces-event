import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EventPortalComponent } from './components/my-portal/event-portal/event-portal.component';
import { ProfileComponent } from './components/my-portal/profile/profile.component';
import { ContactsListComponent } from './components/my-portal/contacts/manage-contacts/contacts-list.component';
import { EventTileComponent } from './components/core/event-tile/event-tile.component';
import { NewContactComponent } from './components/my-portal/contacts/new-contact/new-contact.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/my-portal/contacts/contact/contact.component';


import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { MyEventsComponent } from './components/my-events/my-events.component';
import { UserResolverService } from './services/user-resolver.service';
import { UserPortalComponent } from './components/user-portal/user-portal.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { NewEventResolverService } from './services/new-event-resolver.service';
import { MainEventResolverService } from './services/main-event-resolver.service';
import { EditEventComponent } from './components/my-portal/events/edit-event/edit-event.component';
import { SubEventComponent } from './components/my-portal/events/subevent/sub-event/sub-event.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { EditContactComponent } from './components/my-portal/contacts/edit-contact/edit-contact.component';
import { MainEventDetailsComponent } from './components/my-portal/events/main-event-details/main-event-details.component';
import { EventInvitationsComponent } from './components/event-invitations/event-invitations.component';
import { SubEventListComponent } from './components/sub-event-list/sub-event-list.component';
import { SubEventEditComponent } from './components/sub-event-edit/sub-event-edit.component';
import { NewSubEventEditComponent } from './components/new-sub-event-edit/new-sub-event-edit.component';
import { EventPeopleListComponent } from './components/event-people-list/event-people-list.component';
import { EventPeopleEditComponent } from './components/event-people-edit/event-people-edit.component';
import { NewEventPeopleComponent } from './components/new-event-people/new-event-people.component';
import { peopleInvolvedResolverService } from './services/people-involved-resolver.service';
import { SubEventViewComponent } from './components/my-portal/events/subevent/sub-event-view/sub-event-view.component';
import { SubEventResolverService } from './services/sub-event-resolver.service';
import { MainEventIdResolverService } from './services/main-event-id-resolver.service';

const eventsChildrenRoutes = [
    { path: 'my-events', component: MyEventsComponent, resolve: { user: UserResolverService } },
    { path: 'invitations', component: EventInvitationsComponent, resolve: { user: UserResolverService } },
    { path: 'new', component: NewEventComponent, resolve: { user: UserResolverService, event: NewEventResolverService } },
    { path: 'edit/:mainEventId', component: EditEventComponent, resolve: { user: UserResolverService, event: MainEventResolverService } },
    {
        path: 'details/:eventid', component: MainEventDetailsComponent,
        resolve: { user: UserResolverService, event: MainEventResolverService },
        children: [
            { path: 'subevents', component: SubEventListComponent },
            { path: 'subevents/edit/:subeventid', component: SubEventEditComponent },
            { path: 'subevents/new', component: NewSubEventEditComponent },
            { path: 'people', component: EventPeopleListComponent },
            { path: 'people/edit/:peopleid', component: EventPeopleEditComponent },
            { path: 'people/new', component: EventPeopleEditComponent },
        ]
    }
];

const contactsChildrenRoutes = [
    // { path: 'new', component: NewContactComponent, resolve: { user: UserResolverService } },
    { path: 'edit/:contactid', component: EditContactComponent, resolve: { user: UserResolverService } }
];

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    {
        path: 'my-portal', component: UserPortalComponent, canActivate: [AuthGuard], resolve: { user: UserResolverService },
        children: [
            // {path: 'events', redirectTo: 'events/invitations', children: eventsChildrenRoutes},
            { path: 'events', children: eventsChildrenRoutes },
            { path: 'contacts', component: ContactsListComponent, children: contactsChildrenRoutes },
            { path: 'contacts/new', component: NewContactComponent, resolve: { user: UserResolverService } },
            { path: 'contacts/edit', component: NewContactComponent },

            { path: 'profile', component: ProfileComponent, resolve: { user: UserResolverService } }
        ]
    },
    { path: 'event-portal', component: EventPortalComponent },
    { path: 'register', component: RegisterUserComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: '404', component: NotFound404Component },
    { path: 'register', component: RegisterUserComponent },
    { path: 'peopleInvolved', component: EventPeopleListComponent },

    { path: 'people', component: EventPeopleListComponent },
    { path: 'people/edit/:peopleid', component: EventPeopleEditComponent, resolve: { data: peopleInvolvedResolverService } },
    { path: 'people/new/:mainEventId', component: EventPeopleEditComponent, resolve: { data: MainEventIdResolverService } },

    { path: 'subEventsView', component: SubEventViewComponent },
    { path: 'sub-event/edit/:subEventId', component: SubEventComponent, resolve: { data: SubEventResolverService } },
    { path: 'sub-event/new/:mainEventId', component: SubEventComponent, resolve: { data: MainEventIdResolverService } },
    { path: 'event-details/:mainEventId', component: MainEventDetailsComponent, resolve: { event: MainEventResolverService } },
    // default route and 404 handler
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    //   { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
