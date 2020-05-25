import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ValidatorFn, FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {

  fg : FormGroup;

  constructor(
    private builder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fg =  this.builder.group({
      date: [null, this.notBefore(new Date(2000,1,1))]
    })
  }

  notBefore(date: Date): ValidatorFn {
    return(control: FormControl) => {
      if(control.value == null) return null;
      if(control.value.getTime() < date.getTime()){
        return {notBeforeError: "La date doit être supérieur au 1/1/2000"}
      }
      return null;
    }
  }

}
