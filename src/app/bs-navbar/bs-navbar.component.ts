import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
   }

  logout(){
    this.afAuth.signOut();
  }
}
