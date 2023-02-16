import { Component ,inject} from '@angular/core';
import { Patient } from '../authentication/patient.interface';
import { PatientsService } from '../authentication/patient.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent {
  
  _patientService = inject(PatientsService);
  _router = inject(Router);
 constructor(private router:Router,private toastr:ToastrService){}
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required,Validators.pattern('^([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])$')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    drugs: new FormArray([]),
    status:new FormControl('',Validators.required),
    age: new FormControl('', [Validators.required,Validators.pattern('^([0-9][0-9])$')]),
  });
    ngOnInit():void{
      if(sessionStorage.getItem('key')==null){this.router.navigate(['login']) }
    }
    get email() {
      return this.form.get('email');
    }
    get name() {
      return this.form.get('name');
    }
    get mobile() {
      return this.form.get('mobile');
    }
    get age() {
      return this.form.get('age');
    }
   get status(){
    return this.form.get('status');
   }

    resetPatient(){
      this.form.controls['mobile'].reset();
      this.form.controls['name'].reset();
      this.form.controls['age'].reset();
      this.form.controls['email'].reset();
    }
   
   
   
  createDrug() {
    (this.form.get('drugs') as FormArray).push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl(null, Validators.required),
      })
      
    );
   
  
  }
  
  addPatient() {
    this._patientService.addPatient({
      id: new Date().getTime().toString(),
      ...this.form.getRawValue(),
    } as Patient);
    this._router.navigate(['home']);
    this.toastr.success("Patient saved and inducted succesfully");
  }

  get drugs() {
    return (this.form.get('drugs') as FormArray).controls;
  }
remove(i: number){
this.drugs.splice(i,1);
}
}

