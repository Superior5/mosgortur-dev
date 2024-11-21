import { useMyFetch } from '@/composables/useMyFetch'
import { createParams } from '@/composables/createParams'
import { getTourHotel } from '@/composables/getTourHotel'
import { getHotelTypesImg } from '@/composables/getHotelTypesImg'

const searchStaticParams = new URLSearchParams({
  ShowToursWithoutHotels: '-1',
  isFromBasket: 'false',
  isFillSecondaryFilters: 'false',
  DestinationType: '1',
  CurrencyName: 'рб',
  AviaQuota: '5',
  HotelQuota: '5',
  BusTransferQuota: '5',
  RailwayTransferQuota: '5',
  TimeDepartureFrom: '00:00',
  TimeDepartureTo: '23:59',
  TimeArrivalFrom: '00:00',
  TimeArrivalTo: '23:59',
  SearchId: '1',
  wrongLicenseFileUpperTitle: 'Incorrect license file.'
})
const mapStaticParams = new URLSearchParams({
  SearchMaxPriceAlgoritm: 'false',
  MatrixAlgoritm: 'false',
  Groups: '32'
})
const minMaxPricesStaticParams = new URLSearchParams({
  HotelScheme: '',
  TourKey: '',
  TourDuration: ''
})
const priceLostStaticParams = new URLSearchParams({
  SearchMaxPriceAlgoritm: 'false',
  MatrixAlgoritm: 'true'
})

export const useToursStore = defineStore('toursStore', {
  state: () => ({
    filters: {
      Hotel: [],
      HotelResort: [],
      HotelCity: [],
      Pansions: [],
      HotelType: [],
      HotelStars: [],
      Durations: []
    },
    selectedFilters: {
      Hotel: [],
      HotelResort: [],
      HotelCity: [],
      Pansions: [],
      HotelType: [],
      HotelStars: [],
      Durations: []
    },
    filtersUrl: '',
    errorTech: false,
    ageCategory: {},
    quantityTourist: [],
    kidsAge: 'Любой',
    selectedDepartureCities: [],
    departureCities: [],
    selectedDestination: [],
    destination: [],
    selectedActualizeCities: [],
    actualizeCities: [],
    selectedTourDates: [],
    tourDates: [],
    duration: [],
    selectedDuration: [],
    actualizeTourType: [],
    selectedActualizeTourType: [],
    quantityTourists: [
      { tourist: 'Взрослые', quantity: 1 },
      { tourist: 'Дети', quantity: 0, edges: [] }
    ],
    pageSize: '20',
    pageNumber: 1,
    searchFullResult: null,
    mapFullResult: null,
    tours: [],
    noTours: false,
    mapTours: [],
    minMaxPrices: [],
    selectedRangePrice: [],
    rangeValue: [],
    toursCompare: [],
    inputParams: '',
    selectedSeason: [],
    selectedMonths: [],
    noToursModal: false,
    priceList: [],
    datesListPrice: ''
  }),

  actions: {
    async getDepartureCities () {
      try {
        const { data } = await useMyFetch('/TourSearchOwin/departureCities')
        this.departureCities = data
      } catch (error) {
        this.errorTech = true
        console.log(error)
      }
    },
    async getDestination () {
      try {
        const { data } = await useMyFetch(
          '/TourSearchOwin/Destination?' +
            createParams([
              this.selectedDepartureCities,
              'departureCities'
            ]).slice(0, -1)
        )
        this.destination = data
      } catch (error) {
        this.errorTech = true
        console.log(error)
      }
    },
    async getActualizeCities () {
      try {
        const { data } = await useMyFetch(
          '/TourSearchOwin/ActualizeCities?' +
            createParams([this.selectedDepartureCities, 'cityKeys']) +
            createParams([this.selectedDestination, 'Key']).slice(0, -1)
        )
        this.actualizeCities = data
      } catch (error) {
        this.errorTech = true
        console.log(error)
      }
    },
    async getActualizeTourType () {
      try {
        const { data } = await useMyFetch(
          '/TourSearchOwin/ActualizeTourType?' +
            createParams([this.selectedDepartureCities, 'departureCityKeys']) +
            createParams([this.selectedDestination, 'Key']) +
            createParams([this.selectedActualizeCities, 'destinationCity']) +
            new URLSearchParams({
              Type: '1',
              terms: ''
            })
        )

        data.forEach(el => {
          if (el.Name === 'Семейный тур') el.Name = 'Проживание'
          if (el.Name === 'Специальное предложение')
            el.Name = 'Проживание с дорогой'
        })

        this.actualizeTourType = data
      } catch (error) {
        this.errorTech = true
        console.log(error)
      }
    },
    async getTourDate () {
      try {
        const route = useRoute()
        const newActualizeTourType = [...this.selectedActualizeTourType]

        if (
          (route.name == 'kids' || route.name == 'kids-test') &&
          newActualizeTourType.some(el => el.Key == 376 || el.Key == 393)
        ) {
          const indDayStay = newActualizeTourType.findIndex(el => el.Key == -1)
          if (indDayStay > -1) newActualizeTourType.splice(indDayStay, 1)
        }

        const { data } = await useMyFetch(
          '/TourSearchOwin/TourDate?' +
            createParams([this.selectedDepartureCities, 'departureCity']) +
            createParams([this.selectedDestination, 'Key']) +
            createParams([this.selectedActualizeCities, 'destinationCity']) +
            createParams([newActualizeTourType, 'tourTypes']) +
            new URLSearchParams({ Type: '1' })
        )
        this.tourDates = data
      } catch (error) {
        this.errorTech = true
        console.log(error)
      }
    },
    async getDuration (dates: Array<string>) {
      try {
        const route = useRoute()
        const newActualizeTourType = [...this.selectedActualizeTourType]

        if (
          (route.name == 'kids' || route.name == 'kids-test') &&
          newActualizeTourType.some(el => el.Key == 376 || el.Key == 393)
        ) {
          const indDayStay = newActualizeTourType.findIndex(el => el.Key == -1)
          if (indDayStay > -1) newActualizeTourType.splice(indDayStay, 1)
        }

        const { data } = await useMyFetch(
          '/TourSearchOwin/Duration?' +
            createParams([this.selectedDepartureCities, 'departureCity']) +
            createParams([this.selectedDestination, 'Key']) +
            createParams([this.selectedActualizeCities, 'destinationCity']) +
            createParams([newActualizeTourType, 'tourTypes']) +
            createParams([dates, 'tourDate', el => el]) +
            new URLSearchParams({
              Type: '1'
            })
        )

        const getNightsString = (numberN: number) => {
          const number = numberN - 1
          const lastTwoDigits = number % 100
          const lastDigit = number % 10

          if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return `${number} ночей`
          }

          if (lastDigit === 1) {
            return `${number} ночь`
          }

          if (lastDigit >= 2 && lastDigit <= 4) {
            return `${number} ночи`
          }

          return `${number} ночей`
        }

        this.duration = data
        this.filters.Durations = data.map(el => ({
          title: getNightsString(el),
          key: el
        }))
      } catch (error) {
        console.log(error)
      }
    },
    async getSearchTour ({ search = false } = {}) {
      try {
        let inputParams = this.inputParams
        const router = useRouter()
        const route = useRoute()
        let ymObj = null
        let params = ''

        console.log(this.selectedTourDates)

        if (search) {
          inputParams =
            createParams([this.selectedDepartureCities, 'DepartureCityKeys']) +
            createParams([this.selectedDestination, 'DestinationKey']) +
            new URLSearchParams({
              AdultCount: this.quantityTourists[0].quantity,
              ChildCount: this.quantityTourists[1].quantity
            }) +
            '&' +
            searchStaticParams +
            '&'

          if (route.name == 'kids' || route.name == 'kids-test') {
            await this.getDuration(this.selectedTourDates)
            const newActualizeTourType = [...this.selectedActualizeTourType]

            if (
              newActualizeTourType.some(el => el.Key == 388 || el.Key == 393)
            ) {
              const indDayStay = newActualizeTourType.findIndex(
                el => el.Key == -1
              )
              if (indDayStay > -1) newActualizeTourType.splice(indDayStay, 1)
            }

            this.selectedFilters.Durations = []

            inputParams +=
              'RemoteHotelMode=0&' +
              createParams([newActualizeTourType, 'TourType']) +
              createParams([this.selectedMonths, 'Season', el => el]) +
              createParams([this.selectedTourDates, 'Dates', el => el])

            let ages = route.query?.ChildAgesForCamp

            inputParams.replace(/ChildAgesForCamp=[0-9]+&/, '')

            if (ages && !this.kidsAge) {
              this.ageCategory.key = ages.slice(0, 2)
              inputParams += createParams([
                this.ageCategory.key,
                'ChildAgesForCamp',
                el => el
              ])
              this.kidsAge = this.ageCategory.key[0]
            } else if (this.ageCategory.key) {
              

              inputParams += createParams([
                this.ageCategory.key,
                'ChildAgesForCamp',
                el => el
              ])
              this.kidsAge = this.ageCategory.key[0]
            } else {
             
              inputParams +=
                this.kidsAge === 'Любой'
                  ? ''
                  : createParams([[this.kidsAge], 'ChildAgesForCamp', el => el])
            }

            if (this.selectedChildYear)
              inputParams += `ChildYear=${this.selectedChildYear}&`
          } else if (route.name == 'tours-low-cost') {
            inputParams +=
              'RemoteHotelMode=1&' +
              createParams([this.selectedActualizeTourType, 'TourType']) +
              createParams([
                this.quantityTourists[1].edges,
                'ChildAges',
                el => el
              ]) +
              createParams([
                this.duration.filter(
                  el =>
                    +el >= +this.selectedDuration[0] &&
                    +el <= +this.selectedDuration[1]
                ),
                'Durations',
                el => el
              ]) +
              createParams([
                this.selectedTourDates.map(el =>
                  el.toLocaleDateString('ru-RU')
                ),
                'Dates',
                el => el
              ])
          } else {
            inputParams +=
              createParams([this.selectedActualizeTourType, 'TourType']) +
              createParams([
                this.quantityTourists[1].edges,
                'ChildAges',
                el => el
              ]) +
              new URLSearchParams({
                Durations:
                  Math.floor(
                    (this.selectedTourDates[1] - this.selectedTourDates[0]) /
                      (1000 * 60 * 60 * 24)
                  ) +
                  1 +
                  '',
                Dates: this.selectedTourDates[0].toLocaleDateString('ru-RU')
              }) +
              '&'

            for (let i = 1; i <= 10; i++) {
              this.datesListPrice +=
                'Dates=' +
                new Date(
                  new Date(this.selectedTourDates[0]).setDate(
                    this.selectedTourDates[0].getDate() + i
                  )
                ).toLocaleDateString('ru-RU') +
                '&'

              const minDate = new Date(
                new Date(this.selectedTourDates[0]).setDate(
                  this.selectedTourDates[0].getDate() - i
                )
              )
              if (minDate.getTime() >= new Date().getTime())
                this.datesListPrice +=
                  'Dates=' + minDate.toLocaleDateString('ru-RU') + '&'
            }
          }

          ymObj = {
            ...(this.selectedDepartureCities.length && {
              'Города отправления': this.selectedDepartureCities.map(
                el => el.Name
              )
            }),
            ...(this.selectedDestination.length && {
              'Страна назначения': this.selectedDestination.map(el => el.Name)
            }),
            ...(this.selectedActualizeCities.length && {
              'Город назначения': this.selectedActualizeCities.map(
                el => el.Name
              )
            }),
            ...(this.selectedActualizeTourType.length && {
              'Тур/Лагерь': this.selectedActualizeTourType.map(el => el.Name)
            }),
            ...(this.selectedTourDates.length && {
              'Выбранные даты': this.selectedTourDates
            }),
            ...(this.quantityTourists[0].quantity && {
              'Количество туристов': this.quantityTourists
            })
          }

          this.inputParams = inputParams
        } else {
          const filters = this.searchFullResult.SecondaryFiltersResult
          ymObj = {
            ...(this.selectedFilters.Hotel.length && {
              Отель: filters.Hotels.filter(el =>
                this.selectedFilters.Hotel.includes(el.Key)
              ).map(el => el.Name)
            }),
            ...(this.selectedFilters.HotelResort.length && {
              Курорт: filters.HotelResorts.filter(el =>
                this.selectedFilters.HotelResort.includes(el.Key)
              ).map(el => el.Name)
            }),
            ...(this.selectedFilters.HotelCity.length && {
              Город: filters.HotelCities.filter(el =>
                this.selectedFilters.HotelCity.includes(el.key)
              ).map(el => el.name)
            }),
            ...(this.selectedFilters.Pansions.length && {
              Питание: filters.Pansions.filter(el =>
                this.selectedFilters.Pansions.includes(el.Key)
              ).map(el => el.Name)
            }),
            ...(this.selectedFilters.HotelType.length && {
              'Услуги отеля': filters.HotelTypes.filter(el =>
                this.selectedFilters.HotelType.includes(el.key)
              ).map(el => el.name)
            }),
            ...(this.selectedFilters.HotelStars.length && {
              Звездность: filters.HotelCategories.filter(el =>
                this.selectedFilters.HotelStars.includes(el.Key)
              ).map(el => el.Name)
            })
          }
        }

        if (ymObj && ym) ym(90662828, 'params', ymObj)

        const dynamicParams = new URLSearchParams({
          PageNumber: this.pageNumber,
          PageSize: this.pageSize,
          HotelScheme: '',
          TourKey: '',
          TourDuration: ''
        })

        if (
          !this.selectedFilters.Durations.length &&
          !new URLSearchParams(this.filtersUrl).get('Durations') &&
          (route.name == 'kids' || route.name == 'kids-test')
        )
          params += createParams([this.duration, 'Durations', el => el])

        
        params += (this.selectedActualizeCities[0]?.Key != -1 && route.name == 'tours-low-cost'
            ? createParams([this.selectedActualizeCities, 'CityIds'])
            : '')

      
        params +=
          (this.selectedFilters.HotelCity.length < 0 &&
          this.selectedActualizeCities[0] != -1
            ? createParams([this.selectedActualizeCities, 'CityIds'])
            : '') +
          this.filtersUrl +
          inputParams +
          dynamicParams
          
        const { data } = await useMyFetch(
          '/TourSearchOwin/TourForWeb/search/simple?' + params
        )
        if (!data.Result.length && search) {
          this.noTours = true
          this.tours = []
          return (this.noToursModal = true)
        }
        this.noTours = false
        this.searchFullResult = data
        router.push(`${route.path}?${params}`)

        if (search && data) {
          const filtersData = data.SecondaryFiltersResult

          this.filters.Hotel = filtersData.Hotels.map(el => ({
            title: el.Name,
            key: el.Key
          }))
          this.filters.HotelCity = filtersData.HotelCities.map(el => ({
            title: el.name,
            key: el.key
          }))
          this.filters.HotelResort = filtersData.HotelResorts.map(el => ({
            title: el.Name,
            key: el.Key
          }))
          this.filters.Pansions = filtersData.Pansions.map(el => ({
            title: `${el.Code} - ${el.Name}`,
            key: el.Key
          }))
          this.filters.HotelStars = filtersData.HotelCategories.map(el => {
            if (el.GlobalCode === 'Детский лагерь') {
              return { title: el.Name, key: el.Key }
            }

            let svg = ''
            for (let i = 0; i < +el.Name[0]; i++)
              svg +=
                '<svg data-v-66510de4="" class="w-20px h-20px ml-5px" fill="#ffc121" viewBox="0 0 16 15"><path data-v-66510de4="" d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"></path></svg>'
            return { title: +el.Name[0] ? '' : el.Name[0], svg, key: el.Key }
          })
          this.filters.HotelType = filtersData.HotelTypes.reduce(
            (arr, el) => {
              if (!arr[0].includes(el.key)) {
                arr[0].push(el.key)
                arr[1].push({
                  title: el.name,
                  key: el.key,
                  svg: `<img class="w-18px h-18px mr-5px" onerror='this.src = "/hotel-type-icons/no-icon.svg"' src="/hotel-type-icons/${el.key}.svg">`
                })
              }
              return arr
            },
            [[], []]
          )[1].sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return -1;
            }
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return 1;
            }
            return 0;
          })
        }

        if (this.pageNumber == 1) {
          const {
            data: { SearchForMap }
          } = await useMyFetch(
            '/TourSearchOwin/TourForWeb/search/map?' +
              params +
              '&' +
              mapStaticParams
          )
          this.mapFullResult = SearchForMap
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getMinMaxPrices () {
      try {
        const route = useRoute()
        let minMaxPricesParams =
          minMaxPricesStaticParams +
          '&' +
          this.inputParams +
          new URLSearchParams({
            PageNumber: this.pageNumber,
            PageSize: this.pageSize
          }) +
          '&'

        if (
          !this.selectedFilters.Durations.length &&
          (route.name == 'kids' || route.name == 'kids-test')
        ) {
          minMaxPricesParams +=
            createParams([this.duration, 'Durations', el => el]) +
            'RemoteHotelMode=0'
        } else {
          minMaxPricesParams += 'RemoteHotelMode=1'
        }

        const {
          data: { MinimalPrice, MaximalPrice }
        } = await useMyFetch(
          '/TourSearchOwin/TourForWeb/search/minMaxPrices?' + minMaxPricesParams
        )
        this.minMaxPrices = [MinimalPrice, MaximalPrice]
        if (!this.rangeValue[0]) this.rangeValue = [MinimalPrice, MaximalPrice]
      } catch (error) {
        console.log(error)
      }
    },
    async getHotelImages ({ tour } = {}) {
      try {
        const serviceKey = el => getTourHotel(el).Hotel.Key
        const params = tour
          ? 'HotelKey=' + serviceKey(tour)
          : createParams([
              this.searchFullResult.Result,
              'HotelKeys',
              serviceKey
            ]).slice(0, -1)
        const { data } = await useMyFetch(
          '/TourSearchOwin/HotelImages?' + params
        )

        if (tour) {
          tour.imagesSlide = data
        } else {
          // this.tours = []
          const { data: dataTour } = await useMyFetch(
            '/TourSearchOwin/TourImages?' +
              createParams([this.searchFullResult.Result, 'tourKeys']).slice(
                0,
                -1
              )
          )

          this.searchFullResult.Result.forEach(el => {
            el.firstImg = data.find(el2 => el2.HotelKey == serviceKey(el))
            el.firstTourImg = dataTour.Images.filter(
              el2 => el2.TourKey === el.Key
            )

            this.tours.push(el)
          })

          if (this.pageNumber == 1) {
            const { data: mapData } = await useMyFetch(
              '/TourSearchOwin/HotelImages?' +
                createParams([
                  this.mapFullResult,
                  'HotelKeys',
                  serviceKey
                ]).slice(0, -1)
            )
            const { data: mapDataTour } = await useMyFetch(
              '/TourSearchOwin/TourImages?' +
                createParams([this.mapFullResult, 'tourKeys']).slice(0, -1)
            )

            // this.mapTours = []
            this.mapFullResult.forEach(el => {
              el.firstImg = mapData.find(el2 => el2.HotelKey == serviceKey(el))
              el.firstTourImg = mapDataTour.Images.filter(
                el2 => el2.TourKey === el.Key
              )

              this.mapTours.push(el)
            })
          }

          if (window) {
            window.dataLayer.push({
              ecommerce: {
                currencyCode: 'RUB',
                impressions: this.tours.map((el, i) => ({
                  id: el.Key,
                  name: el.Name,
                  price: el.Cost,
                  brand: el.Services.find(el => el.Hotel).Hotel.Value,
                  category: el.Types.includes(11)
                    ? 'лагеря'
                    : 'спец предложения',
                  position: i + 1
                }))
              }
            })
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getPriceList () {
      try {
        const priceListParams =
          priceLostStaticParams +
          '&' +
          this.datesListPrice +
          this.inputParams +
          new URLSearchParams({
            PageNumber: this.pageNumber,
            PageSize: this.pageSize
          })

        const {
          data: { CellsForMatrix }
        } = await useMyFetch(
          '/TourSearchOwin/TourForWeb/search/matrix?' + priceListParams
        )

        CellsForMatrix.sort(
          (a, b) => new Date(a.StartDate) - new Date(b.StartDate)
        )
        const prices = CellsForMatrix.map(el => el.Cost)

        const maxMinH = [30, 5]
        const minPrice = Math.min(...prices)
        const maxPrice = Math.max(...prices)
        const diffPrice = maxPrice - minPrice

        CellsForMatrix.forEach(el => {
          el.height = Math.round(
            (diffPrice
              ? ((el.Cost - minPrice) * (maxMinH[0] - maxMinH[1])) / diffPrice
              : 0) + maxMinH[1]
          )
        })

        this.priceList = CellsForMatrix
      } catch (error) {
        console.log(error)
      }
    },
    async getApplicationStatus ({ claimNumber, idSerial, idNumber }) {
      try {
        const params = new URLSearchParams({
          ...(claimNumber && { claimNumber }),
          ...(idSerial && { idSerial }),
          ...(idNumber && { idNumber })
        })

        const { data } = await useMyFetch(
          'https://api-claims-agent.sletat.ru/api-mgt-claims/claim-status?agencyId=5F057517-73C6-41A6-95C1-30D45C9A7446&' +
            params,
          {
            headers: {
              'Mgt-Api-Key': 'B4=VG6)=ickW_N7T~4bUjJzcu{ItNV'
            }
          }
        )
        return data
      } catch (error) {
        this.errorTech = true
        console.log(error)
      }
    },
    clearFilters (isFilter) {
      const route = useRoute()

      this.filtersUrl = ''
      this.ageCategory = {}

      if (isFilter) {
        const dck = route.query?.ChildAgesForCamp
        if (dck) {
          this.kidsAge = dck
        } else {
          this.kidsAge = 'Любой'
        }
      }
      for (const key in this.selectedFilters) this.selectedFilters[key] = []

      this.rangeValue = this.minMaxPrices
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useToursStore, import.meta.hot))
}
