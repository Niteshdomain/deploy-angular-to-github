import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { FirestoreModule } from '@angular/fire/firestore';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { InvalidComponent } from './invalid/invalid.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toastr';
import { ForgotComponent } from './forgot/forgot.component';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire/compat';
import { VerifyComponent } from './verify/verify.component';
import { PatientApproveComponent } from './patient-approve/patient-approve.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    HomeComponent,
    PatientAddComponent,
    PatientEditComponent,
    InvalidComponent,
    SignUpComponent,
    ForgotComponent,
    VerifyComponent,
    PatientApproveComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FirestoreModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    HotToastModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AngularFireAuthModule ,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    AngularFireModule.initializeApp((environment.firebase))
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
