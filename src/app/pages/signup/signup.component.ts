import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  currentStep = 0;
  stepsForm: FormGroup[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.stepsForm = [
      this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
      }),
      // Add more FormGroup instances for other steps if needed
    ];
  }

  nextStep(): void {
    if (this.currentStep < this.stepsForm.length - 1) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  submitForm(): void {
    // Handle form submission logic here
    console.log('Form submitted!');
  }
}
