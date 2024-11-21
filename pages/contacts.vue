<template>
  <div id="contacts" class="container">
    <BlocksBreadCrumbs :bread-crumbs="breadCrumbs" />
    <div>
      <h1 class="font-mulish xl:text-30px text-22px font-bold">Контакты</h1>
      <div class="mt-40px">
        <div class="lg:block hidden contacts__block rounded-10px bg-white shadow-2 px-42px">
          <h2 class="h-2 mb-27px text-24px">Главный офис</h2>
          <div class="contacts__block-cols">
            <div>
              <div class="contacts__block-section mb-27px">
                <h6>Адрес</h6>
                <div>
                  101000, Москва, Малый Харитоньевский пер., д. 6, стр. 3
                </div>
                <a target="_blank" href="https://yandex.ru/maps/-/CDurBWmH">
                  <BlocksBlueButton
                    class="flex transition duration-100 !hover:bg-[#f1ecec] gap-5px text-15px xl:(py-5px px-10px) my-10px"
                  >
                    <img src="@/assets/images/icons/geo-tag.svg" alt="" />
                    <span>Показать на карте</span>
                  </BlocksBlueButton>
                </a>
              </div>
              <div class="contacts__block-section">
                <h6>График работы Главного офиса</h6>
                <div>
                  ПН-ЧТ с 9:00 до 18:00 <br />
                  ПТ с 9:00 до 16:45 <br />
                  обеденный перерыв с 13:00 до 13:45
                </div>
              </div>
            </div>
            <div class="">
              <div class="contacts__block-section">
                <h6>График работы Отдел приема документов</h6>
                <div>ежедневно с 8:00 до 20:00</div>
                <BlocksInform class="max-w-380px">
                  <span>
                    Отдел приема документов осуществляет прием населения
                    исключительно по предварительной записи через
                    <a class="text-regular-1" href="http://mos.ru">mos.ru</a>.
                  </span>
                </BlocksInform>
              </div>
            </div>
            <div class="">
              <div class="contacts__block-section mb-27px">
                <h6>E-mail</h6>
                <a class="transition duration-100 !hover:bg-[#f1ecec] px-5px fit-content rounded-[6px]" href="mailto:mosgortur@culture.mos.ru"
                  >mosgortur@culture.mos.ru</a
                >
              </div>
              <div class="contacts__block-section">
                <h6>Факс</h6>
                <div>+7(499) 241-51-10</div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:hidden block contacts__block rounded-10px bg-white md:shadow-2 md:px-30px md:px-12px">
          <h2 class="h-2 mb-23px">Главный офис</h2>
          <div class="flex gap-40px md:flex-row flex-col md:children:w-1/2">
            <div class="flex flex-col gap-30px">
              <div class="contacts__block-section">
                <h6>Адрес</h6>
                <div>
                  101000, Москва, Малый Харитоньевский пер., д. 6, стр. 3
                </div>
                <a href="https://maps.yandex.ru/-/CVgZeDmE">
                  <BlocksBlueButton
                    class="flex gap-5px text-15px xl:(py-5px px-10px) my-10px"
                  >
                    <img src="@/assets/images/icons/geo-tag.svg" alt="" />
                    <span>Показать на карте</span>
                  </BlocksBlueButton>
                </a>
              </div>
              <div class="contacts__block-section">
                <h6>График работы Главного офиса</h6>
                <div>
                  ПН-ЧТ с 9:00 до 18:00 <br />
                  ПТ с 9:00 до 16:45 <br />
                  обеденный перерыв с 13:00 до 13:45
                </div>
              </div>
              <div class="contacts__block-section">
                <h6>E-mail</h6>
                <a href="mailto:mosgortur@culture.mos.ru"
                  >mosgortur@culture.mos.ru</a
                >
              </div>
            </div>
            <div class="flex flex-col md:justify-between gap-30px">
              <div class="contacts__block-section">
                <h6>График работы Отдел приема документов</h6>
                <div>ежедневно с 8:00 до 20:00</div>
                <BlocksInform class="md:max-w-380px">
                  <span class="leading-20px">
                    Отдел приема документов осуществляет прием населения
                    исключительно по предварительной записи через
                    <a class="text-regular-1" href="http://mos.ru">mos.ru</a>.
                  </span>
                </BlocksInform>
              </div>
              <div class="contacts__block-section">
                <h6>Факс</h6>
                <div>+7(499) 241-51-10</div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:(grid grid-cols-[1fr,1fr,290px] justify-between gap-20px) contacts__block hidden"
          v-for="contact in contacts"
          :key="contact.title">
          <div class="max-w-310px">
            <h2 class="h-2 mb-24px">{{ contact.title }}</h2>
            <div class="" v-if="contact.disc">{{ contact.disc }}</div>
          </div>
          <div>
            <div class="contacts__block-section mb-27px">
              <h6>Адрес</h6>
              <div>{{ contact.addr }}</div>
              <div
                v-for="el in contact.metro"
                :key="el.name"
                :style="`color: ${el.color}`"
                class="flex gap-13px"
              >
                <IconsMetro /> {{ el.name }}
              </div>
              <a target="_blank" :href="contact.map" v-if="contact.map">
                <BlocksBlueButton
                  class="flex transition duration-100 !hover:bg-[#f1ecec] gap-5px text-15px xl:(py-5px px-10px) my-10px"
                >
                  <img src="@/assets/images/icons/geo-tag.svg" alt="" />
                  <span>Показать на карте</span>
                </BlocksBlueButton>
              </a>
            </div>
            <div class="contacts__block-section">
              <h6>Телефон</h6>
              <div>{{ contact.phone }}</div>
            </div>
          </div>
          <div>
            <div class="contacts__block-section mb-27px">
              <h6>E-mail</h6>
              <a class="transition duration-100 !hover:bg-[#f1ecec] px-5px fit-content rounded-[6px]" :href="'mailto:' + contact.email">{{ contact.email }}</a>
            </div>
            <div class="contacts__block-section">
              <h6>График работы</h6>
              <div v-html="contact.workSchedules" />
            </div>
          </div>
        </div>
        <div class="md:hidden block">
          <BlocksContactsAccordion :contacts="contacts" />
        </div>
        <div class="contacts__block md:flex flex-row justify-between gap-120px lg:hidden hidden"
          v-for="contact in contacts"
          :key="contact.title">
          <div class="flex flex-col gap-30px">
            <div class="max-w-310px flex flex-col gap-30px">
                <h2 class="h-2">{{ contact.title }}</h2>
                <div class="" v-if="contact.disc">{{ contact.disc }}</div>
            </div>
            <div class="flex flex-col gap-12px contacts__block-section">
              <h6>Адрес</h6>
              <div>{{ contact.addr }}</div>
              <div
                v-for="el in contact.metro"
                :key="el.name"
                :style="`color: ${el.color}`"
                class="flex gap-13px"
              >
                <IconsMetro /> {{ el.name }}
              </div>
              <a :href="contact.map" v-if="contact.map">
                <BlocksBlueButton
                  class="flex gap-5px text-15px xl:(py-5px px-10px) my-10px"
                >
                  <img src="@/assets/images/icons/geo-tag.svg" alt="" />
                  <span>Показать на карте</span>
                </BlocksBlueButton>
              </a>
            </div>
            <div class="contacts__block-section">
              <h6>Телефон</h6>
              <div>{{ contact.phone }}</div>
            </div>
          </div>
          <div>
            <div class="contacts__block-section mb-27px">
              <h6>E-mail</h6>
              <a :href="'mailto:' + contact.email">{{ contact.email }}</a>
            </div>
            <div class="contacts__block-section">
              <h6>График работы</h6>
              <div v-html="contact.workSchedules" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const breadCrumbs = [
  { name: "Главная", link: "/" },
  { name: "Контакты", link: false },
];

const contacts = [
  {
    title: "Коммерческий отдел",
    disc: "",
    addr: "101000, Москва, Малый Харитоньевский пер. д. 6, с. 3",
    metro: [
      { name: "Чистые пруды", color: "#DD0000" },
      { name: "Тургеневская", color: "#F37400" },
    ],
    map: "https://yandex.ru/maps/-/CDurBWmH",
    phone: " +7(495) 241-33-76  доб. 3",
    email: "zayavka-mosgortur@culture.mos.ru",
    workSchedules:
      "ПН-ПТ: с 08:00 до 20:00 <br> СБ-ВС: с 08:00 до 20:00 <br> обеденный перерыв с 13:00 до 13:45",
  },
  {
    title: 'Офис продаж в МФЦ ТЦ "Афимолл Сити"',
    disc: 'Офис продаж в центре госуслуг "Мои документы" в торговом центре "Афимолл Сити"',
    addr: "123317, Москва, Пресненская наб., 2.",
    metro: [{ name: "Деловой центр", color: "#DD9F00" }],
    map: "https://yandex.ru/maps/-/CDurFA7n",
    phone: "+7 (495) 241-33-76 доб. 885.",
    email: "afimall@culture.mos.ru",
    workSchedules:
      "ежедневно с 10:00 до 22:00, <br> обеденный перерыв с 15:00 до 15:48",
  },
  {
    title: 'Офис продаж в МФЦ ТЦ "Спектр"',
    disc: 'Офис продаж в центре госуслуг "Мои документы" (ТЦ "Спектр")',
    addr: "117588, Москва, Новоясеневский пр-т., 1",
    metro: [{ name: "Теплый стан.", color: "#F37400" }],
    map: "https://yandex.ru/maps/-/CDurFApo",
    phone: "+7 (495) 241-33-76 доб. 886.",
    email: "spektr@culture.mos.ru",
    workSchedules:
      "ежедневно с 10:00 до 22:00, <br> обеденный перерыв с 15:00 до 15:48",
  },
  {
    title: 'Офис продаж в МФЦ ТЦ "Columbus"',
    disc: 'Офис продаж в центре госуслуг "Мои документы" (ТЦ "Columbus").',
    addr: "117519, Москва, Кировоградская ул., 13A.",
    metro: [{ name: "Пражская", color: "#606367" }],
    map: "https://yandex.ru/maps/-/CDurFEj1",
    phone: "+7 (495) 241-33-76 доб. 887.",
    email: "columbus@culture.mos.ru",
    workSchedules:
      "ежедневно с 10:00 до 22:00, <br> обеденный перерыв с 15:00 до 15:48",
  },
  {
    title: 'Офис продаж в МФЦ ТЦ "Щелковский"',
    disc: 'Офис продаж в центре госуслуг "Мои документы" (ТЦ "Щелковский").',
    addr: "107207, Москва, Щёлковское ш., 75.",
    metro: [{ name: "Щелковская", color: "#014CBD" }],
    map: "https://yandex.ru/maps/-/CDurFE2K",
    phone: "+7 (495) 241-33-76 доб. 888.",
    email: "schelkovo@culture.mos.ru",
    workSchedules:
      "ежедневно с 10:00 до 22:00, <br> обеденный перерыв с 15:00 до 15:48",
  },
  {
    title: 'Офис продаж в МФЦ ТЦ "Декоратор"',
    disc: 'Офис продаж в центре госуслуг "Мои документы" (ТЦ "Декоратор").',
    addr: "109052, Москва, Рязанский проспект д. 2, кор. 3.",
    metro: [{ name: "Нижегородская", color: "#F088B6" }],
    map: "https://yandex.ru/maps/-/CDurFIzV",
    phone: "+7 (495) 241-33-76 доб. 889",
    email: "riazanski@culture.mos.ru",
    workSchedules:
      "ежедневно с 10:00 до 22:00, <br> обеденный перерыв с 15:00 до 15:48",
  },
  {
    title: 'Офис продаж в МФЦ ТЦ "Метрополис"',
    disc: 'Офис продаж в центре госуслуг "Мои документы" (ТЦ "Метрополис").',
    addr: "125171 г. Москва, Ленинградское шоссе, д. 16А, стр. 8.",
    metro: [{ name: "Войковская", color: "#008B37" }],
    map: "https://yandex.ru/maps/-/CDurFMYL",
    phone: "+7 (495) 241-33-76 доб. 890",
    email: "metropolis@culture.mos.ru",
    workSchedules:
      "ежедневно с 10:00 до 22:00, <br> обеденный перерыв с 15:00 до 15:48",
  },
  {
    title: 'Офис продаж в МФЦ ТЦ "Калейдоскоп"',
    disc: 'Офис продаж в центре госуслуг "Мои документы" (ТЦ "Калейдоскоп").',
    addr: "125363 г. Москва, ул. Сходненская, д. 56.",
    metro: [{ name: "Сходненская", color: "#3823BA" }],
    map: "https://yandex.ru/maps/-/CDurFM-V",
    phone: "+7 (495) 241-33-76 доб. 892.",
    email: "skhodnya@culture.mos.ru",
    workSchedules:
      "ежедневно с 10:00 до 22:00, <br> обеденный перерыв с 15:00 до 15:48",
  },
  {
    title: 'Офис продаж в МФЦ ТЦ "Кунцево Плаза""',
    disc: 'Офис продаж в центре госуслуг "Мои документы" (ТЦ "Кунцево Плаза").',
    addr: "г. Москва, ул. Ярцевская, д. 19",
    metro: [{ name: "Молодежная", color: "#014CBD" }],
    map: "https://yandex.ru/maps/-/CDurFQnx",
    phone: "+7 (495) 241-33-76 доб. 744.",
    email: "kuntsevsky@culture.mos.ru",
    workSchedules:
      "ежедневно с 10:00 до 22:00, <br> обеденный перерыв с 15:00 до 15:48",
  },
];

useHead({
  title: "Контакты",
});
</script>
<style scoped>
#contacts .contacts__block {
  @apply border-b border-rarely-6 last:border-none py-40px;
}

.fit-content {
  width: fit-content;
}
#contacts .contacts__block-cols {
  @apply grid grid-cols-[1fr,1fr,290px] justify-between gap-20px;
}

#contacts .contacts__block-section h6 {
  @apply font-mulish font-bold;
}

#contacts .contacts__block-section {
  @apply flex flex-col gap-12px;
}

#contacts .contacts__block-section a[href^="mailto:"] {
  @apply text-regular-1;
}
</style>