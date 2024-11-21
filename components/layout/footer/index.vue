<template>
  <footer id="footer" class="font-notosans mt-100px">
    <div class="border-t md:(border-b pt-30px pb-40px) py-20px border-rarely-0">
      <div
        class="container flex xl:(flex-row) md:gap-23px gap-30px flex-col justify-between"
      >
        <div
          class="flex xl:(gap-30px flex-col items-start justify-start) gap-30px md:(flex-row gap-0) flex-col items-center justify-between"
        >
          <img
            class="md:h-75px h-42px"
            src="@/assets/images/layouts/logo.png"
            alt=""
          />
          <a
            href="tel:+7(800)3011770"
            class="text-15px whitespace-nowrap font-bold flex gap-10px"
          >
            <img src="@/assets/images/icons/phone.svg" alt="" />
            +7 (800) 301 17 70
          </a>
        </div>
        <div
          class="md:grid flex flex-col max-w-1200px grid-cols-4 md:gap-y-30px gap-y-20px w-full gap-10px"
        >
          <div
            v-for="(link, k) in links"
            :key="k"
            class="md:( !border-none) border-b !border-black py-5px"
          >
            <h6
              @click="actMenu = actMenu == k ? '' : k"
              class="font-bold flex justify-between"
            >
              {{ k }}
              <IconsSliderArrow
                class="transform md:hidden"
                :class="actMenu == k ? 'rotate-270' : 'rotate-90'"
              />
            </h6>
            <div
              class="flex-col gap-12px md:(max-h-none flex pt-12px overflow-visible) overflow-hidden text-sm flex transition-all duration-500"
              :class="actMenu == k ? 'max-h-700px pt-12px' : 'pt-0px max-h-0px'"
            >
              <template v-for="(url, n) in link" :key="n">
                <nuxt-link target="_blank" v-if="url" :to="url">{{
                  n
                }}</nuxt-link>
                <div v-else>{{ n }}</div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-b pt-30px py-25px border-rarely-0">
      <div
        class="container flex md:(mb-50px flex-row gap-110px) gap-25px flex-col xl:mb-0"
      >
        <div
          v-for="contact in contacts"
          :key="contact.title"
          class="flex relative md:mb-0 flex-col mb-60px xl:gap-0 gap-20px"
        >
          <h6 class="font-bold text-sm uppercase">{{ contact.title }}</h6>
          <div class="flex items-center">
            <a :href="'mailto:' + contact.email">
              <blocks-blue-button>{{ contact.email }}</blocks-blue-button>
            </a>
            <div
              class="flex xl:(static ml-40px w-auto) left-0 -bottom-60px w-full absolute gap-24px ml-0"
            >
              <a
                v-for="(el, i) in contact.links"
                :key="i + el.link"
                :href="el.link"
              >
                <img :src="el.icon" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="grid md:(grid-cols-[590px,1fr] !text-left) grid-cols-1 !text-center text-rarely-1 text-sm pt-30px pb-25px container"
    >
      <span>© {{ new Date().getFullYear() }} Мосгортур</span>
      <a
        href="/documents/соглашение_о_конфиденциальности_персональной_информации.pdf"
        >Политика конфиденциальности</a
      >
    </div>
  </footer>
</template>

<script setup>
import viber from "@/assets/images/icons/viber.svg";
import dzen from "@/assets/images/icons/dzen.svg";
import vk from "@/assets/images/icons/vk.svg";
import telegram from "@/assets/images/icons/telegram.svg";

const links = {
  Туристам: {
    "Навигатор по сертификатам": "https://mosgortur.ru/lok/navigator",
    "Рекомендации туристам": "/for-tourists/recommendations-for-tourists",
    "Курортный сбор": "/for-tourists/resort-fee",
    "Часто задаваемые вопросы": "/question-answer",
    'Корпоративным клиентам': 'https://hr.mosgortur.ru/corpmgt',

  },
  Родителям: {
    "Подготовка к поездке в лагерь":
      "https://mosgortur.ru/parents.htm#:~:text=%D0%9F%D0%9E%D0%94%D0%93%D0%9E%D0%A2%D0%9E%D0%92%D0%9A%D0%90%20%D0%9A%C2%A0%D0%9F%D0%9E%D0%95%D0%97%D0%94%D0%9A%D0%95%20%D0%92%C2%A0%D0%9B%D0%90%D0%93%D0%95%D0%A0%D0%AC",
    "Акция “Безопасное лето”": "https://bezopasnoeleto.ru/",
    // 'Городские мероприятия': '/404',
  },
  Информация: {
    "Бронирование и оплата": "/information/booking-and-payment",
    'Инструкция по работе с модулем': '/information/instructions',
    "Документы": "https://mosgortur.ru/about/docs.htm",
    "О Нас": "https://mosgortur.ru/about.htm",    
  },
  Контакты: {
    Контакты: "/contacts",
  },
};

const contacts = [
  {
    title: "Туристам",
    email: "zayavka-mosgortur@culture.mos.ru",
    links: [
      { icon: dzen, link: "https://dzen.ru/mosgortur" },
      { icon: vk, link: "https://vk.com/mosgortur?ysclid=lrc4rvbpfj672137654" },
    ],
  },
  {
    title: "Партнерам",
    email: "corp@culture.mos.ru",
    links: [
      // { icon: telegram, link: '' },
      { icon: vk, link: "https://vk.com/mosgortur?ysclid=lrc4rvbpfj672137654" },
    ],
  },
];

const actMenu = ref("");
</script>
<style scoped></style>