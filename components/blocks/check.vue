<template>
   <div class="flex gap-17px font-ptsans h-38px" :class="{ 'opacity-50': disabled }">
      <input :disabled="disabled" type="checkbox" class="custom-checkbox" :id="keyCheck ? keyCheck : title"
         :value="check" :checked="check" @input="$emit('update:modelValue', $event.target.value)">
      <label :for="keyCheck ? keyCheck : title" class="flex gap-10px">
         <template v-if="title || svg">
            <div class="flex" v-if="svg" v-html="svg" />
            <div class="desc" v-html="title" />
         </template>
         <slot v-else />
      </label>
   </div>
</template>
<script setup>
defineProps({
   check: Boolean,
   disabled: {
      type: Boolean,
      default: false
   },
   title: String,
   svg: String,
   keyCheck: [Number, String]
})
defineEmits(['update:modelValue'])
</script>
<style scoped>
.custom-checkbox+label {
   display: inline-flex;
   align-items: center;
   height: 100%;
   line-height: 19px;
   width: 100%;
   cursor: pointer;
   user-select: none;
}

.custom-checkbox+label::before {
   content: '';
   display: inline-block;
   width: 25px;
   height: 25px;
   flex-shrink: 0;
   flex-grow: 0;
   border: 1px solid #BDBDBD;
   border-radius: 0.25em;
   margin-right: 0.5em;
   background-repeat: no-repeat;
   background-position: center center;
   background-size: 50% 50%;
}

.custom-checkbox {
   position: absolute;
   z-index: -1;
   opacity: 0;
}

.custom-checkbox:checked+label::before {
   border-color: #E65100;
   background-color: #E65100;
   background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
   border-color: #E65100;
}

/* стили для активного состояния чекбокса (при нажатии на него) */
.custom-checkbox:not(:disabled):active+label::before {
   background-color: #E65100;
   border-color: #E65100;
}

/* стили для чекбокса, находящегося в фокусе */
.custom-checkbox:focus+label::before {
   box-shadow: 0 0 0 0.2rem #e6510080;
}

/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.custom-checkbox:focus:not(:checked)+label::before {
   border-color: #E65100;
}

/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox:disabled+label::before {
   background-color: #e6510080;
}

label .desc {
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
}
</style>