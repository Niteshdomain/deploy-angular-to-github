import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from 'src/app/authentication/auth.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent  implements OnInit {
  
  constructor(private afAuth:AngularFireAuth,private fb:FormBuilder,private authSvc: AuthService, private router: Router) { }
    // frmPasswordReset:FormGroup=this.fb.group({
    //   email:[null,[Validators.required,Validators.email]]
    // });
    ngOnInit(): void {
    }
    // sendlink(){
    //   this.auth.forgotpasswords(this.email);
    //   this.email='';
    // }
    userEmail = new FormControl('',[Validators.required, Validators.email]);
   
    async onReset() {
      try {
        const email = this.userEmail.value;
        await this.authSvc.resetPassword(email as any);
        window.alert('Email sent, check your inbox! Now Go back to login Page Or If did not recieve email then again click send');
        
      } catch (error) {
        window.alert(error);
      }
    }
  
  }
