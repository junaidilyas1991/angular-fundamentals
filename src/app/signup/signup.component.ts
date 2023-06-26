import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      skills: this.fb.array([this.createSkillGroup()])
    })
  }


  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get email() {
    return this.form.get('email');
  }
  get phoneNumber() {
    return this.form.get('phoneNumber');
  }
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }





  get skillControls() {
    return this.form.get('skills') as FormArray;
  }

  createSkillGroup() {
    return this.fb.group({
      name: ['', Validators.required],
      expertiseLevel: ['', Validators.required]
    });
  }

  addSkill() {
    const skillGroup = this.fb.group({
      name: ['', Validators.required],
      expertiseLevel: ['', Validators.required]
    });

    this.skillControls.push(skillGroup);
  }

  removeSkill(index: number) {
    this.skillControls.removeAt(index);
  }



  submit() {
    console.log('val', this.form.value)
  }

  onSubmit(event: any) {
    console.log('submit');
    if (this.form.valid) {
      // Retrieve the form values
      const formValue = this.form.value;
      console.log(formValue); // You can handle the form data here

      // Reset the form
      this.form.reset();
    } else {
      // Mark the form and its controls as touched to display validation errors
      this.form.markAllAsTouched();
    }
  }

}
