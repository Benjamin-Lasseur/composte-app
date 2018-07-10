import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/service/items.service';
import { Observable } from 'rxjs';
import { Item } from '../shared/domain/item';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  itemsObservable:Observable<Item[]>;
  itemsList:Item[]
  constructor(public itemsService:ItemsService) { }
 
  ngOnInit() {
  this.itemsObservable = this.itemsService.listerItems()
  this.itemsObservable.subscribe(items => this.itemsList = items)
  }

}
