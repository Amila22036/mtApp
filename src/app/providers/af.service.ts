import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuth,AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { User} from './user';
import {switchMap} from 'rxjs/operators';
import { Router } from '@angular/router';


interface Admin {
  uid: string;
  email: string;
  photoURL: string;
  catchPhrase?: string;
}

@Injectable()
export class AfService {
  user$:Observable<User>;
  email: string;
  AdminPW: string;
  userID:string;
  user:string;

  constructor(public afAuth: AngularFireAuth,public afs: AngularFirestore,private router: Router) {
    this.user$ = afAuth.authState.switchMap(user =>{
      if(user)
      {
        this.userID=user.uid;
        this.user$=this.afs.doc<User>(`users/${(user.uid)}`).valueChanges();
        return this.afs.doc<User>(`users/${(user.uid)}`).valueChanges();
      }
      else
      {
        return Observable.of(null);
      }
    })
   }

   getUser(){
     
     return this.user$;
   }

   
   loginWithGoogle(){
     const provider =new firebase.auth.GoogleAuthProvider();
     this.afAuth.auth.signInWithPopup(provider).then((credential)=>
    {
      this.updateUser(credential.user);
    })
   }


   SendAdminPw(user,passWd : string){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${this.userID}`);
    const data:User ={
      uid: this.userID,
      email: user.email,
      displayName:user.displayName,
      photoURL:user.photoURL,
      roles:{
        subscriber:true,
        admin:true
      },
      password:passWd
    }
    this.AdminPW = passWd;
    return userRef.set(data);
  
   }
  
   updateUser(user){
     const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${this.userID}`);
    
     const data:User ={
       uid: this.userID,
       email: user.email,
       displayName:user.displayName,
       photoURL:user.photoURL,
       roles:{
         subscriber:true,
         admin:false
       },
      
       password:this.AdminPW
     }

     return userRef.set(data);
   }


   logout(){
 
    
    this.afAuth.auth.signOut();
    }

}



