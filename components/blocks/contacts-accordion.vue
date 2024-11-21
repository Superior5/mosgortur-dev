<template>
    <div v-for="(contact, i) in contacts"
          :key="contact.title">
          <div>
            <div class="border-b border-rarely-6 last:border-none">
                <div class="relative cursor-pointer" @click="actItem = actItem === i ? null : i" >
                    <h2 class="h-2 max-w-310px py-30px pr-20px">{{ contact.title }}</h2>
                    <div class="absolute h-full top-0 right-0 flex items-center">
                        <IconsMinus v-if="actItem === i" />
                        <IconsPlus v-else />
                    </div>
                </div>
                <transition name="fade">
                    <div class="mt-[-20px]" v-if="actItem === i">
                        <div class="max-w-310px mb-24px" v-if="contact.disc">{{ contact.disc }}</div>
                        <div class="flex flex-col gap-24px">
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
                            <div class="contacts__block-section">
                                <h6>E-mail</h6>
                                <a :href="'mailto:' + contact.email">{{ contact.email }}</a>
                            </div>
                            <div class="contacts__block-section mb-10px">
                                <h6>График работы</h6>
                                <div v-html="contact.workSchedules" />
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
          </div>
    </div>
    <h2 class="h-2 text-red-700">{{ actItem }}</h2>
</template>

<script setup>
const actItem = ref(null)
const props = defineProps({
  contacts: Array,
})


</script>

<style scoped>

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