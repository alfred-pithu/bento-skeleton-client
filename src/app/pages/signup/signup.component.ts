import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup/signup.service';
import { CountryInterface } from '../../Interfaces/Country.interface';

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
      console.log(data);
      this.countries = data;
    });
  }
  submitForm(): void {
    // You can access all form values from this.stepsForm
    const formData = {
      ...this.stepsForm[0].value,
      ...this.stepsForm[1].value,
    };
    console.log('Form submitted!', formData);

    // Here, you can send the formData to your backend
    // For example, you can use Angular HttpClient to make an API call
    // this.httpClient.post('your-backend-api-endpoint', formData).subscribe(response => {
    //   console.log('Backend response:', response);
    // });
  }
}
