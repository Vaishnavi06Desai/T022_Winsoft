import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  // place1: boolean = false;
  // place2: boolean = false;
  // place3: boolean = false;
  // place4: boolean = false;
  // place5: boolean = false;
  // place6: boolean = false;
  // place7: boolean = false;
  // place8: boolean = false;
  // place9: boolean = false;
  // place10: boolean = false;
  // place11: boolean = false;

  iplace1: boolean = false;
  iplace2: boolean = false;
  iplace3: boolean = false;
  iplace4: boolean = false;
  iplace5: boolean = false;
  iplace6: boolean = false;
  iplace7: boolean = false;
  iplace8: boolean = false;
  iplace9: boolean = false;
  iplace10: boolean = false;
  iplace11: boolean = false;

  dplace1: boolean = false;
  dplace2: boolean = false;
  dplace3: boolean = false;
  dplace4: boolean = false;
  dplace5: boolean = false;
  dplace6: boolean = false;
  dplace7: boolean = false;
  dplace8: boolean = false;
  dplace9: boolean = false;
  dplace10: boolean = false;
  dplace11: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.iplace7 = true;
    this.iplace4 = true;
    this.dplace1 = true
  }

}
