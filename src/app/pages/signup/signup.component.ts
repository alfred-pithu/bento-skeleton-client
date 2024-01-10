import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup/signup.service';
import { CountryInterface } from '../../Interfaces/Country.interface';
import { format } from 'date-fns';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  currentStep = 0;
  stepsForm: FormGroup[] = [];
  countries: CountryInterface[] = [];

  constructor(private fb: FormBuilder, private SignupService: SignupService) {}

  ngOnInit(): void {
    this.getAllCountries();

    this.stepsForm = [
      this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
      }),
      this.fb.group({
        restaurantName: ['', Validators.required],
        location: ['', Validators.required],
        country: ['', Validators.required],
        monthlyOrders: ['', Validators.required],
        openingTime: [null, Validators.required],
        closingTime: [null, Validators.required],
        delivery: [true],
        pickup: [true],
      }),
    ];
  }

  get isNextButtonDisabled(): boolean {
    return this.stepsForm[this.currentStep].invalid;
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

  getAllCountries(): void {
    this.SignupService.getAllCountry().subscribe((data) => {
      this.countries = data;
    });
  }
  submitForm(): void {
    // Format time as "h a" (e.g., "6 am")
    const formatTime = (time: Date | null): string | null => {
      return time ? format(time, 'h a') : null;
    };

    // Get formatted opening and closing times
    const openingTimeFormatted = formatTime(
      this.stepsForm[1].get('openingTime')?.value
    );
    const closingTimeFormatted = formatTime(
      this.stepsForm[1].get('closingTime')?.value
    );
    const formData = {
      ...this.stepsForm[0].value,
      ...this.stepsForm[1].value,
      openingTime: openingTimeFormatted,
      closingTime: closingTimeFormatted,
    };
    console.log('Form submitted!', formData);
  }
}
