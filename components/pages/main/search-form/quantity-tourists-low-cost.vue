<template>
  <div>
    <div class="flex items-center justify-between select-none">
      <div class="grid grid-cols-[repeat(3,32px)] items-center text-center">
        <div @click="decrease(toursStore.quantityTourists[0])" class="plus-minus">
          <IconsMinus />
        </div>
        <span>{{ toursStore.quantityTourists[0].quantity }}</span>
        <div @click="increase(toursStore.quantityTourists[0])" class="plus-minus">
          <IconsPlus />
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

const decrease = (qt) => {
  if (qt.quantity < 1) return;

  if (qt.edges) qt.edges.splice(qt.quantity - 1, 1);
  qt.quantity--;
};


const increase = (qt) => {
  if (qt.edges) qt.edges.push(0);
  qt.quantity++;
};
</script>

<style scoped>
.plus-minus {
  @apply h-32px cursor-pointer flex justify-center items-center;
}
</style>