import { defaultBanner } from "./utils";

// export interface MainEvent {
//     mainEventId: number;
//     title: string;
//     description: string;
//     createdAt: number;
//     updatedAt: number;
//     startDate: number;
//     endDate: number;
//     isPublic: boolean;
//     region: string;
//     venue: string;
//     locationId: number;
//     eventCategoryId: number;
//     eventStatusId: number;
//     createdBy: number;
// }

export class MainEvent {
    mainEventId: number = 0;
    title: string = '';
    description: string = '';
    createdAt: number = Date.now();
    updatedAt: number = Date.now();
    startDate: number = Date.now();
    endDate: number = Date.now();
    isPublic: boolean = true;
    region: string = '';
    venue: string = '';
    locationId: number = 0;
    eventCategoryId: number = 0;
    eventStatusId: number = 0;
    createdBy: number = 0;
    bannerUrl = defaultBanner;
}



export interface EventLocation {
    locationId: number;
    longitude: number;
    latitude: number;
    description: string;
}



export interface EventCategory {
    eventCategoryId: number;
    name: string;
}

export interface SubEvent {
    subEventId: number;
    title: string;
    description: string;
    createdAt: number;
    updatedAt: number;
    startDate: number;
   // endDate: number;
    time: string;
    
    position: number;
    photoURL: string;
    locationId: number;
    eventStatusId: number;
    mainEventId: number;
}

export interface EventStatus {
    eventStatusId: number;
    name: string;
}


export interface RSVP {
    rsvpId: number;
    name: string;
    email: string;
    phoneNumber: string;
    quantity: number;
    rsvpTypeId: number;
    createdBy: number;
    mainEventId: number;
}

export interface RSVPType {
    rsvpTypeId: number;
    name: string;
}


export interface EventComment {
    eventCommentId: number;
    email: string;
    name: string;
    message: string;
    createdAt: number;
    mainEventId: number;
}


export interface PeopleInvolved {
    peopleInvolvedId: number;
    name: string;
    description: string;
    photoURL: string;
    role: string;
    mainEventId: number;
}


export interface EventBanner {
    eventBannerId: number;
    photoUrl: string;
    description: string;
    mainEventId: number;
}



export interface EventGallery {
    eventBannerId: number;
    photoUrl: string;
    description: string;
    mainEventId: number;
}




export interface User {
    userId: string;
    firstName: string;
    lastName: string;
    passwordHash: string;
    email: string;
    phoneNumber: string;
    userStatusId: string;
}



export interface UserStatus {
    userStatusId: number;
    name: string;
}


export interface UserPhoto {
    userPhotoId: number;
    photoUrl: string;
    userId: number;
}


export interface UserContact {
    userContactId: number;
    phoneNumber: string;
    name: string;
    email: string;
    userId: number;
}



export interface MainEventCarouselItem {
    mainEventId: number;
    bannerUrl: string;
}

