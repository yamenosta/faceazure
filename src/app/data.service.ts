import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';

import { map } from "rxjs/operators";


 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public url='https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?FaceId=true&returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,occlusion,blur,exposure,noise';

  constructor(private http: Http) { }
  getPersonAge(imageUrl: string){
     const headers= new Headers
     ({
       'Content-Type':'application/json',
       'Ocp-Apim-Subscription-Key':'cafdb8c8ccec4ee98151505e48c6b27e'
     });
    const options = new RequestOptions({headers});
    this.url='https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?FaceId=true&returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,occlusion,blur,exposure,noise';
   
    return this.http.post(this.url,{url : imageUrl},options)
    
          
            
             
           ;
         
}
}
