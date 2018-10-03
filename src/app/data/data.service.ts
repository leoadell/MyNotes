import { Injectable, OnInit } from '@angular/core';
import { Post } from '../Post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable()
export class DataService implements OnInit {
entradas =[];
  ELEMENT_DATA: Post[] = [
    { position: 0, title: 'Post One', category: 'Web Development', date_posted: new Date(), body: 'Body 1' },
    { position: 1, title: 'Post Two', category: 'Android Development', date_posted: new Date(), body: 'Body 2' },
    { position: 2, title: 'Post Three', category: 'IOS Development', date_posted: new Date(), body: 'Body 3' },
    { position: 3, title: 'Post Four', category: 'Android Development', date_posted: new Date(), body: 'Body 4' },
    { position: 4, title: 'Post Five', category: 'IOS Development', date_posted: new Date(), body: 'Body 5' },
    { position: 5, title: 'Post Six', category: 'Web Development', date_posted: new Date(), body: 'Body 6' },
  ];
  categories = [
    { value: 'Web-Development', viewValue: 'Web Development' },
    { value: 'Android-Development', viewValue: 'Android Development' },
    { value: 'IOS-Development', viewValue: 'IOS Development' }
  ];
  constructor(
    private _store: AngularFirestore,

  ) {

    this._store.collection('entradas')
    .valueChanges()
    .subscribe(entradas =>this.entradas = entradas);
   }

  ngOnInit(){
   
  }
  getData(): Observable<Post[]> {
    return Observable.of<Post[]>(this.entradas);
  }

  getCategories() {
    return this.categories;
  }

  addPost(data) {
    this.ELEMENT_DATA.push(data);
  }

  deletePost(index) {
    this.ELEMENT_DATA = [ ...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}
