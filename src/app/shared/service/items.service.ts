import { Injectable } from '@angular/core';
import { Item } from '../domain/item';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import GetSheetDone from 'get-sheet-done';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }
  itemsSubject:Subject<Item[]> = new Subject();
  itemTab:Item[] = []

  listerItems():Observable<Item[]>{
    GetSheetDone.raw("1KEaV8IHtB5bHDoiQ3-FbTocALJc7nBRKrrf4pBHzlco").then(sheet => {
      sheet.data.forEach(element => {
      let item1:Item = new Item(element[0],element[1],element[2],element[3]) ;
      this.itemTab.push(item1); 
      });
      this.itemsSubject.next(this.itemTab);
    })
    return this.itemsSubject.asObservable();
   }
}
