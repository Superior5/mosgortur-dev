import { useMyFetch } from '@/composables/useMyFetch'
import { useAdminStore } from '@/stores/adminStore'

const serviceKey = el => getTourHotel(el).Hotel.Key
const searchTour = url => {
   const urlForGetTour = new URLSearchParams(url.split('Basket?')[1])

   const params = {
      DepartureCityKeys: urlForGetTour.get('departureCities'),
      DestinationType: urlForGetTour.get('destination').split('_')[0],
      DestinationKey: urlForGetTour.get('destination').split('_')[1],
      Dates: urlForGetTour.get('date'),
      Durations: urlForGetTour.get('duration'),
      AdultCount: urlForGetTour.get('adultCount'),
      CurrencyName: 'рб',
      HotelQuota: 5,
      AviaQuota: 5,
      BusTransferQuota: 5,
      RailwayTransferQuota: 5,
      HotelScheme: JSON.stringify([{ "TemplateId": urlForGetTour.get('hotelScheme').split('_')[0], "DurationInNight": urlForGetTour.get('hotelScheme').split('_')[1], "Code": urlForGetTour.get('hotelScheme').split('_')[2], "PacketKey": urlForGetTour.get('hotelScheme').split('_')[3], "PartnerKey": urlForGetTour.get('hotelScheme').split('_')[4], "GDSProviderId": urlForGetTour.get('hotelScheme').split('_')[5], "TotalTourDuration": urlForGetTour.get('hotelScheme').split('_')[6] }]),
      TourKey: urlForGetTour.get('tour'),
      TourDuration: urlForGetTour.get('duration'),
      PageNumber: 1,
      PageSize: 20,
      IsFromBasket: true,
      isFillSecondaryFilters: false,
      RemoteHotelMode: 1,
      showModuleInstruction: false,
      showModuleInstructionKids: false,
   }

   return useMyFetch('/TourSearchOwin/TourForWeb/search/simple?' + new URLSearchParams(params))
}

export const useInterfaceStore = defineStore('interfaceStore', {
   state: () => ({
      switchShowFilters: true,
      loadData: false,
      hotTours: [],
      typeTours: [],
      tourTypes: [],
      showAuthIcon: 5,
      popularDestination: [],
      partners: [],
      tabs: [],
      showPriceList: false
   }),

   actions: {
      async getTourTypes(mId) {
         try {
            const adminStore = useAdminStore()

            const { data } = await useMyFetch(adminStore.adminUrl + '/get-' + adminStore.methods[mId].method, { method: 'POST' })
            this[adminStore.methods[mId].var] = data.result
         } catch (error) {
            alert(error)
         }
      },
      async getLinksAndTours(mId) {
         try {
            const adminStore = useAdminStore()
            const { data } = await useMyFetch(adminStore.adminUrl + '/get-' + adminStore.methods[mId].method, { method: 'POST' })

            this[adminStore.methods[mId].var] = []

            if (mId == 2) {
               const promiseArr = data.preparedResult.map(el => Promise.all(el.links.map(el2 => searchTour(el2))))

               let allData = await Promise.all(promiseArr)
               allData = allData.map(el => el.filter(el2 => el2.data.Result[0]).map(el3 => el3.data.Result[0]))

               const oneArr = allData.flat()

               const imgParams = createParams([oneArr, 'HotelKeys', serviceKey]).slice(0, -1)
               const { data: images } = await useMyFetch('/TourSearchOwin/HotelImages?' + imgParams)

               oneArr.forEach(el => {
                  el.firstImg = images.find(el2 => el2.HotelKey == serviceKey(el))
               });

               allData.forEach((el, i) => this[adminStore.methods[mId].var].push({ ...data.preparedResult[i], tours: el }));
            }

            if (mId === 0) {
               let allData = [];
               for (let i = 0; i < data.result.length; i++) {
                  const tour = await searchTour(data.result[i].link);
                  if (tour.data.Result.length) {
                     allData.push({
                        id: data.result[i].id,
                        tour: tour.data.Result[0],
                     })
                  }
               }

               const imgParams = createParams([allData.map(el => el.tour), 'HotelKeys', serviceKey]).slice(0, -1)
               const { data: images } = await useMyFetch('/TourSearchOwin/HotelImages?' + imgParams)

               this[adminStore.methods[mId].var] = allData.map(el => {
                  el.tour.firstImg = images.find(el2 => el2.HotelKey == serviceKey(el.tour))
                  return el
               });
            }

            if (mId === 1) {
               let allData = [];
               for (let i = 0; i < data.result.length; i++) {
                  const tour = await searchTour(data.result[i].link);
                  if (tour.data.Result.length) {
                     allData.push({
                        id: data.result[i].id,
                        title: data.result[i].title,
                        link: data.result[i].link,
                        image: data.result[i].image,
                        tour: tour.data.Result[0],
                     })
                  }
               }

               const imgParams = createParams([allData.map(el => el.tour), 'HotelKeys', serviceKey]).slice(0, -1)
               const { data: images } = await useMyFetch('/TourSearchOwin/HotelImages?' + imgParams)

               this[adminStore.methods[mId].var] = allData.map(el => {
                  el.tour.firstImg = images.find(el2 => el2.HotelKey == serviceKey(el.tour))
                  return el
               });

            }
         } catch (error) {
            console.log(error)
         }
      },
      async getImagesOnTours(tour) {
         const { data } = await useMyFetch('/TourSearchOwin/HotelImages?' + 'HotelKey=' + serviceKey(tour))
         tour.imagesSlide = data
      },
      async getTours(mId) {
         const adminStore = useAdminStore()
         const { data } = await useMyFetch(adminStore.adminUrl + '/get-' + adminStore.methods[mId].method, { method: 'POST' })

         if (mId === 2) {
            data.result.forEach(el => {
               if (el.icon.includes('fill=')) {
                  el.icon = el.icon.replace(/fill="(.*?)"/gm, 'fill="currentColor"');
               }
            });
         }
         this[adminStore.methods[mId].var] = data.result
      },
      async getTabs(mId) {
         try {
            const adminStore = useAdminStore()
            const { data } = await useMyFetch(adminStore.adminUrl + '/get-' + adminStore.methods[mId].method, { method: 'POST' })
            this[adminStore.methods[mId].var] = data.result
         } catch (error) {
            alert(error)
         }
      }
   }
});

if (import.meta.hot) {
   import.meta.hot.accept(acceptHMRUpdate(useInterfaceStore, import.meta.hot));
}