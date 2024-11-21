<template>    
    <div id="touris-info" class="flex flex-col gap-y-30px w-full">
        <div class="w-full rounded-10px shadow-5 font-ptsans px-32px py-28px">
            <h2 class="h-2">Введите данные заказчика</h2>
            <div class="w-1/2 mt-40px max-w-350px">
                <p class="leading-20px mb-12px">Копировать данные из:</p>
                <BlocksDropList
                    @select="(el) => (selectedEl[i] = el)"
                    :list="list"
                    :pls="placeholder"
                    :selectedEl="selectedEl[i]"
                />
            </div>
            <div class="touris-info__tab-body mt-40px grid grid-cols-[1fr,1fr,1fr] gap-x-20px">
                <div>
                    <p>Фамилия *</p>
                    <input class="input-1 w-full" type="text">
                </div>
                <div>
                    <p>Имя *</p>
                    <input class="input-1 w-full" type="text">
                </div>
                <div>
                    <p>Отчество *</p>
                    <input class="input-1 w-full" type="text">
                </div>
            </div>
            <div class="touris-info__tab-body mt-40px grid grid-cols-[1fr,1fr,1fr] gap-x-20px">
                <div>
                    <p>Пол *</p>
                    <BlocksDropList
                    @select="(el) => (selectedGender[i] = el)"
                    :list="genderList"
                    :pls="'НЕ определился с полом'"
                    :selectedEl="selectedGender[i]"
                />
                </div>
                <div>
                    <p>Дата рождения *</p>
                    <BlocksDataPicker/>
                </div>
                <div>
                    <p>Место рождения *</p>
                    <input class="input-1 w-full" type="text">
                </div>
            </div>
            <div class="touris-info__tab-body mt-40px grid grid-cols-[1fr,1fr,1fr] gap-x-20px">
                <div>
                    <p>Гражданство *</p>
                    <input class="input-1 w-full" type="text">
                </div>
                <div>
                    <p>Серия/номер документа *</p>
                    <input class="input-1 w-full" type="text">
                </div>
                <div>
                    <p>Дата выдачи документа *</p>
                    <BlocksDataPicker/>
                </div>
            </div>
        </div>
        <div class="w-full rounded-10px shadow-5 font-ptsans px-32px py-28px">
            <h2 class="h-2">Введите данные ребенка 1</h2>
            <div class="touris-info__tab-body mt-40px grid grid-cols-[1fr,1fr,1fr] gap-x-20px">
                <div>
                    <p>Фамилия *</p>
                    <input class="input-1 w-full" type="text">
                </div>
                <div>
                    <p>Имя *</p>
                    <input class="input-1 w-full" type="text">
                </div>
                <div>
                    <p>Отчество *</p>
                    <input class="input-1 w-full" type="text">
                </div>
            </div>
            <div class="touris-info__tab-body mt-40px grid grid-cols-[1fr,1fr,1fr] gap-x-20px">
                <div>
                    <p>Пол *</p>
                    <BlocksDropList
                    @select="(el) => (['', ''][i] = el)"
                    :list='["Мужской", "Женский"]'
                    :pls="'НЕ определился с полом'"
                    :selectedEl='["", ""][i]'
                />
                </div>
                <div>
                    <p>Дата рождения *</p>
                    <BlocksDataPicker/>
                </div>
                <div>
                    <p>Место рождения *</p>
                    <input class="input-1 w-full" type="text">
                </div>
            </div>
            <div class="touris-info__tab-body mt-40px grid grid-cols-[1fr,1fr,1fr] gap-x-20px">
                <div>
                    <p>Гражданство *</p>
                    <input class="input-1 w-full" type="text">
                </div>
                <div>
                    <p>Серия/номер документа *</p>
                    <input class="input-1 w-full" type="text">
                </div>
                <div>
                    <p>Дата выдачи документа *</p>
                    <BlocksDataPicker/>
                </div>
            </div>
            <div v-if="isHidden">
                <div class="touris-info__tab-body mt-40px grid grid-cols-[1fr,1fr,1fr] gap-x-20px">
                    <div>
                        <p>Снилс *</p>
                        <input class="input-1 w-full" type="text">
                    </div>
                    <div>
                        <p>Номер сертификата *</p>
                        <input class="input-1 w-full" type="text">
                    </div>
                    <div>
                        <p>Дата выдачи сертификата *</p>
                        <BlocksDataPicker/>
                    </div>
                </div>
                <div class="touris-info__tab-body mt-40px grid grid-cols-[2fr,1fr] gap-x-20px">
                    <div>
                        <p>ФИО заявителя *</p>
                        <input class="input-1 w-full" type="text">
                    </div>
                    <div>
                        <p>СНИЛС заявителя *</p>
                        <BlocksDataPicker/>
                    </div>
                </div>
                <div class="touris-info__tab-body mt-40px grid grid-cols-[2fr,1fr]">
                    <div class="flex items-center">
                        <BlocksCheck :check="check" @input="() => check = !check" key-check="check"/>
                        <p @click="() => check = !check" class="mb-0 ml-24px cursor-pointer !text-black">Есть сопровождающий</p>
                    </div>
                    <div>
                        <BlocksButton class="h-36px w-full">Применить</BlocksButton>
                    </div>
                </div>
            </div>

            <BlocksButton @click="isHidden = !isHidden"  filling class="w-full font-normal mt-40px h-50px" :class="{'bg-gray-200 remove-cert !border-gray-200 text-black': isHidden}">
                {{
                    isHidden ? 'Удалить сертификат' : 'Добавить сертификат' 
                }}
            </BlocksButton>
        </div>
    </div>

</template>
<script setup>
const list = ref(["fred", "red", "rer"]);
const check = ref(false)
const genderList = ref(["Мужской", "Женский"]);

const isHidden = ref(false);

const selectedEl = ref(["", "", "", ""]);
const selectedGender = ref(["", ""]);
const placeholder = ref("Выбрать туриста");
</script>

<style>
    #touris-info .touris-info__tab-body div p {
        @apply leading-20px mb-12px;
    }
    .remove-cert:hover {
        @apply bg-gray-300;
    }
</style>
