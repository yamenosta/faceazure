import { Component, OnInit, wtfCreateScope } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from'@angular/fire/database';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-testfire',
  templateUrl: './testfire.component.html',
  styleUrls: ['./testfire.component.css']
})
export class TestfireComponent implements OnInit {
 item: Observable<any[]>;
 itemRef: AngularFireList<any>;
 data: any;
  constructor( db: AngularFireDatabase) {
    this.itemRef = db.list("user");
    this.item= this.itemRef.snapshotChanges().pipe(
   map(changes=> changes.map(c=> ({key: c.payload,...c.payload.val()})))
    )
  }

  ngOnInit() {

    
  }

  onSubmit(f: NgForm){
      this.data={
        nom:f.value.nom,
        prenom: f.value.prenom,
        age: f.value.age,
        confirm: false
      }
this.itemRef.push(this.data);

  }
  delete(key){
    this.itemRef.remove(key);
  }

  edit(key){
    var result= confirm('Are you sure')
    if (result){
      this.itemRef.update(key, {'confirm': 'true'})
    }

  }



}
