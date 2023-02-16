import { Component, inject, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { debounceTime, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Patient } from '../authentication/patient.interface';
import { PatientsService } from '../authentication/patient.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  patients$!: Observable<Patient[]>;
  _patientService = inject(PatientsService);
  _router = inject(Router);
  searcher = new FormControl('');
  constructor(private router: Router, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.patients$ = this._patientService.getPatients();
    this.searcher.valueChanges.pipe(debounceTime(1000)).subscribe((search) => {
      // this._patientService.
      if (search) {
        console.log(search);
        this.patients$ = this._patientService.getPatients(search);
      } else {
        this.patients$ = this._patientService.getPatients();
      }
    });
    if (sessionStorage.getItem('key') == null) {
      { this.router.navigate(['login']) }
    }


  }


  editPatient(patient: Patient) {
    this._router.navigateByUrl('/edit', { state: { patient } });
  }
  deletePatient(patient: Patient) {
    if (confirm(`Sure you want to delete  this Patient ${patient.name}`)) {
      this._patientService.deletePatient(patient.id);
    }
    this.toastr.error("Patient data has been deleted");

  }
  approvePatient(patient: Patient) {
    this._router.navigateByUrl('/approve', { state: { patient } });
  }
 
}
