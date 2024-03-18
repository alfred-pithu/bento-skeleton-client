import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { SignupService } from '../../services/signup/signup.service'
import { SingleCountryInterface } from '../../Interfaces/country.interface'
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload'
import { Router } from '@angular/router';
import { ToastMessageService } from '../../services/toast-message/toast-message.service'
import { CloudinaryServiceService } from '../../services/cloudinary/cloudinary-service.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {


  loading = false;
  avatarUrl?: string;

  isPassAndConfirmPassSame: boolean = true;
  currentStep = 0
  countries: SingleCountryInterface[] = []
  clickedOrderAmount: string = ''
  isClicked: boolean = false
  clickedIndex: number = 0

  curriencies: string[] = ["USD", "EUR", "BDT", "INR", "JPY", "GBP", "CHF", "CAD", "AUD", "CNY", "NZD", "ZAR"]



  orderAmounts: string[] = ['0 - 350', '350 - 750', '750 - 1250', '> 1250']

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


  constructor(private SignupService: SignupService, private router: Router, private toast: ToastMessageService, private cloudinaryService: CloudinaryServiceService) { }

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

    this.firstForm.get('confirmPassword')?.valueChanges.subscribe(value => {
      if (value === this.firstForm.get('password')?.value) {
        this.isPassAndConfirmPassSame = true;
      }
      else {
        this.isPassAndConfirmPassSame = false;
      }
    })

  }

  firstForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
  })

  secondForm = new FormGroup({
    restaurantName: new FormControl('', Validators.required),
    country: new FormControl({ countryCode: '', countryName: '', zoneName: '', gmtOffset: 0, timestamp: 0, }, Validators.required),
    halal: new FormControl('', Validators.required),
    billPerClient: new FormControl('', Validators.required),
    website: new FormControl('', Validators.required),
    restaurantPhone: new FormControl('', Validators.required),
    veganFriendly: new FormControl(false, Validators.required),
    sellsAlcohol: new FormControl(false, Validators.required),
    monthlyOrders: new FormControl('0 - 350', Validators.required),

    restaurantLogo: new FormControl('', Validators.required),

    // NEW ONES ---------
    allAmbianceImages: new FormControl<string[]>([]),
    restaurantCoverPhoto: new FormControl('', Validators.required),

    ambianceImage1: new FormControl('', Validators.required),
    ambianceImage2: new FormControl('', Validators.required),
    ambianceImage3: new FormControl('', Validators.required),
    ambianceImage4: new FormControl('', Validators.required),

    currency: new FormControl('', Validators.required),
    restaurantDetails: new FormControl('', Validators.required),


    restaurantLatitude: new FormControl(0, Validators.required),
    restaurantLongitude: new FormControl(0, Validators.required),

    // --------------------------


    typeOfRestaurant: new FormControl('', Validators.required),
    kidsZone: new FormControl(false, Validators.required),
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

    breakfastStart: new FormControl<Date | null>(null),
    breakfastEnd: new FormControl<Date | null>(null),

    lunchStart: new FormControl<Date | null>(null),
    lunchEnd: new FormControl<Date | null>(null),

    dinnerStart: new FormControl<Date | null>(null),
    dinnerEnd: new FormControl<Date | null>(null),

    dineInTimeStart: new FormControl<Date | null>(null),
    dineInTimeEnd: new FormControl<Date | null>(null),

    orderServingMethod: new FormControl('', Validators.required),
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

  // ambiance4FileList: NzUploadFile[] = [];
  handleAmbiance4($event: NzUploadChangeParam) {
    if ($event.type == 'start') {
      let logoFileList = [...$event.fileList]
      logoFileList = logoFileList.slice(-1)
      const file = logoFileList[0].originFileObj;
      if (file) {
        this.cloudinaryService.cloudUpload(file, 'user123').subscribe(res => {
          this.secondForm.get('ambianceImage4')?.setValue(res.secure_url)
        })
      }
    }
  }

  // ambiance3FileList: NzUploadFile[] = [];
  handleAmbiance3($event: NzUploadChangeParam) {
    if ($event.type == 'start') {
      let logoFileList = [...$event.fileList]
      logoFileList = logoFileList.slice(-1)
      const file = logoFileList[0].originFileObj;
      if (file) {
        this.cloudinaryService.cloudUpload(file, 'user123').subscribe(res => {
          this.secondForm.get('ambianceImage3')?.setValue(res.secure_url)
        })
      }
    }
  }


  // ambiance2FileList: NzUploadFile[] = [];
  handleAmbiance2($event: NzUploadChangeParam) {
    if ($event.type == 'start') {
      let logoFileList = [...$event.fileList]
      logoFileList = logoFileList.slice(-1)
      const file = logoFileList[0].originFileObj;
      if (file) {
        this.cloudinaryService.cloudUpload(file, 'user123').subscribe(res => {
          this.secondForm.get('ambianceImage2')?.setValue(res.secure_url)
        })
      }
    }
  }

  // ambiance1FileList: NzUploadFile[] = [];
  handleAmbiance1($event: NzUploadChangeParam) {
    if ($event.type == 'start') {
      let logoFileList = [...$event.fileList]
      logoFileList = logoFileList.slice(-1)
      const file = logoFileList[0].originFileObj;
      if (file) {
        this.cloudinaryService.cloudUpload(file, 'user123').subscribe(res => {
          this.secondForm.get('ambianceImage1')?.setValue(res.secure_url)
        })
      }
    }
  }

  // Logo ---------------------------
  // logoFileList: NzUploadFile[] = [];
  handleLogoUploadChange($event: NzUploadChangeParam) {
    if ($event.type == 'start') {
      let logoFileList = [...$event.fileList]
      logoFileList = logoFileList.slice(-1)
      const file = logoFileList[0].originFileObj;


      if (file) {
        this.cloudinaryService.cloudUpload(file, 'user123').subscribe(res => {
          this.secondForm.get('restaurantLogo')?.setValue(res.secure_url)
        })
      }
    }

  }

  // Cover Photo ---------------------------
  coverPhotoFileList: NzUploadFile[] = [];

  handleCoverPhotoUploadChange(info: NzUploadChangeParam) {

    if (info.type == 'start') {
      let fileList = [...info.fileList];
      fileList = fileList.slice(-1);

      const file = fileList[0].originFileObj
      if (file) {
        this.cloudinaryService.cloudUpload(file, 'user123').subscribe(res => {
          this.secondForm.get('restaurantCoverPhoto')?.setValue(res.secure_url)
        })
      }
    }

  }




  isNextButtonDisabled(): boolean {
    if (this.currentStep == 0) {
      if (this.isPassAndConfirmPassSame && this.firstForm.valid) {
        return false
      } else {
        return true
      }
      // return !this.firstForm.valid
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
      this.currentStep++;

      if (this.currentStep === 2 && this.operationThirdForm.valid) {
        const formControlNames = ['operationOpeningTime', 'operationClosingTime', 'breakfastStart', 'breakfastEnd',
          'lunchStart', 'lunchEnd', 'dinnerStart', 'dinnerEnd', 'deliveryTimeStart', 'deliveryTimeEnd'];

        formControlNames.forEach(controlName => {
          const control = this.operationThirdForm.get(controlName);
          if (control) {
            const utcDate = this.convertToUTCDate(control.value);
            control.setValue(utcDate);
          }
        });
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

  // Eventhandler for Map component data
  handleLatLongChanged(eventData: { lat: number, long: number }) {
    const { lat, long } = eventData;
    // Setting values in form control
    this.secondForm.get('restaurantLatitude')?.setValue(lat)
    this.secondForm.get('restaurantLongitude')?.setValue(long)

  }


  submitForm(): void {
    const formData = {
      restaurantRep: { ...this.firstForm.value, restaurantName: this.secondForm.value.restaurantName },
      restaurantInfo: {
        ...this.secondForm.value,
        ...this.operationThirdForm.value,
        ...this.bankingInfoFourthForm.value,

      }
    }

    const ambianceImagesArr = []
    ambianceImagesArr.push(formData.restaurantInfo.ambianceImage1)
    ambianceImagesArr.push(formData.restaurantInfo.ambianceImage2)
    ambianceImagesArr.push(formData.restaurantInfo.ambianceImage3)
    ambianceImagesArr.push(formData.restaurantInfo.ambianceImage4)

    formData.restaurantInfo.allAmbianceImages = ambianceImagesArr as string[]




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

    if (formData.restaurantRep.password === formData.restaurantRep.confirmPassword) {
      delete formData.restaurantRep.confirmPassword;
      delete formData.restaurantInfo.ambianceImage1
      delete formData.restaurantInfo.ambianceImage2
      delete formData.restaurantInfo.ambianceImage3
      delete formData.restaurantInfo.ambianceImage4
      this.SignupService.sendRegistrationInfoToBackend(formData).subscribe((res) => {
        if (res) {
          this.toast.setMessage('Sign Up Successful. Please Login', 'success')
          this.router.navigate(['/login'])
        }
      }, (error) => {
        if (error) {
          this.toast.setMessage(error.error.message, 'success')
        }
      })
    }


  }
}
