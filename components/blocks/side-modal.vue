<template>
  <transition name="fade">
    <div
      v-if="show"
      @click.self="$emit('close')"
      class="bg-black/60 z-33 top-0 left-0 fixed w-screen h-screen"
    >
      <div
        class="absolute right-0 top-0 h-full w-full max-w-840px p-15px w-full bg-white rounded-[5px] text-black"
        :class="classes"
      >
        <div
          @click="$emit('close')"
          class="absolute top-15px right-15px cursor-pointer"
        >
          <img
            class="w-30px"
            src="@/assets/images/icons/close-in-circle.svg"
            alt=""
          />
        </div>
        <slot />
      </div>
    </div>
  </transition>
</template>
<script setup>
const props = defineProps({
  show: Boolean || String || Number,
  classes: {
    type: String,
    default: "",
  },
});

watchEffect(() =>
  ((v) => {
    useHead({
      htmlAttrs: {
        class: computed(() => (v ? "overflow-hidden lg:pr-17px" : "")),
      },
    });
  })(props.show)
);
</script>