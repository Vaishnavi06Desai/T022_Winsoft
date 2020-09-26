import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

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


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    // this.iplace7 = true;
    // this.iplace4 = true;
    // this.dplace1 = true
    this.getnode({"target": ["J", "I", "K"]});
  }

  url = "http://localhost:5001/location";
  getnode(infiltrated){
    let header_node = {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'))
      };
      // let input = new FormData();
      // input.append("file", file);
      // input.append("docType", data);
    this.httpClient.post<any>(this.url, infiltrated, header_node).subscribe(
      (res) => {console.log(res.target);
                if(res.desired_node == "A") this.dplace4 = true;
                else if(res.desired_node == "B") this.dplace1 = true;
                else if(res.desired_node == "C") this.dplace5 = true;
                else if(res.desired_node == "D") this.dplace9 = true;
                else if(res.desired_node == "E") this.dplace2 = true;
                else if(res.desired_node == "F") this.dplace6 = true;
                else if(res.desired_node == "G") this.dplace10 = true;
                else if(res.desired_node == "H") this.dplace7 = true;
                else if(res.desired_node == "I") this.dplace3 = true;
                else if(res.desired_node == "J") this.dplace11 = true;
                else if(res.desired_node == "K") this.dplace8 = true;
          
                if(res.target.includes("A")) this.iplace4 = true;
                if(res.target.includes("B")) this.iplace1 = true;
                if(res.target.includes("C")) this.iplace5 = true;
                if(res.target.includes("D")) this.iplace9 = true;
                if(res.target.includes("E")) this.iplace2 = true;
                if(res.target.includes("F")) this.iplace6 = true;
                if(res.target.includes("G")) this.iplace10 = true;
                if(res.target.includes("H")) this.iplace7 = true;
                if(res.target.includes("I")) this.iplace3 = true;
                if(res.target.includes("J")) this.iplace11 = true;
                if(res.target.includes("K")) this.iplace8 = true;
              },
      (err) => {
                  console.log(err); 
                  // if(err.status == 0 || err.status == 500)
                  // {this.setValuee(true)}
                  // else if(err.status == 401)
                  // {this.setValueu(true)}
              }
    );
  }

}
