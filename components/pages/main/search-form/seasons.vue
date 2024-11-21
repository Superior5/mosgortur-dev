<template>
   <div class="relative flex">
      <div class="input-value w-full" @click="$emit('open')">
         <template v-if="toursStore.selectedMonths.length">
            <span v-for="item in value" :key="item"  :title="item">
            {{ item }}
         </span>
         </template>
         <template v-else>Выберите сезон</template>
      </div>
      <div v-if="show && toursStore.tourDates.length"
         class="bg-white absolute z-33 min-w-200px w-full rounded-5px top-0 max-h-300px overflow-auto shadow-0 px-20px py-15px flex flex-col gap-5px">
         <div v-for="(months, season) in dateSeasons" :key="season">
            <BlocksCheck :check="checkSelectedMonths(months, season)" @input="toggleSeason(months, season)"
               :key-check="season">
               <span class="font-bold cursor-pointer hover:opacity-50">
                  {{ season }}
               </span>
            </BlocksCheck>

            <div v-for="month in months" :key="month" class="pl-10px">
               <BlocksCheck :disabled="checkSelectedMonths(months, season)"
                  :check="checkSelectedMonths([month], season)" @input="toggleMonth(month, season)"
                  :key-check="monthsName[month - 1]">
                  <span class="cursor-pointer font-bold text-black/60 whitespace-nowrap hover:text-black/100">{{
                     monthsName[month - 1] }} ' {{ season.split(" '")[1] }}</span>
               </BlocksCheck>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
const toursStore = useToursStore();
const emit = defineEmits(["close", "open"]);
const props = defineProps({ show: Boolean });

const seasons = {
   Весна: [3, 4, 5],
   Лето: [6, 7, 8],
   Осень: [9, 10, 11],
   Зима: [12, 1, 2],
};

const value = computed(() => {
   return toursStore.selectedMonths.reduce((acc, month) => {
      const [m, y] = month.split('-');
      
      for (const key in seasons) {
         if (seasons[key].includes(+m) && !acc.includes(key + ' `' + y)) acc.push(key + ' `' + y);
      }

      return acc
   }, []);
})

const checkSelectedMonths = (months, season) => months.every((month) => toursStore.selectedMonths.includes(month + '-' +
   season.split(" '")[1]));
const toggleSeason = (months, season) => {
   const year = season.split(" '")[1];
   if (checkSelectedMonths(months, season)) {
      toursStore.selectedMonths = toursStore.selectedMonths.filter((month) => !months.map(month => month + '-' + year).includes(month));
   } else {
      toursStore.selectedMonths = [...toursStore.selectedMonths, ...months.map((month) => month + '-' + year)];
   }
};

const toggleMonth = (month, season) => {
   const year = season.split(" '")[1];
   const index = toursStore.selectedMonths.indexOf(month + '-' + year);
   if (index > -1) toursStore.selectedMonths.splice(index, 1);
   else toursStore.selectedMonths.push(month + '-' + year);
};

const monthsName = [
   "Январь",
   "Февраль",
   "Март",
   "Апрель",
   "Май",
   "Июнь",
   "Июль",
   "Август",
   "Сентябрь",
   "Октябрь",
   "Ноябрь",
   "Декабрь",
];

const lastDateOfMonth = computed(() =>
   toursStore.tourDates.reduce((obj, el) => {
      obj[el.split(".")[1]] = el;
      return obj;
   }, {})
);

const unrealMonth = computed(() => {
   return Object.keys(lastDateOfMonth.value).reduce((unrealMonth, key) => {
      const lastDayOfMonth =
         new Date(new Date().getFullYear(), key - 1, 0).getDate() - 5;

      if (lastDateOfMonth.value[key].split(".")[0] > lastDayOfMonth) {
         const nextMonth = +key + 1;
         const isMonth = !toursStore.tourDates.some(
            (el) => +el.split(".")[1] === nextMonth
         );

         if (isMonth) return nextMonth;
      }
   }, null);
});

watch(() => props.show, (v) => {
   if (!v) {
      selectMonths()
   }
});

const dateSeasons = computed(() => {
   let dates = [];

   if (unrealMonth.value) {

      console.log(unrealMonth.value);
   
      toursStore.tourDates.forEach((el) => {
         dates.push(el);
         if (+el.split(".")[1] + 1 === unrealMonth.value && Object.values(lastDateOfMonth.value).includes(el))
            dates.push(`01.${unrealMonth.value > 12 ? '01' : unrealMonth.value}.${+el.split(".")[2] + (unrealMonth.value > 12 ? 1 : 0 )}`);
      });
      console.log(dates);
      
   } else {
      dates = toursStore.tourDates;
   }

   return dates.reduce((obj, el, i) => {
      const month = +el.split(".")[1],
         shortYear = el.split(".")[2].substr(2, 2);

      for (const key in seasons) {
         if (seasons[key].includes(month)) {
            const keyY = `${key} '${shortYear}`;
            if (!obj[keyY]) obj[keyY] = [month];
            if (!obj[keyY].includes(month)) obj[keyY].push(month);
            return obj;
         }
      }
   }, {});
});

const selectMonths = () => {
   toursStore.selectedTourDates = [];
   console.log('asdfasd');

   const minMonthYear = toursStore.selectedMonths.reduce((acc, el) => {
      const date = el.split("-").map(el => +el);
      if (!acc.length || date[1] < acc[1] || (date[1] == acc[1] && date[0] < acc[0])) return date;
      return acc
   }, [])

   
   const lastDayOfMonth = new Date(new Date().getFullYear(), minMonthYear[0] - 1, 0).getDate() - 3;

   for (let i = 0; i < toursStore.tourDates.length; i++) {
      const elA = toursStore.tourDates[i].split(".");
      toursStore.selectedMonths.forEach((el) => {
         if (elA[2].substr(2, 2) === el.split("-")[1] && +el.split("-")[0] === +elA[1]) {
            toursStore.selectedTourDates.push(toursStore.tourDates[i]);
         }
      })

      if (minMonthYear[1] == elA[2].substr(2, 2) && minMonthYear[0] - 1 === +elA[1] && +elA[0] > lastDayOfMonth) {
         toursStore.selectedTourDates.push(toursStore.tourDates[i]);
      }
   }
};

// const selectSeason = () => {
//    toursStore.selectedTourDates = [];

//    if (params[0] === unrealMonth.value) {
//       const lastDayOfMonth = new Date(new Date().getFullYear(), (unrealMonth.value - 1) - 1, 0).getDate() - 5;
//       toursStore.selectedTourDates = toursStore.tourDates.filter(el => +el.split(".")[1] + 1 === unrealMonth.value
//          && +el.split(".")[0] > lastDayOfMonth);
//       toursStore.selectedSeason = `${monthsName[unrealMonth.value - 1]} '${params[1]}`;
//    } else {
//       let currentMonths;
//       let currentYear;

//       if (Array.isArray(params)) {
//          currentMonths = [params[0]];
//          currentYear = params[1];
//          toursStore.selectedSeason = `${monthsName[currentMonths[0] - 1]
//             } '${currentYear}`;
//       } else {
//          const seasonY = params.split(` '`);
//          currentMonths = seasons[seasonY[0]];
//          currentYear = seasonY[1];
//          toursStore.selectedSeason = params;
//       }

//       const lastDayOfMonth =
//          new Date(new Date().getFullYear(), currentMonths[0] - 1, 0).getDate() - 3;

//       for (let i = 0; i < toursStore.tourDates.length; i++) {
//          const elA = toursStore.tourDates[i].split("."); if
//             (elA[2].substr(2, 2) === currentYear) {
//             if (currentMonths.includes(+elA[1]))
//                toursStore.selectedTourDates.push(toursStore.tourDates[i]); if (currentMonths[0] - 1 === +elA[1] &&
//                   +elA[0] > lastDayOfMonth)
//                toursStore.selectedTourDates.push(toursStore.tourDates[i]);
//          }
//       }
//    }

//    setTimeout(() => {
//       emit("close");
//    });
// };
</script>