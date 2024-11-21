import { useMyFetch } from '@/composables/useMyFetch'
import { useAdminStore } from '@/stores/adminStore'
import JSZip from 'jszip'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userToken: null,
    userInfo: null,
    reservations: [],
    bookDocuments: [],
    clientInfo: null,
    clientEmail: null,
    clientName: null,
    sessionId: null 
  }),

  actions: {
    async fetchLogin(obj: Object) {
      try {
        obj.grant_type = 'password'
        const { data } = await useMyFetch('/TourSearchOwin/Token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams(obj)
        })

        if (!data.access_token)
          return alert(
            'Данные учетной записи неверны'
          )

        useCookie(
          'CommonApplicationAuthTokenCookie_.masterweblight-auth'
        ).value = data.access_token

        this.userToken = data.access_token
      } catch (error) {
        console.log(error)
        alert('Данные введены неверно. Просьба ввести корректные значения')
      }
    },
    async fetchPasswordRecovery (obj: Object) {
      try {
        return await useMyFetch(
          '/TourSearchOwin/PasswordRecovery/SendMail?' + new URLSearchParams(obj),  {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(obj)
          }
        )
      } catch (error) {
        console.log(error)
      }
    },
    async getUserInfo() {
      try {
        const { data } = await useMyFetch('/TourSearchOwin/AppUser', {
          headers: {
            Authorization: 'Bearer ' + this.userToken
          }
        })

        useCookie('CommonApplicationAuthCookie_.masterweblight-auth').value =
          data

        this.userInfo = data
        this.getClientInfo()
      } catch (error) {
        console.log(error)
      }
    },
    async getClientInfo () {
      try {
        const {data} = await useMyFetch('/TourSearchOwin/Client?clientId=' + this.userInfo.UserKey, {
            method: 'GET',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }
        )
        
        this.clientInfo = data
        if(this.clientInfo?.CL_NAMERUS) {
          this.clientName = this.clientInfo?.CL_FNAMERUS
          this.clientEmail = this.clientInfo?.cl_mail
        }
        
      } catch (error) {
        console.log(error)
      }
    },
    async fetchRegistration(obj: Object) {
      try {
        return await useMyFetch(
          '/TourSearchOwin/PersonalRegistration?' + new URLSearchParams(obj)
        )
      } catch (error) {
        console.log(error)
      }
    },
    async getCaptcha() {
      try {
        return (
          await useMyFetch(
            '/TourSearchOwin/GetCaptcha?' + 'sessionId=' + this.sessionId
          )
        ).data
      } catch (error) {
        console.log(error)
      }
    },
    async checkCaptcha(txt: String) {
      try {
        return await useMyFetch(
          '/TourSearchOwin/CheckCaptcha?' +
          'sessionId=' +
          this.sessionId +
          '&captchaText=' +
          txt
        )
      } catch (error) {
        console.log(error)
      }
    },
    async getBookedTours() {
      try {
        return await useMyFetch(
          `https://online.mosgortur.ru:7000/TourSearchOwin/GetReservations`,
          {
            headers: {
              Authorization: 'Bearer ' + this.userToken
            }
          }
        )
      } catch (error) {
        console.log(error)
      }
    },

    async downloadFiles(choosedDocuments) {
      try {
        // Генерируем ZIP файл и предлагаем его для скачивания

        choosedDocuments = this.bookDocuments.filter((el) => {
          return choosedDocuments.includes(el.documentId)
        })
        
        for (let index = 0; index < choosedDocuments.length; index++) {
          const byteCharacters = atob(choosedDocuments[index].FileContents);

          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }

          const byteArray = new Uint8Array(byteNumbers);

          // Создаем Blob из содержимого файла
          const blob = new Blob([byteArray], { type: choosedDocuments[index].ContentType })
          const link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = choosedDocuments[index].FileDownloadName
    
          // Автоматически кликаем на ссылку для начала скачивания
          document.body.appendChild(link)
          link.click()

        }

      } catch (error) {
        console.error('Error downloading ZIP file:', error)
      }
    },

    async downloadDocx(id) {
      try {

        console.log(id);

        const zip = new JSZip()
        const { data: docInf } = await useMyFetch(
          `https://online.mosgortur.ru:7000/TourSearchOwin/ReservationDocuments/getDocuments?dgCode=${id}`
        )

        console.log(docInf);

        const dataFiles = [];
        for (let i = 0; i < docInf.length; i++) {
          const { data: docx } = await useMyFetch(
            `https://online.mosgortur.ru:7000/TourSearchOwin/ReservationDocuments/getDocument?documentId=${docInf[i].documentId}&fileName=${docInf[i].name}`
          )
          console.log({ ...docInf[i], ...docx });
          dataFiles.push({ ...docInf[i], ...docx })
        }

        this.bookDocuments = dataFiles;


        // dataFiles.forEach(file => {
        //   zip.file(file.FileDownloadName, file.FileContents, { base64: true })
        // })

        // this.downloadFile(zip)
      } catch (error) {
        console.log(error)
      }
    },
    async checkMail(mail: String) {
      try {
        return await useMyFetch('/TourSearchOwin/CheckMail?' + 'mail=' + mail)
      } catch (error) {
        console.log(error)
      }
    },
    logout() {
      const adminStore = useAdminStore()

      this.userToken = null
      this.userInfo = null
      useCookie('CommonApplicationAuthCookie_.masterweblight-auth').value = null
      useCookie('CommonApplicationAuthTokenCookie_.masterweblight-auth').value =
        null

      if (adminStore.adminToken) {
        adminStore.adminToken = null
        useCookie('admin-token').value = null
      }

      navigateTo('/')
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
