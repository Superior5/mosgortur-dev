import { useMyFetch } from '@/composables/useMyFetch'
import { useInterfaceStore } from '@/stores/interfaceStore'

export const useAdminStore = defineStore('adminStore', {
   state: () => ({
      adminMenu: [
         {
            title: 'Главная', link: 'main', pages: [
               { title: 'Горящие туры', link: 'hot-tours' },
               { title: 'Популярные направления', link: 'popular-destinations' },
               { title: 'Тип тура', link: 'tour-type' },
               { title: 'С нами сотрудничают', link: 'partners' },
            ]
         },
         {
            title: 'Туристам', link: 'tourists', pages: [
               { title: 'Памятки', link: 'memo' },
               { title: 'Перед поездкой в лагерь', link: 'before-trip' },
               { title: 'Курортный сбор', link: 'resort-fee' },
            ]
         },
         {
            title: 'Партнерам', link: 'partners', pages: [
               { title: 'Поставщикам услуг', link: 'for-service-providers' },
               { title: 'Обьектам размещения', link: 'for-accommodation-facilities' },
               { title: 'Детским лагерям', link: 'for-kids-camps' },
            ]
         },
         {
            title: 'Информация', link: 'information', pages: [
               { title: 'Бронирование и оплата', link: 'booking-and-payment' },
               { title: 'Документы', link: 'documents' },
               { title: 'О Нас', link: 'about-us' },
            ]
         },
      ],
      adminUrl: 'https://online.mosgortur.ru/api/v1',
      adminToken: null,
      bannerTabs: null,
      methods: [
         { method: 'hot-tour', var: 'hotTours' },
         { method: 'popular-direction', var: 'popularDestination' },
         { method: 'best-offer', var: 'typeTours' },
         { method: 'tour-type', var: 'tourTypes' },
         { method: 'partner', var: 'partners' },
         { method: 'tab', var: 'tabs' },
      ]
   }),

   actions: {
      async fetchAdminLogin(obj: Object) {
         try {
            const { data } = await useMyFetch(this.adminUrl + '/auth/login', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(obj),
            })

            if (!data.token) return

            useCookie('admin-token').value = data.token
            this.adminToken = data.token
         } catch (error) {
            alert(error)
         }
      },
      async addTourLink({ formData, data, mId }, id) {
         try {
            const url = this.adminUrl + (id ? '/update-' + this.methods[mId].method + '/' + id : '/add-' + this.methods[mId].method)
            await useMyFetch(url, {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Basic ' + this.adminToken
               },
               body: JSON.stringify({ ...data }),
            })

         } catch (error) {
            alert(error)
         }
      },
      async addTourType({ formData, data }) {
         try {
            let icon = ''

            if (formData.get('icon') != 'undefined') {
               const { data } = await useMyFetch(this.adminUrl + '/upload-' + this.methods[3].method + '-image', {
                  method: 'POST',
                  headers: {
                     'Authorization': 'Basic ' + this.adminToken
                  },
                  body: formData,
               })
               icon = data.icon
            }

            if (icon) {
               const url = this.adminUrl + '/add-' + this.methods[3].method;

               await useMyFetch(url, {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/json',
                     'Authorization': 'Basic ' + this.adminToken
                  },
                  body: JSON.stringify({ ...data, icon: icon }),
               })
            }
         } catch (error) {
            alert(error)
         }
      },
      async deleteTour(tour, mId) {
         try {
            const body = JSON.stringify(mId === 3 ? { type: tour } : { id: tour })

            await useMyFetch(this.adminUrl + '/delete-' + this.methods[mId].method, {
               method: 'POST',
               headers: {
                  'Authorization': 'Basic ' + this.adminToken,
                  'Content-Type': 'application/json'
               },
               ...tour && { body }
            })

         } catch (error) {
            alert(error)
         }
      },
      async getAllBannerTabs() {
         try {
            const adminStore = useAdminStore()

            const url = adminStore.adminUrl + ('/getAll-banner-tab')
            let {data} = await useMyFetch(url, {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Basic ' + adminStore.adminToken
               },
            })
            
         
            
            this.bannerTabs = data.programs
         } catch (error) {
            alert(error)
         }
      },
      async addTour({ formData, data, mId }, id) {
         try {
            const interfaceStore = useInterfaceStore()
            let imagePath = ''

            if (formData && formData.get('image') != 'undefined') {
               const { data } = await useMyFetch(this.adminUrl + '/upload-' + this.methods[mId].method + '-image', {
                  method: 'POST',
                  headers: {
                     'Authorization': 'Basic ' + this.adminToken
                  },
                  body: formData,
               })
               imagePath = data.imagePath
            } else if (formData && id) imagePath = interfaceStore[this.methods[mId].var].find(el => el.id == id).image

            const url = this.adminUrl + (id ? '/update-' + this.methods[mId].method + '/' + id : '/add-' + this.methods[mId].method)
            await useMyFetch(url, {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Basic ' + this.adminToken
               },
               body: JSON.stringify({
                  ...data,
                  ...imagePath && { image: imagePath }
               }),
            })
         } catch (error) {
            alert(error)
         }
      },
   }
});

if (import.meta.hot) {
   import.meta.hot.accept(acceptHMRUpdate(useAdminStore, import.meta.hot));
}