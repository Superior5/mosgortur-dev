<template>
  <div class="container">
      <BlocksBreadCrumbs :bread-crumbs="breadCrumbs" />
      <h3 class="font-mulish text-30px font-bold">Инструкция по работе с модулем поиска</h3>
      <div class="mt-32px">
          <h4 class="font-mulish text-28px font-bold mb-18px">Туры / Отели</h4>
          <div class="font-ptsans text-18px leading-30px">
              <p>Модуль поиска разделен на три вкладки:</p>
              <ul class="list-disc ml-25px">
                  <li><strong>"Туры"</strong> — здесь можно выбрать пакетный тур, в который входят проживание, перевозка, страхование и другие дополнительные услуги.</li>
                  <li><strong>"Отели"</strong> — здесь можно забронировать отель без транспортных услуг (авиаперелет, ж/д перевозка).</li>
                  <li><strong>"Детские лагеря"</strong> — здесь можно выбрать и приобрести путевку в детский лагерь.</li>
              </ul>
              <div class="mt-40px">
                  <p class="font-ptsans mb-20px">Для наших туристов мы составили пошаговую инструкцию по бронированию услуг через модуль поиска на примере вкладки “Туры”:</p>
                  <div class="anchor" ref="toScrollTour"></div>
                  <BlocksInstructionCarousel :to-scroll="toScrollTour" v-slot="slotProps"> 
                      <Slide v-for="(step, i) in tourSteps" :key="step" class="slider">
                        
                          <div
                          id="how-to-use-search-module-kids"
                          :class="{'!max-h-5000px': i == (slotProps.currentSlide - 1)}"
                          class="bg-regular-3 transition-all w-full md:(min-h-405px max-h-405px) min-h-615px max-h-615px overflow-hidden font-ptsans rounded-20px flex xl:(flex-row gap-50px) flex-col relative justify-between gap-25px pt-20px pl-20px pr-20px text-left"
                      >
                              <div class="flex gap-30px xl:w-[60%] md:(mb-21px flex-row items-start) flex-col items-center">
                                  <div
                                      class="min-w-55px h-55px rounded-[50%] text-regular-0 flex justify-center items-center text-20 font-ptsans font-bold bg-[#FFEBDB]"
                                  >
                                      {{ i + 1 }}
                                  </div>
                                  <div>
                                      <p class="text-20px font-mulish font-bold mb-16px">Шаг {{ i+1 }}. {{ step.step }}</p>
                                      <div v-thtml="step.desc[0]"></div>

                                      <BlocksInform v-if="step.info" class="md:mt-15px flex !items-start">
                                          <div>
                                              <span class="font-bold">Обратите внимание:</span> <br />
                                              <span v-thtml="step.info" />
                                          </div>
                                      </BlocksInform>
                                      <div v-if="step.desc[1]" v-thtml="step.desc[1]"></div>
                                  </div>
                                 
                              </div>
                              <div class="flex justify-center items-end">
                                  <div class="relative xl:max-w-700px lg:max-w-560px max-w-full">
                                      <img
                                      class="max-w-full"
                                      :src="'/how-to-use-search-module-new/' + step.img + '.webp'"/>
                                      <img
                                      @click="showTourImg = step.img"
                                      src="@/assets/images/icons/zoom-in.svg"
                                      class="absolute w-30px bottom-15px cursor-pointer right-15px"/>
                                  </div>
                              </div>
                          </div>
                      </Slide>
                  </BlocksInstructionCarousel>
              </div>
          </div>
      </div>
      <div class="mt-90px">
          <h4 class="font-mulish text-28px font-bold mb-18px">Детские лагеря</h4>
          <div class="font-ptsans text-18px leading-30px">
              <div class="mt-40px">
                  <div class="anchor" ref="toScrollKids"></div>
                  <BlocksInstructionCarousel :to-scroll="toScrollKids" v-slot="slotProps"> 
                      <Slide v-for="(step, i) in steps" :key="i" class="slider">
                          <div
                          id="how-to-use-search-module-kids"
                          :class="{'!max-h-5000px': i == (slotProps.currentSlide - 1)}"
                          class="bg-regular-3 transition-all w-full min-h-405px max-h-405px overflow-hidden font-ptsans rounded-20px flex lg:(flex-row gap-50px) flex-col relative justify-between gap-25px pt-20px pl-20px pr-20px text-left"
                          @click="act = !act"
                      >
                              <div class="flex gap-30px md:w-[60%] md:(mb-21px flex-row items-start) flex-col items-center">
                                  <div
                                      class="min-w-55px h-55px rounded-[50%] text-regular-0 flex justify-center items-center text-20 font-ptsans font-bold bg-[#FFEBDB]"
                                  >
                                      {{ i + 1 }}
                                  </div>
                                  <div>
                                    <p class="text-20px font-mulish font-bold mb-16px">Шаг {{ i+1 }}. {{ step.step }}</p>
                                    <div v-thtml="step.desc"></div>
                                  </div>
                              </div>
                              <div class="flex items-end">
                                  <div class="relative xl:max-w-700px lg:max-w-560px max-w-full">
                                      <img
                                      class="max-w-full"
                                      :src="'/how-to-use-search-module-kids/' + step.img + '.webp'"/>
                                      <img
                                      @click="showKidsImg = step.img"
                                      src="@/assets/images/icons/zoom-in.svg"
                                      class="absolute w-30px bottom-15px cursor-pointer right-15px"/>
                                  </div>
                              </div>
                          </div>
                      </Slide>
                  </BlocksInstructionCarousel>
              </div>
          </div>
      </div>
  </div>
  <BlocksModal
    :show="showKidsImg"
    @close="showKidsImg = null"
    classes="!max-w-max !bg-regular-3 md:p-20px p-10px rounded-10px"
  >
    <img
      class="max-h-[90vh]"
      :src="'/how-to-use-search-module-kids/' + showKidsImg + '.webp'"
      alt=""
    />
  </BlocksModal>
  <BlocksModal
    :show="showTourImg"
    @close="showTourImg = null"
    classes="!max-w-max !bg-regular-3 md:p-20px p-10px rounded-10px"
  >
    <img
      class="max-h-[90vh]"
      :src="'/how-to-use-search-module-new/' + showTourImg + '.webp'"
      alt=""
    />
  </BlocksModal>
</template>
<style>
.carousel__slide {
 height: auto;
 align-items: flex-start;
} 
#how-to-use-search-module-kids {
@apply mb-10px md:text-lg;
}

#how-to-use-search-module-kids .first__content {
@apply flex md:flex-row flex-col-reverse md:gap-25px gap-20px justify-between;
}

#how-to-use-search-module-kids ul {
@apply list-disc pl-20px mt-20px;
}
.carousel__viewport,
.carousel__track {
 height: 100%;
}
</style>
<script setup>

const showKidsImg = ref(null);
const showTourImg = ref(null);
const toScrollTour = ref(null)
const toScrollKids = ref(null)
const act = ref(false);
const breadCrumbs = [
{ name: "Главная", link: "/" },
{ name: "Информация", link: false },
{ name: "Инструкция по работе с модулем поиска", link: false },
];

const steps = [
{
  step: "Поиск лагеря",
  desc: 'Перейдите на вкладку "Детские лагеря".',
  img: "1",
},
{
  step: "Параметры поиска",
  desc: `По умолчанию, все поля кроме "Смена (сезон)" заполнены:
  <ul>
    <li>В поле "Направление" можно выбрать конкретный регион или оставить выбор по умолчанию — все регионы. </li>  
    <li>В поле "Лагерь" можно выбрать один или несколько лагерей по названию.</li>  
    <li>В поле "Смена (сезон)" можно выбрать период отдыха.</li>  
  </ul>
  <br/>
  Выберите нужный месяц, если нужно, уточните параметры в полях "Направление", "Лагерь" и "Дети" и нажмите кнопку "найти". <br> <br> <span class="font-bold">Внимание!</span> Забронировать в одну заявку возможно только одного ребенка! Если требуется сделать бронирование для 2-х и более детей, на каждого ребенка необходимо создать новую заявку.`,
  img: "2",
},
{
  step: "Карточки отелей",
  desc: `Система покажет все доступные предложения: 

<ul>
  <li>Чтобы посмотреть карточку лагеря, нажмите на его название.</li>  
  <li>Чтобы ознакомиться с программой смен, нажмите на синюю строку под названием лагеря.</li>
<ul>`,
  img: "3",
},
{
  step: "Дополнительные фильтры",
  desc: `
<ul>
  <li>Чтобы уточнить параметры поиска, воспользуйтесь дополнительными фильтрами слева (если вы находитесь за компьютером) или значком расширенного поиска рядом с кнопкой "Найти" (если вы используете смартфон).</li> 
  <li>В дополнительных фильтрах можно задать желаемую стоимость путевки в лагерь, город, тип питания и инфраструктуры, название лагеря.</li> 
</ul>`,
  img: "4",
},
{
  step: "Бронирование лагеря",
  desc: `
<ul>
  <li>Чтобы забронировать лагерь, нажмите на цену. Вы окажетесь в корзине (на странице бронирования).</li> 
  <li>Заполните поля в блоке "Данные туристов:</li>
  <li class="list-none">
    <ul class="mt-0">
      <li>Введите данные ребенка в соответствующие поля.</li>
      <li>Если вы покупаете путевку с применением сертификата, нажмите кнопку "Добавить сертификат".</li>
      <li>Если в лагерь едет несколько детей, нажмите "Добавить еще одного ребенка" и введите его данные.</li>
    </ul>  
  </li>
</ul>`,
  img: "5",
},
{
  step: "Покупатель",
  desc: "Введите данные покупателя.",
  img: "6",
},
{
  step: "Проверка данных",
  desc: "Внимательно проверьте введенные данные.",
  img: "7",
},
{
  step: "Подтверждение бронирования",
  desc: "Нажмите кнопку “Забронировать”. Если все данные верны, вы увидите уведомление об успешном бронировании путевки.",
  img: "8",
},
{
  step: "Завершение заказа",
  desc: "После того как менеджер свяжется с вами и подтвердит бронирование, вы получите ссылку на оплату путевки.",
  img: "9",
},
];

const tourSteps = [
  {
      step: 'Поиск',
      desc: [`Выберите вкладку “Туры” и в параметрах поиска укажите диапазон дат вылета, продолжительность отдыха, направление отдыха, количество и состав туристов. Для корректного подбора тура и расчета стоимости, укажите в составе туристов всех участников поездки. Нажмите кнопку “Найти”.`],
      info: 'Диапазон дат вылета — это даты начала тура, а не даты самого отдыха. Чем шире установленный диапазон дат вылета, тем больше вариантов туров выдаст поисковая система. Желаемая продолжительность отдыха указывается в строке “Кол-во ночей”.',
      img: '1'
  },{
      step: 'Выбор тура',
      desc: [`После нажатия кнопки "Найти" модуль выдаст все доступные варианты туров по заданным вами параметрам. 
После этого вы можете уточнить параметры поиска в дополнительных фильтрах, которые появятся слева: курорт, тип перелета, питания или пляжа, класс отеля или особенности отдыха.  
Для того, чтобы система начала поиск по уточненным параметрам, нажмите кнопку “Применить” и дождитесь новых результатов. 
Чтобы посмотреть все варианты туров в понравившийся отель, нажмите на стоимость тура. В открывшемся списке вы сможете выбрать удобную дату вылета. Нажмите на стоимость подходящего варианта тура, чтобы открыть карточку этого тура и узнать все подробности и условия. 
Вы также можете отметить и сравнить несколько туров. Для этого воспользуйтесь кнопкой "Добавить в сравнение".`],
      info: '',
      img: '2',
  },{
      step: 'Карточка тура',
      desc: [`В карточке тура вы увидите параметры выбранного тура: маршрут, даты, название отеля и тип номера.`, `В блоке “Перелет” выберите авиакомпанию, удобный рейс и параметры перелета: количество пересадок, багаж и так далее. 
После блока с параметрами перелета вы увидите блок с полным описанием отеля: категория, номерной фонд, услуги, описание территории, наличие анимации: и так далее. `],
      info: 'В пункте ”Что входит в стоимость?” указаны услуги, которые входят в стоимость тура, и услуги, которые оплачиваются отдельно.',
      img: '3',
  },{
      step: 'Заполнение данных. Покупатель',
      desc: [`Чтобы оформить заявку на выбранный тур и оплатить его, заполните несколько форм.
      <ul>
          <li>В форму «Покупатель» введите данные человека, с которым будет заключен договор. В этом же поле можно оставить комментарий — сообщение получит наш сотрудник.</li>
          <li>В форму «Туристы» введите данные всех участников тура. Если одним из туристов является покупатель, его данные также нужно продублировать в поле «Туристы», в строке “Первый”. Также введите данные всех туристов, в том числе ребенка.</li>
      </ul>`],
      info: '',
      img: '4',
  },{
      step: 'Заполнение данных. Туристы',
      desc: [`Если вы покупаете тур с применением сертификата, сначала заполните данные о ребенке, а потом добавьте сертификат. Если в сертификате есть сопровождающий, не забудьте поставить галочку «В сертификате есть сопровождающий».`],
      info: '',
      img: '5',
  },{
      step: 'Заполнение данных. Сертификат',
      desc: [`После этого введите следующие данные:
      <ul>
          <li>№ сертификата;</li>
          <li>СНИЛС ребенка;</li>
          <li>ФИО сопровождающего;</li>
          <li>СНИЛС сопровождающего;</li>
          <li>ФИО заявителя;</li>
          <li>СНИЛС заявителя.</li>
      </ul>
ФИО и СНИЛС заявителя можно найти в предоставленном сертификате, в строке "Сертификат выдан по заявлению". Если заявитель и сопровождающий по сертификату — одно лицо, данные сопровождающего и заявителя будут одинаковыми.
Нажмите кнопку «Применить», чтобы узнать стоимость тура с учетом скидки по сертификату. Нажатие этой кнопки полностью обратимо — сертификат не будет считаться использованным. `],
      info: 'Если модуль поиска выдает ошибку "Такой персоны нет в сертификате", проверьте введенные данные на ошибки и опечатки, исправьте их и снова нажмите "Применить".',
      img: '6',
  },{
      step: 'Бронирование и оплата',
      desc: [`Нажмите кнопку «К оплате», чтобы перейти к внесению данных карты и бронированию тура. На вашей карте должно быть достаточно денежных средств для оплаты стоимости тура.
Заполните данные банковской карты и нажмите кнопку «Оплатить». Денежные средства (стоимость тура) будут зарезервированы на вашей карте, но не списаны.
Заявка на бронирование тура направляется туроператору.
Если тур будет подтвержден – деньги с вашего счета спишутся и вам поступит чек об оплате. Если тур не подтвердится – деньги будут разблокированы и снова доступны для использования.`],
      info: `До момента подтверждения тура и списания средств вы можете отозвать заявку на тур, разблокировать деньги и вернуть сертификат — для этого обратитесь с заявлением об отказе от тура на почту paymosgortur@culture.mos.ru. 
В письме обязательно укажите номер заявки на тур (вы найдете его в почте, которую указывали в разделе "Покупатель").
Разблокирование денег может занять от нескольких часов до 30 дней в зависимости от банка, который обслуживает вашу карту.`,
      img: '7',
  },{
      step: 'Подтверждение тура',
      desc: [`Ваша заявка оформлена. Если по заявке возникнут вопросы, с вами свяжется менеджер.<br/>
Как только тур будет подтвержден – деньги с вашего счета спишутся, вы получите чек об оплате и “Лист бронирования” с данными о приобретенном туре.<br/>
Остальные документы по туру (ваучеры, памятки, билеты и т.д.) будут направлены заблаговременно по мере готовности.`],
      info: 'Аналогичные правила пользования модулем действуют и при бронировании услуг в закладке "Отели".',
      img: '8'
  }
]
</script>