import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.scss']
})
export class UserinputComponent implements OnInit {

  // formGroup = new FormGroup();
  form = new FormGroup({
    message: new FormControl(''),
    key: new FormControl('')
  });

  baseList: any = [
    { id: 1, name: 'Tanglang La' },
    { id: 2, name: 'Khardung La' },
    { id: 3, name: 'Sasser Pass' },
    { id: 4, name: 'Zoji Lam' },
    { id: 5, name: 'Rezang La' },
    { id: 6, name: 'Marsimik La' },
    { id: 7, name: 'Gyong La' },
    { id: 8, name: 'Indira Col' },
    { id: 9, name: 'Eemsi La' }

  ];

  constructor(private app: AppComponent) { }

  ngOnInit(): void {
  }

  submit(): void {

  }

  onCheckboxChange(e) {
    // const website: FormArray = this.form.get('website') as FormArray;

    // if (e.target.checked) {
    //   website.push(new FormControl(e.target.value));
    // } else {
    //    const index = website.controls.findIndex(x => x.value === e.target.value);
    //    website.removeAt(index);
    // }
  }

  log(x) {
    console.log('>>>>', x);
  }
}
