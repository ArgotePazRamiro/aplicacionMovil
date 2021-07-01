import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  signup = { email: '', password: '' };
  submitted = false;

  constructor(private authService: AuthService) { }

  onSignup(form: NgForm) {
    if (form.valid) {
      this.authService.signUpWithEmail({ email: form.control.value.email, password: form.control.value.password});
    }
  }
}
