<template>
  <div id="how-to-use-search-module-kids">
    <div class="container">
      <div class="how-to-use-search-module-kids__second">
        <h2 class="h-2 md:mb-24px mb-16px">{{ secondContent.title }}</h2>
        <div>
          <div
            class="not-last:border-b border-rarely-1"
            v-for="(step, i) in steps"
            :key="i"
          >
            <h2
              @click="actStep = actStep === i ? null : i"
              class="h-2 cursor-pointer md:(pt-24px pb-14px) pt-16px pb-10px flex justify-between items-center"
            >
              {{ "Шаг " + (i + 1) + ". " + step.step }}
              <div class="text-rarely-1">
                <IconsMinus v-if="actStep === i" />
                <IconsPlus v-else />
              </div>
            </h2>
            <div
              class="transition-all duration-500 overflow-y-hidden"
              :class="
                actStep === i
                  ? 'max-h-5000px pt-16px pb-24px'
                  : 'max-h-0 pt-0 pb-0'
              "
            >
              <div
                class="bg-regular-3 font-ptsans rounded-20px flex lg:(flex-row pt-20px pl-50px gap-50px) flex-col relative justify-between gap-25px pt-20px pl-20px pr-20px"
              >
                <div
                  class="flex gap-30px md:(mb-21px flex-row items-start) flex-col items-center"
                >
                  <div
                    class="min-w-55px h-55px rounded-[50%] text-regular-0 flex justify-center items-center text-20 font-ptsans font-bold bg-[#FFEBDB]"
                  >
                    {{ i + 1 }}
                  </div>
                  <div v-thtml="step.desc" class="max-w-350px"></div>
                </div>
                <div class="flex items-end">
                  <div
                    class="relative xl:max-w-700px lg:max-w-560px max-w-full"
                  >
                    <img
                      class="max-w-full"
                      :src="
                        '/how-to-use-search-module-kids/' + step.img + '.webp'
                      "
                    />
                    <img
                      @click="showImg = step.img"
                      src="@/assets/images/icons/zoom-in.svg"
                      class="absolute w-30px bottom-15px cursor-pointer right-15px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BlocksButton
          @click="interfaceStore.showModuleInstructionKids = false"
          filling
          class="flex gap-10px mt-30px justify-center items-center w-full"
        >
          Свернуть инструкцию
          <img
            class="transform transition-all w-15px rotate-180"
            src="@/assets/images/icons/arrow.svg"
            alt=""
          />
        </BlocksButton>
      </div>
    </div>
    <BlocksModal
      :show="showImg"
      @close="showImg = null"
      classes="!max-w-max !bg-regular-3 md:p-20px p-10px rounded-10px"
    >
      <img
        class="max-h-[90vh]"
        :src="'/how-to-use-search-module-kids/' + showImg + '.webp'"
        alt=""
      />
    </BlocksModal>
  </div>
</template>
<script setup>
const interfaceStore = useInterfaceStore();
const showImg = ref(null);

const secondContent = {
  title: "Как забронировать подходящий лагерь?",
};

const steps = [
  {
    step: "Выбор вкладки “Детские лагеря”",
    desc: 'Выберете вкладку "Детские лагеря" на панели расположенной на Главной страницы',
    img: "1",
  },
  {
    step: "Результат выдачи",
    desc: `По умолчанию, все поля кроме "Смена (сезон)" заполнены. Выберете интересующий вас месяц, нажмите кнопку "найти" и вам будут показы все доступные предложения.<br/>
Вы можете изменить параметры, заданные по умолчанию в полях "Направление" и "Лагерь", для более точного поиска.<br> Внимание! Забронировать в одну заявку возможно только одного ребенка! Если требуется сделать бронирование для 2-х и более детей, на каждого ребенка необходимо создать новую заявку`,
    img: "2",
  },
  {
    step: "Карточки отелей",
    desc: `После нажатия на кнопку "Найти", вам будут представлены карточки лагерей:
  <ul>
    <li>чтобы посмотреть описание лагеря, нажмите на его название;</li>  
    <li>чтобы ознакомиться с программой смен, нажмите на синюю строчку под название лагеря;</li>
    <li>чтобы уточнить результат выдачи, можете воспользоваться группой дополнительных фильтров, расположенных слева (для десктопа) и за значком, расположенным рядом с кнопкой "Найти" (иконка расширенного фильтра) если вы смотрите с мобильного телефона.</li>
  <ul>`,
    img: "3",
  },
  {
    step: "Фильтр каталога",
    desc: `Ту вы можете дополнительно отфильтровать по:
  <ul>
    <li>сумме,</li> 
    <li>городу,</li> 
    <li>области,</li>
    <li>питанию,</li>
    <li>инфраструктуре,</li>
    <li>наименованию лагеря.</li>
  </ul>`,
    img: "4",
  },
  {
    step: "Бронирование заказа в корзине",
    desc: `
  Кликнув по цене, вы будете перемещены в корзину, для бронирования путевки. Для этого, вам необходимо:
  <ul>
    <li>заполнить поля в блоке "Данные туриста:</li> 
  </ul>
  если у вас есть сертификат выданный МОСГОРТУРом, вы можете его применить, нажав на кнопку "+ Добавить сертификат";
  <ul>
    <li>если в лагерь едет несколько детей, нажмите "+ Добавить еще одного ребенка" для ввода данных.</li> 
  </ul>`,
    img: "5",
  },
  {
    step: "Ввод данных покупателя",
    desc: "Введите данные покупателя.",
    img: "6",
  },
  {
    step: "Проверка данных",
    desc: "Проверьте введенные данные.",
    img: "7",
  },
  {
    step: "Бронирование",
    desc: "Нажмите кнопку “Забронировать”, если все данные заведены верно и полностью, вы будете перенаправлены на страницу с уведомление об успешном бронировании путевки.",
    img: "8",
  },
  {
    step: "Завершение заказа",
    desc: "Ссылку на оплату путевки направит вам менеджер, после того как свяжется с вами.",
    img: "9",
  },
];

const actStep = ref(null);

// const firstContent = {
//   title: "Как работать с модулем поиска?",
//   disc: `Бронируя тур онлайн, вы самостоятельно заполняете все данные в поисковом модуле:
//     направление, период времени, количество участников тура, желаемые параметры отеля. После того как вы
//     нажмете кнопку «Найти» модуль предложит все доступные варианты
//     туров с указанием их стоимости. <br />
//     Узнать подробности и условия по конкретному туру, можно просто
//     нажав на его стоимость — откроется карточка тура с и вариантами
//     перелетов, описанием отеля и другими услугами. <br />
//     Для того, чтобы забронировать и оплатить тур онлайн, вам нужно
//     будет заполнить данные «Покупателя» (заказчика тура, с которым
//     будет заключен договор)`,
// };

// const actSecond = ref(false);

// watchEffect(() =>
//   ((v) => {
//     if (!v)
//       setTimeout(() => {
//         actSecond.value = false;
//       }, 1000);
//   })(interfaceStore.showModuleInstruction)
// );
</script>
<style>
#how-to-use-search-module-kids {
  @apply mb-10px md:text-lg;
}

#how-to-use-search-module-kids
  .how-to-use-search-module-kids__first
  .first__content {
  @apply flex md:flex-row flex-col-reverse md:gap-25px gap-20px justify-between;
}

#how-to-use-search-module-kids .how-to-use-search-module-kids__second ul {
  @apply list-disc pl-20px mt-20px;
}
</style>