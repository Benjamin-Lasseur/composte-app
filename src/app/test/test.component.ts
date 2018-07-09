import { Component, OnInit } from '@angular/core';
import GetSheetDone from 'get-sheet-done';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    GetSheetDone.raw("1KEaV8IHtB5bHDoiQ3-FbTocALJc7nBRKrrf4pBHzlco").then(sheet => {
      console.log(sheet);
  });
  }

}
