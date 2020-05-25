import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm()
  {
    this.userForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        films: this.formBuilder.array([])
      }
    )
  }

  onSubmitForm(){
    const formValue = this.userForm.value;
    const newUser =  new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['films'] ? formValue['films'] : []
    );
    this.userService.addUser(newUser);
      this.router.navigate(['/demo/demo7']);
  }

  getFilms()
  {
    return this.userForm.get('films') as FormArray;
  }

  onAddFilm(){
    const newFilmControl = this.formBuilder.control('', Validators.required);
    this.getFilms().push(newFilmControl);
  }

}
