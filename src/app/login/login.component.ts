import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const MATERIAL_COMPONENTS = [
  BrowserModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
];
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MATERIAL_COMPONENTS],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
    loginForm: FormGroup;
    hide = true;

    constructor(private fb: FormBuilder) {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
    }

    onSubmit() {
      if (this.loginForm.valid) {
        console.log(this.loginForm.value);
      }
    }
}
