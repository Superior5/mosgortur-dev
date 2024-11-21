<template>
  <div class="flex flex-col gap-y-30px w-full">
    <div class="w-full rounded-10px shadow-5 font-ptsans px-32px py-28px">
      <h2 class="h-2">Оплата заказа</h2>
      <div
        class="flex md:flex-row mt-40px flex-col justify-between gap-24px font-ptsans"
      >
        <div class="md:max-w-450px w-full">
          <div>
            <p>Номер заказа:</p>
            <div class="h-2 mt-8px mb-20px">Ваш заказ № 9845</div>
            <h1 class="h-2">
              Лагерь "Нива" длинный заголовок и название лагеря
            </h1>
            <div
              class="flex md:(flex-col items-start gap-0) items-center gap-20px"
            >
              <blocks-blue-button
                class="flex text-sm my-12px gap-6px py-2px px-4px rounded-[4px]"
              >
                <img src="@/assets/images/icons/geo-tag.svg" alt="" />
                <!-- <span v-if="isMobile()">Открыть карту</span> -->
                <span>Краснодарский край, г. Анапа, ул. Крымская, д. 22</span>
              </blocks-blue-button>
              <div>(120 км. от МКАД)</div>
            </div>
            <div class="md:text-18px mt-8px">
              2 реб. / Superior Twin корп. "Рассвет" / 2-местный /
            </div>
          </div>
          <div class="xl:mt-50px mt-36px">
            <div class="md:text-18px mb-16px">Даты смены:</div>
            <div class="flex items-center xl:gap-20px gap-10px">
              <div class="text-sm flex flex-col gap-5px">
                <span class="xl:text-20px md:text-18px font-bold"
                  >19 сентября, пн.</span
                >
                с 15:00
              </div>
              <div class="w-32px h-1px bg-black"></div>
              <div class="text-sm flex flex-col gap-5px">
                <span class="xl:text-20px md:text-18px font-bold"
                  >26 сентября, сб.</span
                >
                до 21:00
              </div>
            </div>
          </div>
          <div class="md:text-18px xl:mt-50px mt-36px !leading-30px">
            <div class="font-bold mb-5px">1-комнатный 2-местный номер:</div>
            <div>Площадь: 20 м2</div>
            <div>В номере:</div>
            <ul class="list-disc flex flex-col pl-25px">
              <li>2 двухярусные кровати</li>
              <li>2 основных места и 1 дополнительное</li>
            </ul>
            <div class="flex flex-wrap text-15px mt-16px gap-y-10px gap-x-20px">
              <div
                v-for="item in roomServices"
                :key="item"
                class="flex px-8px cursor-pointer py-5px rounded-[6px] bg-[#F5F5F5]"
              >
                <img
                  class="mr-12px"
                  src="@/assets/images/icons/cloakroom.svg"
                />
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
          <div class="mt-40px">
            <p class="text-18px">Выбранные туристы:</p>
            <div class="flex flex-wrap text-15px mt-16px gap-y-10px gap-x-20px">
              <div
                v-for="item in 4"
                :key="item"
                class="flex px-8px cursor-pointer py-5px rounded-[6px] bg-[#FFF7F1]"
              >
                <img src="@/assets/images/icons/tourist.svg" class="mr-10px" />
                <span class="text-blue-600">Иванов А.Л.</span>
              </div>
            </div>
          </div>
          <div class="md:text-18px xl:mt-50px mt-36px !leading-30px">
            <div class="font-bold mb-5px">Ваши услуги:</div>
            <div>Отдельный номер в лагере (20 м2) в номере:</div>
            <ul class="list-disc flex flex-col pl-25px">
              <li>2 двухярусные кровати</li>
              <li>2 основных места и 1 дополнительное</li>
              <li>Страховка на период отдыха</li>
              <li>5-ти разовое питание для всех смен!</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="additional-services" class="md:text-18px mt-40px !leading-30px">
        <div>Дополнительные услуги:</div>
        <div class="additional-services__tab my-40px">
          <div class="additional-services__tab_headers">
            <div>Название</div>
            <div>Класс</div>
            <div>Туристы</div>
            <div>Цена</div>
          </div>
          <div class="additional-services__tab_body">
            <div v-for="i in 4" :key="i" class="additional-services__tab_row">
              <div>
                22.01 Трансфер - а/п <br />
                <span>Красная Поляна (верхний уровень)</span>
              </div>
              <div>
                индив. машина <br />
                1-3 чел
              </div>
              <div>
                <div
                  class="flex px-8px cursor-pointer py-5px rounded-[6px] bg-[#FFF7F1]"
                >
                  <img
                    src="@/assets/images/icons/tourist.svg"
                    class="mr-10px"
                  />

                  <span class="text-blue-600 text-16px">Иванов А.Л.</span>
                </div>
              </div>
              <div>
                + 1093 ₽ <br />
                <span>за всех туристов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full rounded-10px shadow-5 font-ptsans px-32px py-28px">
      <div id="tickets" class="md:text-18px !leading-30px">
        <div class="h-2">Ваши билеты</div>
        <div class="tickets__tab my-40px">
          <div class="tickets__tab_headers">
            <div>Рейс</div>
            <div>Время</div>
            <div>Тариф</div>
            <div>Цена</div>
          </div>
          <div class="grid grid-cols-[3fr,125px]">
            <div class="tickets__tab_body">
              <div class="tickets__tab_row">
                <div class="flex items-center">
                  <img
                    src="@/assets/images/airlines-icons/red-wings.svg"
                    class="mr-16px w-30px"
                    alt="Redwings"
                  />
                  <div class="text-16px leading-25px">
                    <p>Санкт-Петербург (Пулково 1, LED) - Сочи (Адлер, AER)</p>
                    <span>Рейс: 5N545 - NORDAVIA</span>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="flex items-center xl:gap-20px gap-10px">
                    <div class="text-sm flex flex-col gap-5px">
                      <p class="xl:text-20px md:text-18px font-bold">07:40</p>
                      <span class="text-neutral-500">28.01.2024</span>
                    </div>
                    <div class="w-32px h-1px bg-black"></div>
                    <div class="text-sm flex flex-col gap-5px">
                      <p class="xl:text-20px md:text-18px font-bold">12:00</p>
                      <span class="text-neutral-500">28.01.2024</span>
                    </div>
                  </div>
                </div>
                <div class="text-16px leading-25px !pr-25px">
                  <p>Экономический класс</p>
                  <p>(SMARTLIGHT, ST)</p>
                  <span>Без багажа</span>
                </div>
              </div>
              <div class="tickets__tab_row">
                <div class="flex items-center">
                  <img
                    src="@/assets/images/airlines-icons/aeroflot.svg"
                    class="mr-16px w-30px"
                    alt="Redwings"
                  />
                  <div class="text-16px leading-25px">
                    <p>Сочи (Адлер, AER) - Санкт-Петербург (Пулково 1, LED)</p>
                    <span>Рейс: 5N545 - NORDAVIA</span>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="flex items-center xl:gap-20px gap-10px">
                    <div class="text-sm flex flex-col gap-5px">
                      <p class="xl:text-20px md:text-18px font-bold">03:17</p>
                      <span class="text-neutral-500">01.02.2024</span>
                    </div>
                    <div class="w-32px h-1px bg-black"></div>
                    <div class="text-sm flex flex-col gap-5px">
                      <p class="xl:text-20px md:text-18px font-bold">17:50</p>
                      <span class="text-neutral-500">01.02.2024</span>
                    </div>
                  </div>
                </div>
                <div class="text-16px leading-25px !pr-25px">
                  <p>Экономический класс</p>
                  <p>(SMARTLIGHT, ST)</p>
                  <span>Без багажа</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-center">
              <p class="flex">
                + 1093 ₽
                <img
                  class="ml-8px transform rotate-[-90deg]"
                  src="@/assets/images/icons/arrow-up.svg"
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>
        <div
          class="w-full h-50px flex justify-center items-center rounded-[6px] py-12px bg-red-50 text-[#FF5252] mb-40px"
        >
          <p class="leading-25px text-16px">
            Цена на билеты может измениться. Мы актуализируем данные по билетам
            через:
            <span class="ml-10px text-20px font-bold">07:40</span>
          </p>
        </div>
        <div class="w-full flex justify-between mb-40px">
          <p class="h-2 text-20px font-ptsans">
            Общая стоимость билетов: 23200,66 руб.
          </p>
          <p class="cursor-pointer text-16px text-blue-600">Условия оплаты</p>
        </div>
        <div class="pb-24px border-b !border-[#9E9E9E]">
          <BlocksButton class="w-full" filling
            >Выбрать другой билет</BlocksButton
          >
        </div>
        <div class="mt-24px">
          <p class="h-2 text-20px mb-20px font-ptsans">
            В групповой проезд/перелет включено:
          </p>
          <div class="flex">
            <img
              class="w-13px mr-8px"
              src="@/assets/images/icons/success-check.svg"
              alt=""
            />
            <p>
              cопровождение детей от вокзала (аэропорта) в МСК до лагеря и
              обратно;
            </p>
          </div>
          <div class="flex">
            <img
              class="w-13px mr-8px"
              src="@/assets/images/icons/success-check.svg"
              alt=""
            />
            <p>трансфер до лагеря от вокзала/аэропорта и обратно;</p>
          </div>
          <div class="flex">
            <img
              class="w-13px mr-8px"
              src="@/assets/images/icons/success-check.svg"
              alt=""
            />
            <p>медицинское сопровождение;</p>
          </div>
          <div class="flex">
            <img
              class="w-13px mr-8px"
              src="@/assets/images/icons/success-check.svg"
              alt=""
            />
            <p>сопровождение сотрудниками МВД (только для ЖД);</p>
          </div>
          <div class="flex">
            <img
              class="w-13px mr-8px"
              src="@/assets/images/icons/success-check.svg"
              alt=""
            />
            <p>
              горячие питание/сухпоёк - зависит от типа проезда и времени
              следования;
            </p>
          </div>
          <div class="flex">
            <img
              class="w-13px mr-8px"
              src="@/assets/images/icons/success-check.svg"
              alt=""
            />
            <p>
              сопровождение ответственными сотрудниками Мосгортура в пути
              следования поезда и перелета на самолете;
            </p>
          </div>
          <div class="flex">
            <img
              class="w-13px mr-8px"
              src="@/assets/images/icons/success-check.svg"
              alt=""
            />
            <p>
              организованное место передачи детей из/в лагерь на
              вокзале/аэропорте в МСК;
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const roomServices = ["Гардероб", "Wi-Fi", "Баня", "Бар"];
</script>

<style scoped>
#additional-services .additional-services__tab_row,
#additional-services .additional-services__tab_headers {
  @apply grid grid-cols-[2fr,1fr,1fr,1fr];
}
#tickets .tickets__tab_headers {
  @apply grid grid-cols-[1.1fr,1fr,1fr,125px];
}
#tickets .tickets__tab_row {
  @apply grid grid-cols-[1.1fr,1fr,1fr];
}

#additional-services .additional-services__tab_headers,
#tickets .tickets__tab_headers {
  @apply text-neutral-600;
}

#additional-services .additional-services__tab_row > div,
#additional-services .additional-services__tab_headers > div,
#tickets .tickets__tab_row > div,
#tickets .tickets__tab_headers > div {
  @apply py-14px px-16px;
}

#additional-services .additional-services__tab_row > div > span,
#tickets .tickets__tab_row div span {
  @apply text-neutral-500;
}
</style>