export interface CountriesInterface {
  status: string
  message: string
  zones: SingleCountryInterface[]
}

export interface SingleCountryInterface {
  countryCode: string
  countryName: string
  zoneName: string
  gmtOffset: number
  timestamp: number
}
