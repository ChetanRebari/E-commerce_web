import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  myForm: any;
  hide:boolean=true

  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit() {
    // Initialize the form and define form controls
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      lastname: ['', [Validators.required, ]],
      Password: ['', [Validators.required, ]],
    });
  }

  onSubmit() {

    if (this.myForm.valid) {
      localStorage.setItem('formData',JSON.stringify(this.myForm.value) );
      this.hide=false;
      this.router.navigate(['cart'])
   
    
    } else {
      console.log('Form is invalid. Please check the fields.');
    } 

  }
   


  get email() {
    return this.myForm.get('email')
  }
  get Password() {
    return this.myForm.get('Password')
  }


  usernotlogin(){
    this.hide=false;
    this.router.navigate(['home'])
  }

}
