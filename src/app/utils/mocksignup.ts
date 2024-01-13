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

  stepsForm: FormGroup[] = [];

  ngOnInit(): void {
    this.getAllCountries();

    this.stepsForm = [
      this.fb.group({
        firstName: new FormControl('', Validators.required),
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
        city: ['', Validators.required],
      }),
    ];
  }

  orderAmountClickHandler(amount: string, index: number) {
    this.clickedOrderAmount = amount;
    this.isClicked = !this.isClicked;
    this.clickedIndex = index;
  }

  isNextButtonDisabled(): boolean {
    const currentForm = this.stepsForm[this.currentStep];
    return !currentForm.valid;
  }

  isSubmitDisabled(): boolean {
    return this.stepsForm.every((form) => form.valid);
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
    //MAIN FOR OMI BHAI
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
      clickedOrderAmount: this.clickedOrderAmount,
    };
    console.log('Form submitted!', formData);
  }
}




// ------------------------------
// ----------------------------------

<section class="wp-50 mx-auto mt-8 px-5 py-10">
  <nz-steps [nzCurrent]="currentStep">
    <nz-step nzTitle="About You"></nz-step>
    <nz-step nzTitle="About Your Restaurant"></nz-step>
  </nz-steps>

  <div class="mt-16">
    <div *ngIf="currentStep === 0">
      <!-- Step 1 Content -->
      <h2 class="mb-10 font-bold text-green text-center">
        Tell Us About Yourself
      </h2>
      <!-- Form for Step 1 -->
      <form
        [formGroup]="stepsForm[currentStep]"
        class="grid grid-cols-2 gap-y-4"
      >
        <div class="flex flex-col mx-auto">
          <label class="font-bold">First Name *</label>
          <input
            required
            nz-input
            type="text"
            formControlName="firstName"
            class="w-64 h-8 rounded-lg"
          />
        </div>

        <div class="flex flex-col mx-auto">
          <label class="font-bold">Last Name *</label>
          <input
            nz-input
            type="text"
            formControlName="lastName"
            class="w-64 h-8 rounded-lg"
          />
        </div>

        <div class="flex flex-col mx-auto">
          <label class="font-bold">Email *</label>
          <input
            nz-input
            type="email"
            formControlName="email"
            class="w-64 h-8 rounded-lg"
          />
        </div>

        <div class="flex flex-col mx-auto">
          <label class="font-bold">Phone *</label>
          <input
            nz-input
            type="number"
            formControlName="phone"
            class="w-64 h-8 rounded-lg"
          />
        </div>
      </form>

      <div class="flex justify-end mt-16 mr-12">
        <button
          class="border border-green text-green"
          nz-button
          [disabled]="isNextButtonDisabled()"
          (click)="nextStep()"
        >
          Next
        </button>
      </div>
    </div>

    <div *ngIf="currentStep === 1">
      <!-- Step 2 Content -->
      <h2 class="mb-10 font-bold text-green text-center">
        Tell Us About Your Restaurant
      </h2>
      <!-- Form for Step 2 -->
      <form
        [formGroup]="stepsForm[currentStep]"
        class="grid grid-cols-2 gap-y-8"
      >
        <div class="flex flex-col mx-auto">
          <label class="font-bold">Restaurant Name *</label>
          <input
            required
            nz-input
            type="text"
            formControlName="restaurantName"
            class="w-64 h-8 rounded-lg"
          />
        </div>

        <div class="flex flex-col mx-auto">
          <label class="font-bold">Location *</label>
          <input
            nz-input
            type="text"
            formControlName="location"
            class="w-64 h-8 rounded-lg"
          />
        </div>

        <div class="flex flex-col mx-auto">
          <label class="font-bold">Country *</label>
          <nz-select
            class="w-64 h-8 rounded-lg"
            nzShowSearch
            nzAllowClear
            formControlName="country"
            nzPlaceHolder="Search Country"
          >
            <nz-option
              *ngFor="let country of this.countries"
              [nzLabel]="country.name"
              [nzValue]="country.name"
            ></nz-option>
          </nz-select>
        </div>

        <div class="flex flex-col mx-auto w-64">
          <label class="font-bold">Operating Time *</label>
          <div class="flex justify-center items-center gap-x-5 mt-4">
            <nz-time-picker
              formControlName="openingTime"
              [nzUse12Hours]="true"
              nzFormat="h a"
            ></nz-time-picker>
            <span class="font-bold">To</span>
            <nz-time-picker
              formControlName="closingTime"
              [nzUse12Hours]="true"
              nzFormat="h a"
            ></nz-time-picker>
          </div>
        </div>

        <!-- Monthly Orders -->

        <div class="wp-80 col-span-2 ml-10">
          <label class="font-bold mb-5">Monthly Orders *</label>
          <div class="flex gap-x-10">
            <div
              [ngClass]="{
                'bg-black': clickedIndex == i,
                'text-white': clickedIndex == i,

              }"
              (click)="orderAmountClickHandler(orderAmount, i)"
              class="cursor-pointer border border-gray rounded-2xl w-32 h-8 flex items-center justify-center font-semibold"
              *ngFor="let orderAmount of orderAmounts; let i = index"
            >
              {{ orderAmount }}
            </div>
          </div>
        </div>

        <!-- <div></div> -->

        <div
          class="flex mx-auto mt-5 w-64 items-center justify-start gap-x-7 border border-light-gray h-8 rounded-xl pl-2 py-2"
        >
          <span class="font-bold">Enable Delivery</span>
          <nz-switch nzSize="small" formControlName="delivery"></nz-switch>
        </div>
        <div
          class="flex mx-auto mt-5 w-64 items-center justify-start gap-x-7 border border-light-gray h-8 rounded-xl pl-2 py-2"
        >
          <span class="font-bold">Enable Pickup</span>
          <nz-switch nzSize="small" formControlName="pickup"></nz-switch>
        </div>

        <div class="flex flex-col mx-auto">
          <label class="font-bold">City *</label>
          <input
            nz-input
            type="text"
            formControlName="city"
            class="w-64 h-8 rounded-lg"
          />
        </div>
      </form>

      <div class="flex justify-between mt-20">
        <button class="border text-green" nz-button (click)="prevStep()">
          Previous
        </button>
        <button
          [disabled]="isSubmitDisabled()"
          class="border border-green text-green"
          nz-button
          (click)="submitForm()"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</section>
