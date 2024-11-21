<template>
  <div>
    <v-tooltip
              max-width="230px"
              class="ml-100px"
              v-model="isShowTooltip"
              :open-on-hover="false"
              location="top"
            >
                  <template  v-slot:activator="{ props }">
                    <div v-bind="props"></div>
                  </template>
              <span>В этой вкладке размещены предложения только для троих человек, если вы планируете отправиться в путешествие, в составе более 3х человек, пожалуйста, выберите предложение в вкладке "Туры"</span>
    </v-tooltip>
    <div @click="$emit('open')" class="input-value-new">
      <span> Взрослые {{ toursStore.quantityTourists[0].quantity }} </span>
      <span v-if="toursStore.quantityTourists[1].quantity">
        {{ "Дети " + toursStore.quantityTourists[1].quantity }}</span>
      <img class="w-15px right-12px absolute" src="@/assets/images/icons/arrow.svg" alt="" />
    </div>

    <div v-if="show" class="bg-white z-33 overflow-auto max-h-300px w-full min-w-300px absolute top-0 rounded-[5px]">

      <div v-for="qt in toursStore.quantityTourists" :key="qt.tourist"
        class="flex items-center justify-between select-none p-15px border-b last:border-none">
        <div class="">{{ qt.tourist }}</div>
        <div class="grid grid-cols-[repeat(3,32px)] items-center text-center">
          <div @click="decrease(qt)" class="plus-minus">
            <IconsMinus />
          </div>
          <span>{{ qt.quantity }}</span>
          <div @click="increase(qt)" class="plus-minus">
            <IconsPlus />
          </div>
        </div>
      </div>
      <div v-for="(kid, i) in toursStore.quantityTourists[1].edges" :key="kid"
        class="flex items-center justify-between select-none p-15px border-b last:border-none">
        <div class="">Возраст {{ i + 1 }}-го реб.</div>
        <div class="grid grid-cols-[repeat(3,32px)] items-center text-center">
          <div @click="
            toursStore.quantityTourists[1].edges[i] > 0
              ? toursStore.quantityTourists[1].edges[i]--
              : null
            " class="plus-minus">
            <IconsMinus />
          </div>
          <span>{{ kid }}</span>
          <div @click="toursStore.quantityTourists[1].edges[i] < 17 ? toursStore.quantityTourists[1].edges[i]++ : null"
            class="plus-minus">
            <IconsPlus />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const toursStore = useToursStore();
const props = defineProps({
  show: Boolean,
});
const isShowTooltip = ref(false)
onMounted(() => {
  toursStore.quantityTourists[0].quantity = 2
})

const decrease = (qt) => {
  if (qt.quantity < 1) return;
  if (qt.edges) qt.edges.splice(qt.quantity - 1, 1);
  qt.quantity--;
};

const increase = (qt) => {
  console.log(toursStore.quantityTourists[0].quantity);
  console.log(qt);
  
  if(qt.tourist == 'Взрослые' && qt.quantity == 17) {
    if(isShowTooltip.value == true) {
      return
    }
    isShowTooltip.value = true
    setTimeout(()=> {
      isShowTooltip.value = false
    }, 5000)
  } 
  else if(qt.tourist == 'Дети' && qt.quantity == 6) {
    if(isShowTooltip.value == true) {
      return
    }
    isShowTooltip.value = true
    setTimeout(()=> {
      isShowTooltip.value = false
    }, 5000)
  } else {
    if (qt.edges) qt.edges.push(0);
    qt.quantity++;
  }
};
</script>

<style>
.plus-minus {
  @apply h-32px cursor-pointer bg-regular-0 rounded-[50%] flex justify-center items-center text-white;
}

</style>