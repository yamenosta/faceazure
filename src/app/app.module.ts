import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { FaceComponent } from './face/face.component';
import { HttpModule } from '@angular/http';
import { Http,Headers, RequestOptions } from '@angular/http';
import { CamComponent } from './cam/cam.component';
import { CamdetectComponent } from './camdetect/camdetect.component';
import { PlatformInformationPipe } from './platform-information.pipe';
import { TestfireComponent } from './testfire/testfire.component';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { MheaderComponent } from './mheader/mheader.component';






@NgModule({
  declarations: [
    AppComponent,
    TestfireComponent,
    FaceComponent,
    CamComponent,
    CamdetectComponent,
    PlatformInformationPipe,
    MheaderComponent,
    

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule, 
    ReactiveFormsModule,
   
  

    
  
  ],
  providers: [
    DataService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
