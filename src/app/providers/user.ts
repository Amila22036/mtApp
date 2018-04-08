export interface User {
    uid:string;
    email:string;
    displayName:string;
    photoURL:string;
    roles: Roles;
    password:string;
}

export interface Roles{
    admin?:boolean;
    subscriber?:boolean;
}