import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.scss']
})
export class UserinputComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit(): void {
  }

}
