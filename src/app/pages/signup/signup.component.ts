import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  countries: CountryInterface[] = [];
  orderAmounts: string[] = ['0 - 350', '350 - 750', '750 - 1250', '> 1250'];
  clickedOrderAmount: string = '';
  isClicked: boolean = false;
  clickedIndex: number = 0;

  constructor(private fb: FormBuilder, private SignupService: SignupService) {}

  ngOnInit(): void {
    this.getAllCountries();
  }

  firstForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
  });

  secondForm = new FormGroup({
    restaurantName: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    monthlyOrders: new FormControl('', Validators.required),
    openingTime: new FormControl(null, Validators.required),
    closingTime: new FormControl(null, Validators.required),
    delivery: new FormControl(true),
    pickup: new FormControl(true),
    city: new FormControl(true),
  });

  orderAmountClickHandler(amount: string, index: number) {
    this.isClicked = !this.isClicked;
    this.clickedIndex = index;

    this.secondForm.get('monthlyOrders')?.setValue(amount);
  }

  isNextButtonDisabled(): boolean {
    return !this.firstForm.valid;
  }

  isSubmitDisabled(): boolean {
    return !this.secondForm.valid;
  }

  nextStep(): void {
    if (this.currentStep < 1) {
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

  // Format time as "h a" (e.g., "6 am")
  formatTime = (time: Date | null): string | null => {
    return time ? format(time, 'h a') : null;
  };

  submitForm(): void {
    const openingTimeControl = this.secondForm.get('openingTime');
    const closingTimeControl = this.secondForm.get('closingTime');

    if (openingTimeControl && closingTimeControl) {
      // Formatting both time into strings
      const openingTimeFormatted = this.formatTime(openingTimeControl.value);
      const closingTimeFormatted = this.formatTime(closingTimeControl.value);

      const formData = {
        ...this.firstForm.value,
        ...this.secondForm.value,
        openingTime: openingTimeFormatted,
        closingTime: closingTimeFormatted,
      };
      console.log('Form submitted!', formData);
    }
  }
}
