import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth,private router : Router) { }
  forgotpasswords(email:string){
    this.fireauth.sendPasswordResetEmail(email);
    this.fireauth.sendPasswordResetEmail(email).then((res)=>{
    this.router.navigate(['/verify']);
  },err=>{
    alert(err.message);
  })
  }
  async resetPassword(email: string): Promise<void> {
    try {
      return this.fireauth.sendPasswordResetEmail(email);
      
    } catch (error) {
      console.log(error);
    }
  }

}
