import { Photo } from './photo';

export interface Person {

    id: number;
    firstname: string;
    lastname: string;
    address: string;
    dob: Date;
    city: string;
    state: string;
    zip: string;
    gender: string;
    photoUrl: string;
    interests?: string;
    photos?: Photo[];

}
