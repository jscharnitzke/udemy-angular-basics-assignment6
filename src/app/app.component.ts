import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('loginForm') loginForm: NgForm;

  subTypes = ['Basic', 'Advanced', 'Pro'];
  defaultSub = 'Advanced';

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
