import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormListComponent } from './form-list/form-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormService } from './form-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule,StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';

const routes:Routes=[
  {path:'',redirectTo:'/list', pathMatch:'full'},
  {path:'list' ,component:FormListComponent},
  {path:'form' ,component:FormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
  ],
  providers: [
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
