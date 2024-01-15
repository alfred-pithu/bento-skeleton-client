import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { SignupService } from '../../services/signup/signup.service'
import { SingleCountryInterface } from '../../Interfaces/Country.interface'
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  currentStep = 0
  countries: SingleCountryInterface[] = []
  clickedOrderAmount: string = ''
  isClicked: boolean = false
  clickedIndex: number = 0

  orderAmounts: string[] = ['0 - 350', '350 - 750', '750 - 1250', '> 1250']
  designations: string[] = ['Owner', 'Manager', 'Admin', 'HR']

  weekDays: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
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

  Cuisines = [
    'Italian',
    'Chinese',
    'Indian',
    'Japanese',
    'Mediterranean',
    'Mexican',
    'French',
    'Thai',
    'American',
    'Brazilian',
    'Turkish',
    'Vietnamese',
    'Korean',
    'Spanish',
    'Middle Eastern',
  ]


  constructor(private fb: FormBuilder, private SignupService: SignupService) { }

  defaultDate = new Date();


  ngOnInit(): void {

    this.getAllCountries()
    this.defaultDate.setHours(0, 0, 0, 0);

    this.operationThirdForm.get('delivery')?.valueChanges.subscribe(value => {
      if (value) {
        this.operationThirdForm.get('deliveryTimeStart')?.setValidators(Validators.required);
        this.operationThirdForm.get('deliveryTimeEnd')?.setValidators(Validators.required)
        this.operationThirdForm.get('minimumDeliveryAmount')?.setValidators(Validators.required)
        this.operationThirdForm.get('maximumDeliveryRange')?.setValidators(Validators.required)
      } else {
        this.operationThirdForm.get('deliveryTimeStart')?.removeValidators(Validators.required);
        this.operationThirdForm.get('deliveryTimeEnd')?.removeValidators(Validators.required);
        this.operationThirdForm.get('minimumDeliveryAmount')?.removeValidators(Validators.required);
        this.operationThirdForm.get('maximumDeliveryRange')?.removeValidators(Validators.required);
      }

      this.operationThirdForm.get('deliveryTimeStart')?.updateValueAndValidity()
      this.operationThirdForm.get('deliveryTimeEnd')?.updateValueAndValidity()
      this.operationThirdForm.get('minimumDeliveryAmount')?.updateValueAndValidity()
      this.operationThirdForm.get('maximumDeliveryRange')?.updateValueAndValidity()

    });


    this.operationThirdForm.get('pickup')?.valueChanges.subscribe(value => {
      if (value) {
        this.operationThirdForm.get('pickupTimeStart')?.setValidators(Validators.required);
        this.operationThirdForm.get('pickupTimeEnd')?.setValidators(Validators.required);
      } else {
        this.operationThirdForm.get('pickupTimeStart')?.removeValidators(Validators.required);
        this.operationThirdForm.get('pickupTimeEnd')?.removeValidators(Validators.required);
      }
      this.operationThirdForm.get('pickupTimeStart')?.updateValueAndValidity()
      this.operationThirdForm.get('pickupTimeEnd')?.updateValueAndValidity()
    })

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
    country: new FormControl({ countryCode: '', countryName: '', zoneName: '', gmtOffset: 0, timestamp: 0, },
      Validators.required
    ),
    halal: new FormControl('', Validators.required),
    billPerClient: new FormControl('', Validators.required),
    website: new FormControl('', Validators.required),
    restaurantPhone: new FormControl('', Validators.required),
    veganFriendly: new FormControl(false, Validators.required),
    sellsAlcohol: new FormControl(false, Validators.required),
    monthlyOrders: new FormControl('', Validators.required),

    restaurantLogo: new FormControl('', Validators.required),

    typeOfRestaurant: new FormControl('', Validators.required),
    kidsZone: new FormControl(false, Validators.required),
    city: new FormControl(true),
  })

  operationThirdForm = new FormGroup({
    delivery: new FormControl(true, Validators.required),


    deliveryTimeStart: new FormControl<Date | null>(null),
    deliveryTimeEnd: new FormControl<Date | null>(null, Validators.required),
    minimumDeliveryAmount: new FormControl(''),
    maximumDeliveryRange: new FormControl(''),

    pickup: new FormControl(true, Validators.required),
    pickupTimeStart: new FormControl<Date | null>(null, Validators.required),
    pickupTimeEnd: new FormControl<Date | null>(null, Validators.required),


    operationOpeningTime: new FormControl<Date | null>(null, Validators.required),
    operationClosingTime: new FormControl<Date | null>(null, Validators.required),

    breakfastStart: new FormControl<Date | null>(null, Validators.required),
    breakfastEnd: new FormControl<Date | null>(null, Validators.required),

    lunchStart: new FormControl<Date | null>(null, Validators.required),
    lunchEnd: new FormControl<Date | null>(null, Validators.required),

    dinnerStart: new FormControl<Date | null>(null, Validators.required),
    dinnerEnd: new FormControl<Date | null>(null, Validators.required),

    dineInTimeStart: new FormControl<Date | null>(null, Validators.required),
    dineInTimeEnd: new FormControl<Date | null>(null, Validators.required),


    operatingDays: new FormControl([], Validators.required),
    cuisines: new FormControl([], Validators.required),
    doesOperateOnHolidays: new FormControl(null, Validators.required),
    maximumWaiterNumber: new FormControl('', Validators.required),
    maximumChefNumber: new FormControl('', Validators.required),
    maximumDinningCapacity: new FormControl('', Validators.required),
    dinningAreaSqFeet: new FormControl('', Validators.required),
    kitchenAreaSqFeet: new FormControl('', Validators.required),
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


  fileList: NzUploadFile[] = [];


  handleLogoUploadChange($event: NzUploadChangeParam) {
    if ($event.type == 'start') {
      let fileList = [...$event.fileList]
      fileList = fileList.slice(-1)
      const file = fileList[0].originFileObj;

      const reader = new FileReader()

      reader.onloadend = () => {
        const base64String = reader.result as string;
        this.secondForm.get('restaurantLogo')?.setValue(base64String)
      }

      if (file) {
        reader.readAsDataURL(file)
      }
    }

  }

  isNextButtonDisabled(): boolean {

    if (this.currentStep == 0) {
      return !this.firstForm.valid
    } else if (this.currentStep == 1) {
      return !this.secondForm.valid
    } else if (this.currentStep == 2) {
      return !this.operationThirdForm.valid
    } else if (this.currentStep == 3) {
      return !this.bankingInfoFourthForm.valid
    }
    return false
  }


  isSubmitDisabled(): boolean {
    return !this.secondForm.valid
  }

  convertToUTCDate(date: Date) {
    if (this.secondForm.value.country?.gmtOffset) {
      const utcHour = date.getHours() - this.secondForm.value.country?.gmtOffset / 3600
      const utcMins = date.getMinutes()
      return new Date(Date.UTC(1, 1, 1, utcHour, utcMins, 0))
    } else {
      return null
    }
  }

  nextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++

      if (this.currentStep == 3 && this.operationThirdForm.value.operationOpeningTime && this.operationThirdForm.value.operationClosingTime
        && this.operationThirdForm.value.breakfastStart && this.operationThirdForm.value.breakfastEnd
        && this.operationThirdForm.value.lunchStart && this.operationThirdForm.value.lunchEnd
        && this.operationThirdForm.value.dinnerStart && this.operationThirdForm.value.dinnerEnd
        && this.operationThirdForm.value.deliveryTimeStart && this.operationThirdForm.value.deliveryTimeEnd) {

        const operationOpeningUTCDate = this.convertToUTCDate(this.operationThirdForm.value.operationOpeningTime)
        this.operationThirdForm.get('operationOpeningTime')?.setValue(operationOpeningUTCDate)

        const operationClosingUTCDate = this.convertToUTCDate(this.operationThirdForm.value.operationClosingTime)
        this.operationThirdForm.get('operationClosingTime')?.setValue(operationClosingUTCDate)

        const breakfastStartUTCDate = this.convertToUTCDate(this.operationThirdForm.value.breakfastStart)
        this.operationThirdForm.get('breakfastStart')?.setValue(breakfastStartUTCDate)

        const breakfastEndUTCDate = this.convertToUTCDate(this.operationThirdForm.value.breakfastEnd)
        this.operationThirdForm.get('breakfastEnd')?.setValue(breakfastEndUTCDate)

        const lunchStartUTCDate = this.convertToUTCDate(this.operationThirdForm.value.lunchStart)
        this.operationThirdForm.get('lunchStart')?.setValue(lunchStartUTCDate)

        const lunchEndUTCDate = this.convertToUTCDate(this.operationThirdForm.value.lunchEnd)
        this.operationThirdForm.get('lunchEnd')?.setValue(lunchEndUTCDate)

        const dinnerStartUTCDate = this.convertToUTCDate(this.operationThirdForm.value.dinnerStart)
        this.operationThirdForm.get('dinnerStart')?.setValue(dinnerStartUTCDate)

        const dinnerEndUTCDate = this.convertToUTCDate(this.operationThirdForm.value.dinnerEnd)
        this.operationThirdForm.get('dinnerEnd')?.setValue(dinnerEndUTCDate)

        const deliveryStartUTCDate = this.convertToUTCDate(this.operationThirdForm.value.deliveryTimeStart)
        this.operationThirdForm.get('deliveryTimeStart')?.setValue(deliveryStartUTCDate)


        const deliveryEndUTCDate = this.convertToUTCDate(this.operationThirdForm.value.deliveryTimeEnd)
        this.operationThirdForm.get('deliveryTimeEnd')?.setValue(deliveryEndUTCDate)

      }


    }
  }


  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--
    }
  }

  getAllCountries(): void {
    this.SignupService.getAllCountry().subscribe((data) => {
      this.countries = data.zones
    })
  }


  submitForm(): void {

    const formData = {
      restaurantRep: { ...this.firstForm.value, restaurantName: this.secondForm.value.restaurantName },
      restaurantInfo: {
        ...this.secondForm.value,
        ...this.operationThirdForm.value,
        ...this.bankingInfoFourthForm.value
      }

    }

    if (formData.restaurantInfo.pickup == false) {
      formData.restaurantInfo.pickupTimeStart = null
      formData.restaurantInfo.pickupTimeEnd = null
    }

    if (formData.restaurantInfo.delivery == false) {
      formData.restaurantInfo.deliveryTimeStart = null
      formData.restaurantInfo.deliveryTimeEnd = null
      formData.restaurantInfo.maximumDeliveryRange = null
      formData.restaurantInfo.minimumDeliveryAmount = null
    }


    this.SignupService.sendRegistrationInfoToBackend(formData).subscribe((res) => {
      console.log(res);
    })

  }
}
