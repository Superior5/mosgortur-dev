<template>
    <!-- <div class="container mt-60px">
        <h3 class="font-900 font-mulish text-24px mb-24px">Ответы на вопросы</h3>

        <div class=" lg:(grid grid-cols-4) flex gap-x-20px overflow-auto scroll-style">
            <div v-for="card in cards" :key="card.title" class="relative min-w-218px">
                <div class="h-108px bg-rarely-4 rounded-[10px] flex flex-col justify-center items-center">
                    <img :src="card.icon" alt="картинка">
                </div>
                <p class="font-bold mt-12px">{{ card.title }}</p>
            </div>
        </div>
    </div> -->
    <div class="container md:mt-100px mt-60px">
        <h3 class="font-900 font-mulish md:text-30px text-24px mb-24px">Ответы на вопросы</h3>

        <div class=" lg:(grid grid-cols-5) flex gap-20px overflow-auto">
            <div v-for="(qa, i) in questionsAnswers.slice(0, 5)" :key="qa.title"  class="min-w-218px">
                <a target="_blank" :href="'question-answer/#question-'+i">
                    <div class="h-140px transition duration-200 bg-rarely-4 hover:(bg-[#e4dbdb80]) rounded-[10px] flex gap-10px justify-center items-center">
                        <img :src="qa.icon" alt="" />
                    <p class="font-bold md:text-lg">{{ qa.title }}</p>
                  </div>
                </a>
            </div>
        </div>
    </div>
    <BlocksLinkButton :link="'/question-answer'" :classes="'button-no-gradient'"
        class="children:(text-black) !hover:(text-black) shadow-none">
        <p class="font-bold">Читать все</p>
    </BlocksLinkButton>
</template>

<script setup>

const cards = [
    {
        title: 'Бронирование туров',
        link: 'https://online.mosgortur.ru/kids?CityIds=-1&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=%D0%92%D0%B5%D1%81%D0%BD%D0%B0%20%2725&Durations=9&Durations=10&Durations=11&Durations=16&Dates=01.03.2025&Dates=22.03.2025&Dates=05.04.2025&Dates=26.04.2025&Dates=19.05.2025&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        icon: '/new-main-section-7/reservation.png'
    },
    {
        title: 'Использование сертификатов',
        link: 'https://online.mosgortur.ru/kids?CityIds=-1&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=%D0%92%D0%B5%D1%81%D0%BD%D0%B0%20%2725&Durations=9&Durations=10&Durations=11&Durations=16&Dates=01.03.2025&Dates=22.03.2025&Dates=05.04.2025&Dates=26.04.2025&Dates=19.05.2025&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        icon: '/new-main-section-7/certif.png'
    },
    {
        title: 'Посещение офисов',
        link: 'https://online.mosgortur.ru/kids?CityIds=-1&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=%D0%92%D0%B5%D1%81%D0%BD%D0%B0%20%2725&Durations=9&Durations=10&Durations=11&Durations=16&Dates=01.03.2025&Dates=22.03.2025&Dates=05.04.2025&Dates=26.04.2025&Dates=19.05.2025&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        icon: '/new-main-section-7/time.png'
    },
    {
        title: 'Способы оплаты',
        link: 'https://online.mosgortur.ru/kids?CityIds=-1&DepartureCityKeys=-1&DestinationKey=460&AdultCount=1&ShowToursWithoutHotels=-1&isFromBasket=false&isFillSecondaryFilters=false&DestinationType=1&CurrencyName=%D1%80%D0%B1&AviaQuota=5&HotelQuota=5&BusTransferQuota=5&RailwayTransferQuota=5&TimeDepartureFrom=00%3A00&TimeDepartureTo=23%3A59&TimeArrivalFrom=00%3A00&RemoteHotelMode=0&TimeArrivalTo=23%3A59&SearchId=1&wrongLicenseFileUpperTitle=Incorrect+license+file.&TourType=-1&Season=%D0%92%D0%B5%D1%81%D0%BD%D0%B0%20%2725&Durations=9&Durations=10&Durations=11&Durations=16&Dates=01.03.2025&Dates=22.03.2025&Dates=05.04.2025&Dates=26.04.2025&Dates=19.05.2025&PageNumber=1&PageSize=20&HotelScheme=&TourKey=&TourDuration=',
        icon: '/new-main-section-7/payment.png'
    }
]

const questionsAnswers = [
  {
    title: "Бронирование туров",
    icon: "/question-answer/booking.png",
    list: [
      {
        question: "Не могу забронировать тур онлайн. Что делать?",
        answer: "Проверьте корректность введенных данных и наличие обязательных галочек ознакомления с условиями бронирования. Если ошибка повторяется, обратитесь в офис МОСГОРТУР по предварительной записи."
      },
      {
        question: "Почему цена тура меняется в процессе бронирования?",
        answer: "Цена может измениться из-за динамического ценообразования, когда количество свободных мест в отеле сокращается или спрос на авиабилеты повышается."
      },
      {
        question: "Почему туры, забронированные несколько дней назад, еще не подтверждены?",
        answer: "В связи с большим количеством заявок, подтверждение тура туроператором может занять более 72 часов."
      },
      {
        question: "Можно ли оформить тур с железнодорожными билетами?",
        answer: "Сейчас можно забронировать и оплатить только проживание. Ж/д билеты можно приобрести позднее самостоятельно или с помощью менеджеров МОСГОРТУРа."
      }
    ],
  },
  {
    title: "Использование сертификатов",
    icon: "/question-answer/certificate.png",
    list: [
      {
        question: "Какие услуги я могу забронировать на сайте, с использованием сертификата?",
        answer: "Услуги предоставляемые по России - это Туры, Отели, Детские лагеря, Спец предложения. Сертификат нельзя применить на услуги, оказываемые вне территории Российской Федерации."
      },
      {
        question: "Как использовать сертификат через МОСГОРТУР?",
        answer: "Зайдите на сайт МОСГОРТУР, выберите подраздел «Туры по России по сертификатам», выберите интересующее предложение, задайте параметры отдыха и следуйте подсказкам на экране."
      },
      {
        question: "Можно ли использовать сертификат для бронирования тура в другой организации?",
        answer: "Да, сертификат можно реализовать у туроператора, организации отдыха или детского лагеря, с которыми заключен договор о взаимодействии."
      },
      {
        question: "Можно ли добавить туристов без сертификата?",
        answer: "Да, оплата стоимости отдыха для туристов без сертификата будет осуществляться за счет собственных средств."
      }
    ],
  },
  {
    title: "Бронирование лагерей",
    icon: "/question-answer/booking-camp.png",
    list: [
      {
        question: "Как забронировать лагерь через МОСГОРТУР?",
        answer: "Зайдите на сайт МОСГОРТУР, выберите вкладку «Детские лагеря», задайте параметры отдыха и следуйте подсказкам на экране."
      },
      {
        question: "Какие услуги входят в стоимость лагеря?",
        answer: "Информацию о трансфере и других услугах можно посмотреть в описании конкретного лагеря в процессе бронирования."
      }
    ],
  },
  {
    title: "Посещение офисов",
    icon: "/question-answer/schedule.png",
    list: [
      {
        question: "Можно ли прийти в офис без записи?",
        answer: "Прием в офисе МОСГОРТУРа и в офисах продаж МОСГОРТУРа ведется исключительно по предварительной записи."
      },
      {
        question: "Как записаться на прием в офис?",
        answer: "Записаться на прием можно по ссылкам, размещенным на главной странице официального сайта МОСГОРТУР и странице поиска туров."
      },
      {
        question: "Какие документы нужны для визита в офис?",
        answer: "Перечень документов для визита в офис, можно посмотреть тут: [ссылка](https://www.mos.ru/pgu2/landing/1022746)."
      }
    ],
  },
  {
    title: "Способы оплаты",
    icon: "/question-answer/payment.png",
    list: [
      {
        question: "Как оплатить тур онлайн?",
        answer: "Нажмите кнопку «К оплате», введите данные платежной карты и нажмите кнопку «Оплатить». Средства будут временно зарезервированы до подтверждения тура туроператором.",
      }
      ,
      {
        question: "Можно ли оплатить тур в рассрочку?",
        answer: "Оплата тура в рассрочку не доступна.",
      }
      ,
      {
        question: "Как вернуть денежные средства за приобретенный тур?",
        answer: "Подайте заявку на аннулирование бронирования и расторжение договора в адрес МОСГОРТУРа одним из способов: по электронной почте vozvratmgt@culture.mos.ru или лично в офис МОСГОРТУР по предварительной записи.",
      }
    ],
  },
  {
    title: "Получение документов по туру",
    icon: "/question-answer/docx.png",
    list: [
      {
        question: "Когда я получу документы по туру?",
        answer: "После оплаты тура на вашу электронную почту поступит уведомление о резервировании средств. Лист бронирования и чек об оплате будут отправлены после подтверждения тура туроператором. Документы по туру будут предоставлены не позднее, чем за 24 часа до начала тура.",
      },
      {
        question: "Почему деньги с карты списали, а чеки не прислали?",
        answer: "Средства резервируются до подтверждения тура туроператором. Если деньги списаны, но чек не поступил, обратитесь в МОСГОРТУР по электронной почте zayavka-mosgortur@culture.mos.ru или лично в офис МОСГОРТУРа по предварительной записи.",
      },
      {
        question: "Когда придет подтверждение от туроператора и куда?",
        answer: "Подтверждение бронирования приходит на адрес электронной почты, указанный при бронировании. Сроки подтверждения могут быть увеличены из-за повышенного спроса.",
      },
      {
        question: "Когда я получу документы по забронированному туру?",
        answer: "После оплаты заявки на бронирование тура на вашу электронную почту поступит уведомление о резервировании средств. Лист бронирования и чек об оплате будут отправлены после подтверждения тура туроператором. Дополнительные документы будут направлены по мере готовности.",
      },
      {
        question: "Что делать, если документы по туру не пришли?",
        answer: "Убедитесь, что тур подтвержден и средства списаны. Если документы не поступили, обратитесь в МОСГОРТУР по электронной почте zayavka-mosgortur@culture.mos.ru или лично в офис МОСГОРТУРа по предварительной записи.",
      }
    ],
  },
  {
    title: "Изменения в заявке",
    icon: "/question-answer/change-booking.png",
    list: [
      {
        question: "Как изменить личные данные в заявке на тур?",
        answer: "Сообщите об ошибке по электронной почте zayavka-mosgortur@culture.mos.ru, по телефону +7 (495) 241-33-76 (доб. 3) или лично в офисе МОСГОРТУРа по предварительной записи.",
      },
      {
        question: "Как заменить сопровождающего по сертификату?",
        answer: "Замена сопровождающего лица возможна в любое время до покупки тура, но не позднее 31 октября 2024 года, при личном обращении в офис МОСГОРТУРа по предварительной записи.",
      },
      {
        question: "Как добавить услуги к уже забронированному туру?",
        answer: "Для добавления дополнительных услуг обратитесь в МОСГОРТУР по электронной почте zayavka-mosgortur@culture.mos.ru или лично в офис МОСГОРТУРа по предварительной записи.",
      },
      {
        question: "Забронировали тур с использованием сертификата, но хотим поменять место и время отдыха. Как это можно сделать?",
        answer: "Изменения в туристский продукт можно внести не позднее трех дней до даты начала тура, по согласованию с туроператором. Чаще всего для этого необходимо аннулировать уже забронированный тур и оформить новый.",
      }
    ],
  },
  {
    title: "Работа с сайтом",
    icon: "/question-answer/working-service.png",
    list: [
      {
        question: "Не получается забронировать тур. Есть ли какая-то инструкция?",
        answer: "Подробные текстовые и видеоинструкции по онлайн-бронированию тура доступны на сайте МОСГОРТУР и в социальных сетях.",
      },
      {
        question: "В форме бронирования нет кнопки «К оплате». Что делать?",
        answer: "Проверьте введенные данные и обязательные галочки ознакомления с условиями бронирования. Если проблема не решается, обратитесь в офис МОСГОРТУРа по предварительной записи.",
      }
    ],
  },
  {
    title: "Другие вопросы",
    icon: "/question-answer/other.png",
    list: [

      {
        question: "Почему никто не берет трубку по номеру +7 (495) 241-33-76 (доб. 3)?",
        answer: "Телефонная линия может быть перегружена. Вы можете обратиться в МОСГОРТУР по электронной почте zayavka-mosgortur@culture.mos.ru или лично в офис МОСГОРТУРа по предварительной записи.",
      },
      {
        question: "Как я могу убедиться, что успешно забронировал тур?",
        answer: "После оплаты заявки на вашу электронную почту поступит уведомление о резервировании средств. Это означает, что заявка принята в работу и ожидает подтверждения.",
      },
      {
        question: "Где посмотреть список партнеров, у которых можно реализовать сертификат?",
        answer: "Список партнеров доступен на официальном сайте МОСГОРТУР в разделе «Партнеры МОСГОРТУРа по сертификатам».",
      },
      {
        question: "Можно ли забронировать тур с использованием сертификата не в МОСГОРТУРе?",
        answer: "Сертификат можно реализовать у любого туроператора, организации отдыха или детского лагеря, при условии, что между ними и МОСГОРТУРом заключен договор о взаимодействии.",
      },
      {
        question: "Хочу реализовать сертификат через партнеров МОСГОРТУРа. Как это сделать?",
        answer: "Выберите организацию из списка партнеров на сайте МОСГОРТУРа и обратитесь к ней напрямую для реализации сертификата.",
      },
      {
        question: "Забронировали тур несколько дней назад. Никто не связался. Что делать?",
        answer: "Проверьте папку «Спам» в электронной почте. Если информация о бронировании не поступает более 4 суток, обратитесь в МОСГОРТУР по электронной почте zayavka-mosgortur@culture.mos.ru или лично в офис МОСГОРТУРа по предварительной записи.",
      },
      {
        question: "Подала заявку на подбор тура, но менеджер со мной так и не связался. Почему?",
        answer: "Длительное отсутствие обратной связи связано с большим количеством заявок. Срок ожидания может быть увеличен.",
      },
      {
        question: "Хочу записаться в офис МОСГОРТУРа для бронирования тура с использованием сертификата, запись отсутствует. Что делать?",
        answer: "Отслеживайте свободные временные интервалы для записи, информация обновляется периодически.",
      }
    ],
  },
];

</script>