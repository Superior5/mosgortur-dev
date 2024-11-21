<template>
  <div id="check-application-status" class="container">
    <BlocksBreadCrumbs :bread-crumbs="breadCrumbs" />
    <h1 class="h-2 xl:text-30px text-20px my-30px">Проверка статуса заявки</h1>
    <div class="py-32px px-15px bg-regular-3">
      <Form :disable="isLoading" :validation-schema="schema" class="form-block">
        <div class="form-block__component">
          <label for="applicationNumber">Введите номер вашей заявки</label>
          <Field class="input-1" name="applicationNumber" id="applicationNumber" v-model="formData.applicationNumber" />
        </div>
        <div class="form-block__component">
          <label for="passport">Серия / номер паспорта</label>
          <Field class="input-1" name="passport" id="passport" v-model="formData.passport" v-maska
            data-maska="#### / ######" />
        </div>
        <BlocksButton :disabled="!(
            formData.applicationNumber ||
            (formData.passport && formData.passport.length === 15)
          ) || isLoading
          " @click="onSubmit" type="submit" class="w-full h-45px">Проверить статус</BlocksButton>
      </Form>
    </div>

    <div v-if="actStatus" class="mx-auto max-w-max mt-80px">
      <div class="flex items-center gap-20px mb-30px">
        <img :src="statusInf.icon" alt="" />
        <div class="">
          Ваш статус: <br />
          {{ statusInf.name }} № {{ actStatus.claimNumber }}
        </div>
      </div>
      <p>{{ statusInf.desc }}</p>
    </div>

    <div v-else class="font-bold text-20px mt-70px text-center">
      Если у вас остались вопросы, свяжитесь с
      <a href="#" class="text-regular-0">нами</a>
    </div>
  </div>
</template>
<script setup>
import CheckCircleOutline from "@/assets/images/icons/check-circle-outline.svg";
import LoadOutline from "@/assets/images/icons/load-outline.svg";
import SmileOutline from "@/assets/images/icons/smile-outline.svg";
import CancellingOutline from "@/assets/images/icons/cancelling-outline.svg";
import CanceledOutline from "@/assets/images/icons/canceled-outline.svg";
import MoneyBackOutline from "@/assets/images/icons/money-back-outline.svg";
import { Field, Form } from "vee-validate";
import * as yup from "yup";

const store = useToursStore();

const breadCrumbs = [
  { name: "Главная", link: "/" },
  { name: "Проверка статуса заявки", link: false },
];

const isLoading = ref(false);

const schema = yup.object({
  applicationNumber: yup.string(),
  passport: yup.string().max(15).min(15),
});

const formData = ref({
  applicationNumber: null,
  passport: null,
});

const status = ref({
  number: 4537985,
  index: 1,
});

const actStatus = ref(null)

const statuses = [
  {
    name: "Новая заявка",
    desc: "Ваша заявка заведена и получена отделом по работе с клиентами.",
    icon: CheckCircleOutline,
    key: ''
  },
  {
    name: "В процессе бронирования заявка",
    desc: "Ваша заявка отправлена на бронирование, мы ждем ответа от объекта размещения.",
    icon: LoadOutline,
    key: 'Бронируется'
  },
  {
    name: "Подтверждена заявка",
    desc: "Ваша заявка подтверждена, ура, скоро в отпуск!",
    icon: SmileOutline,
    key: 'Подтверждена'
  },
  {
    name: "Запрос на аннуляцию заявка",
    desc: "Cоздан запрос на аннуляцию, уточняем условия отмены у объекта размещения.",
    icon: CancellingOutline,
    key: 'Запрос на аннуляцию'
  },
  {
    name: "Аннулирована заявка",
    desc: "Ваша заявка отменена.",
    icon: CanceledOutline,
    key: 'Аннулирована'
  },
];

const statusInf = computed(() => {
  if (actStatus.value && actStatus.value.claimStatus) {
    const res = statuses.find(el => el.key === actStatus.value.claimStatus)
    return res || statuses[0]
  }
});

const onSubmit = async () => {
  isLoading.value = true;

  const params = {
    claimNumber: formData.value.applicationNumber,
  };

  if (formData.value.passport) {
    const serialNumber = formData.value.passport.split(" / ");
    params.idSerial = serialNumber[0];
    params.idNumber = serialNumber[1];
  }

  actStatus.value = await store.getApplicationStatus(params);

  isLoading.value = false;
};
</script>
<style scoped>
.form-block {
  @apply max-w-1100px mx-auto flex gap-20px items-end;
}

.form-block__component {
  @apply flex flex-col gap-12px w-full;
}

.form-block__component input {
  @apply bg-white;
}
</style>