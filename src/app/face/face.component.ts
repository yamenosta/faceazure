import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';

var particlesJS: any;
@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {

  @ViewChild("visualization") visualization: ElementRef;
  @ViewChild('img') img: ElementRef;
  private context: CanvasRenderingContext2D;
  private element: HTMLImageElement;
  canvasWidth: number;
  canvasHeight: number;

   imageUrl: string="http://storage.news.nowmedia.co.za/medialibrary/Article/176965/Roommatik-tests-facial-recognition-to-streamline-hotel-check-in-800x400.jpg";
   personAge;
   imgData;
   age:boolean; 
   gender:boolean;
   headPose:boolean;
   smile:boolean;
   facialHair:boolean;
   glasses:boolean;
   emotion:boolean;
   hair:boolean;
   makeup:boolean;
   occlusion:boolean;
   accessories:boolean;
   blur:boolean;
   exposure:boolean;
   noise:boolean;
   opt:string;
   droprect:Boolean =false;
   widthImg;
   heightImg;
   recTop:string;
   recLeft:string;
   recW:string;
   recH:string;
   personMale;
   personFemale;
   personChildren;
   personNumber;
   percentAnger: number;
  percentFear: number;
  percentHapiness: number;
  percentNeutral: number;
  percentSadeness: number;
  percentSurprise: number;
  constructor( private data: DataService) {
    
   
   }

   ngAfterViewInit() {
    this.context = this.visualization.nativeElement.getContext("2d") ;
    this.element = this.img.nativeElement;
  }
  afterLoading() {
    this.canvasWidth = 650;
    this.canvasHeight = 400;
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    console.log('drawImage');
    // this prints an image element with src I gave
    console.log(this.element);
    this.context.drawImage(this.element, 0, 0, this.canvasWidth, this.canvasHeight);
    //this.context.drawImage(this.element,305,121,198,198, 0,0,300  ,300);

  }


   handleImageLoad(event): void {
    this.widthImg = event.target.width;
    this.heightImg = event.target.height;
    console.log(this.widthImg);
    console.log(this.heightImg);
  }
 ngOnInit(){
 
  this.opt='age';
  this.droprect= false;
  var image = new Image();
  image.src = this.imageUrl;
  image.addEventListener('load', (e) => this.handleImageLoad(e));
  
 }


   
 getPersonAge(imageUrl: string, opt:string){
  var anger: number = 0;
  var fear: number = 0;
  var hapiness: number = 0;
  var neutral: number = 0;
  var sadness: number = 0;
  var surprise: number = 0;
  this.percentAnger = 0;
  this.percentFear = 0;
  this.percentHapiness = 0;
  this.percentNeutral = 0;
  this.percentSadeness = 0;
  this.percentSurprise = 0;
  var pAnger = 0;
  var pFear = 0;
 var pHapiness = 0;
 var pNeutral = 0;
  var pSadeness = 0;
  var pSurprise = 0;
   this.personChildren=0;
   this.personMale=0;
   this.personFemale=0;
   var leftRec, topRec, widthRec, heightRec;
   
  var image = new Image();
  this.droprect=true;
  image.src = this.imageUrl;
  image.addEventListener('load', (e) => {this.handleImageLoad(e)}  );
  
  
  

  
  

  
   this.data.getPersonAge(imageUrl).subscribe(
     data=>{this.personAge = data.json(); 
      this.personNumber= this.personAge.length;
      for (let i = 0; i < this.personAge.length; i++) {
         pAnger = 0;
         pFear = 0;
         pHapiness = 0;
         pNeutral = 0;
         pSadeness = 0;
         pSurprise = 0;

        anger = anger + this.personAge[i].faceAttributes.emotion.anger;
        pAnger= (this.personAge[i].faceAttributes.emotion.anger)*100;

        fear = fear + (this.personAge[i].faceAttributes.emotion.fear);
        pFear= (this.personAge[i].faceAttributes.emotion.fear)*100;

        hapiness = hapiness + (this.personAge[i].faceAttributes.emotion.happiness);
        pHapiness= (this.personAge[i].faceAttributes.emotion.happiness)*100;

        neutral = neutral + (this.personAge[i].faceAttributes.emotion.neutral);
        pNeutral=(this.personAge[i].faceAttributes.emotion.neutral)*100;

        sadness = sadness + (this.personAge[i].faceAttributes.emotion.sadness);
        pSadeness= (this.personAge[i].faceAttributes.emotion.sadness)*100;

        surprise = surprise + (this.personAge[i].faceAttributes.emotion.surprise);
        pSurprise= (this.personAge[i].faceAttributes.emotion.surprise)*100;

        leftRec = ((this.personAge[i].faceRectangle.left) * (this.canvasWidth)) / this.widthImg;
        topRec = ((this.personAge[i].faceRectangle.top) * (this.canvasHeight)) / this.heightImg;
        widthRec = ((this.personAge[i].faceRectangle.width) * (this.canvasWidth)) / this.widthImg;
        heightRec = ((this.personAge[i].faceRectangle.height) * (this.canvasHeight)) / this.heightImg;
        this.context.strokeStyle = "#FF0000";
        this.context.strokeRect(leftRec, topRec, widthRec, heightRec);
        this.context.font = "20px Arial";
        this.context.fillStyle = "red";
        this.context.fillText("Person" + (i + 1), leftRec + 10, topRec - 10);

        if (this.personAge[i].faceAttributes.gender === 'male') {
          this.personMale = this.personMale + 1;
  
        }
        if (this.personAge[i].faceAttributes.gender === 'female') {
          this.personFemale = this.personFemale + 1;
        }
        if (this.personAge[i].faceAttributes.age < 17) {
          this.personChildren = this.personChildren + 1;
        }
      }
      console.log('male:' + this.personMale);
        console.log('female:' + this.personFemale);
        this.percentSurprise = (surprise / this.personNumber) * 100;
        console.log(' surprise:' + surprise);
        console.log('numer person:' + this.personNumber);
        console.log('pourcentage surprise:' + this.percentSurprise);
        this.percentAnger = (anger / this.personNumber) * 100;
        console.log('pourcentage anger: an' + this.percentAnger);
        this.percentFear = (fear / this.personNumber) * 100;
        console.log('pourcentage fear;' + this.percentFear);
        this.percentSadeness = (sadness / this.personNumber) * 100;
        console.log('pourcentage sadness:' + this.percentSadeness);
        this.percentNeutral = (neutral / this.personNumber) * 100;
        console.log('pourcentage neutral:' + this.percentNeutral);
        this.percentHapiness = (hapiness / this.personNumber) * 100;
        console.log('pourcentage hapiness:' + this.percentHapiness);
      
    } ) 
   
    }
    


    }
   
    
    
   
    
 
 

 


