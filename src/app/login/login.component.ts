import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ServicesService } from '../authentication/services.service';
import { SessionService } from '../service/session.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required,   Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,20}')
  ])
  });

  constructor(
    private authService: ServicesService,
    private toast: HotToastService,
    private router: Router,
    private session:SessionService
    

  ) {}

  ngOnInit(): void {}
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  submit() {
    {
      const { email, password } = this.loginForm.value;
  
      if (!this.loginForm.valid || !email || !password) {
        return;
      }
  
      this.authService
        .login(email, password)
        .pipe(
          this.toast.observe({
            success: 'Logged in successfully',
            loading: 'Logging in...',
            error: ({ message }) => `There was an error: ${message} `,
          })      )
        .subscribe(() => {
          this.session.setIntoSession(email)
          this.router.navigate(['/home']);
        });
    }
}
forgot(){
  this.router.navigate(['/forgot']);
}
}