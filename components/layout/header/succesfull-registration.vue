<template>
    <BlocksModal @close="$emit('close')" classes="p-56px w-auto">
        <div class="flex flex-col md:gap-24px gap-18px max-w-330px">
            <div class="flex justify-center">
                <img class="md:h-auto h-[67px]" src="@/assets/images/successful-payment/ok-hand.png"
                    alt="Оплата прошла успешно">
            </div>
            <div class="md:text-24px text-22px text-center font-mulish font-bold leading-30px">
                <p>Поздравляем!</p>
                <p>Вы успешно зарегистрировались</p>
            </div>
            <div class="md:text-16px text-13px  text-center leading-25px">
                <p class="text-black/90">
                    Осталось подтвердить адрес электронной почты!
                </p>
            </div>
        </div>
    </BlocksModal>
</template>