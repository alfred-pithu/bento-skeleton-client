import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { SignupService } from '../../services/signup/signup.service'
import { CountryInterface } from '../../Interfaces/Country.interface'
import { format } from 'date-fns'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  currentStep = 0
  countries: CountryInterface[] = []
  clickedOrderAmount: string = ''
  isClicked: boolean = false
  clickedIndex: number = 0

  orderAmounts: string[] = ['0 - 350', '350 - 750', '750 - 1250', '> 1250']
  designations: string[] = ['Owner', 'Manager', 'Admin', 'HR']
  typeOfRestaurant: string[] = [
    'Fast Food Restaurant',
    'Casual Dining Restaurant',
    'Fine Dining Restaurant',
    'Café ',
    'Family Style Restaurant',
    'Pizzeria',
    'Steakhouse',
    'Barbecue Restaurant',
  ]

  constructor(private fb: FormBuilder, private SignupService: SignupService) {}

  ngOnInit(): void {
    this.getAllCountries()
  }

  firstForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
  })

  secondForm = new FormGroup({
    restaurantName: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    halal: new FormControl('', Validators.required),
    billPerClient: new FormControl('', Validators.required),
    website: new FormControl('', Validators.required),
    restaurantPhone: new FormControl('', Validators.required),
    veganFriendly: new FormControl(false, Validators.required),
    sellsAlcohol: new FormControl(false, Validators.required),
    monthlyOrders: new FormControl('', Validators.required),
    openingTime: new FormControl(null, Validators.required),
    closingTime: new FormControl(null, Validators.required),

    typeOfRestaurant: new FormControl('', Validators.required),
    kidsZone: new FormControl(false, Validators.required),
    city: new FormControl(true),
  })

  operationThirdForm = new FormGroup({
    delivery: new FormControl(true),
    pickup: new FormControl(true),
  })

  bankingInfoFourthForm = new FormGroup({
    bankName: new FormControl('', Validators.required),
    bankAccountHolder: new FormControl('', Validators.required),
    bankAccountNumber: new FormControl('', Validators.required),
    bankAccountRoutingNumber: new FormControl('', Validators.required),
  })

  orderAmountClickHandler(amount: string, index: number) {
    this.isClicked = !this.isClicked
    this.clickedIndex = index

    this.secondForm.get('monthlyOrders')?.setValue(amount)
  }

  isNextButtonDisabled(): boolean {
    return !this.firstForm.valid
  }
  isNextButtonDisabledForSecondForm(): boolean {
    return !this.secondForm.valid
  }

  isSubmitDisabled(): boolean {
    return !this.secondForm.valid
  }

  nextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--
    }
  }

  getAllCountries(): void {
    this.SignupService.getAllCountry().subscribe((data) => {
      this.countries = data
    })
  }

  // Format time as "h a" (e.g., "6 am")
  formatTime = (time: Date | null): string | null => {
    return time ? format(time, 'h a') : null
  }

  submitForm(): void {
    const openingTimeControl = this.secondForm.get('openingTime')
    const closingTimeControl = this.secondForm.get('closingTime')

    if (openingTimeControl && closingTimeControl) {
      // Formatting both time into strings
      const openingTimeFormatted = this.formatTime(openingTimeControl.value)
      const closingTimeFormatted = this.formatTime(closingTimeControl.value)

      const formData = {
        ...this.firstForm.value,
        ...this.secondForm.value,
        openingTime: openingTimeFormatted,
        closingTime: closingTimeFormatted,
      }
      console.log('Form submitted!', formData)
    }
  }
}
