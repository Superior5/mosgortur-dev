<template>
    <div @click="addProductClick" id="list-card" class="font-ptsans">
        <div class="md:(h-178px flex-row) flex-col overflow-hidden flex gap-25px">
            <div class="md:(max-w-235px min-w-180px w-1/5) relative">
                <img :src="tour.firstTourImg[0]
                    ? getTourImg(tour.Key, tour.firstTourImg[0].Name)
                    : '/noimg_285x170.webp'
                    " alt="" loading="lazy" class="object-cover rounded-[10px] w-full h-full" />
                <div
                    class="absolute w-32px h-32px flex items-center justify-center bg-white rounded-[50%] top-12px right-12px">
                    <BlocksCheckToFavorite v-if="false" class=" w-full h-full" required :check="isCompare"
                        @input="addToComapre" :key-check="'' + tour.Key + hotel.Hotel.Key" />
                </div>

            </div>
            <div class="flex md:flex-row flex-col justify-between flex-wrap items-start md:w-[calc(80%-24px)]">
                <div class="flex max-w-330px flex-col h-full items-start">
                    <div class="flex gap-15px items-center">
                        <BlocksRatingCard v-if="+hotel.Stars.Value[0]">{{ hotel.Stars.Value[0] }}</BlocksRatingCard>
                        <h6 class="list-card__title cursor-pointer rounded-[10px] px-5px" @click.stop="showHotelInfo"
                            :title="hotel.Hotel?.Value">
                            {{ hotel.Hotel?.Value }}
                        </h6>
                    </div>
                    <blocks-blue-button @click.stop="showTourInfo"
                        class="list-card__geo w-auto flex flex-col items-start bg-transparent !text-regular-1 !mb-5px"
                        :title="tour.Name">
                        <span class="inline bg-rarely-4 leading-30px line-clamp-1"><img class="inline"
                                src="@/assets/images/icons/geo-tag.svg" alt="" />
                            {{ tour.Name }}</span>
                    </blocks-blue-button>
                    <div class="hotel-types text-15px text-rarely-1">
                        <div v-for="i in filterHotelTypes" :key="i.Value" :id="i.Value"
                            class="flex items-center gap-6px">
                            <img src="@/assets/images/icons/check.svg" alt="" /> {{ i.Value }}
                        </div>
                        <div v-if="hotel.HotelTypes.length > 3 && isMobile()">
                            + Ещё {{ hotel.HotelTypes.length - 3 }}
                        </div>
                    </div>
                </div>
                <div class="list-card__footer">
                    <div class="font-mulish text-black text-18px leading-22px font-bold">
                        {{ route.name == "tours-low-cost" ? 'цена' : 'от' }} {{ priceFormatter(tour.Cost) }} руб.
                    </div>
                    <div>
                        {{ ddMm(tour.StartDate) }} - {{ finishDate }} ({{
                            tour.DurationInNight
                        }}
                        ночей)
                    </div>
                    <div>
                        <span v-if="hotel.HotelDetails[0].AccomodationType.AdultCount">
                            {{ hotel.HotelDetails[0].AccomodationType.AdultCount }}
                            {{ tour.Types.includes(11) || tour.Types.includes(376) ? "ребенок" : "взрослых" }}
                        </span>
                        <span v-if="hotel.HotelDetails[0].AccomodationType.ChildCount">
                            , {{ hotel.HotelDetails[0].AccomodationType.ChildCount }} ребенок
                        </span>
                    </div>
                </div>
                <div class="flex flex-col gap-22px children:(h-48px w-198px)">
                    <BlocksButton>
                        <a class="block w-full h-full" @click.stop="addProductOfBasket" target="_blank" :href="`https://online.mosgortur.ru/basket#/Basket?departureCities=${tour.CityDepature.Key
                            }&destination=1_${tour.CountryId}&tour=${tour.Key
                            }&date=${dateForBasket}&duration=${tour.Duration
                            }&${createHS()}&adultCount=${hotel.HotelDetails[0].AccomodationType.AdultCount
                            }&hotelQuota=5&aviaQuota=5&busTransferQuota=5&trainTransferQuota=5&serviceDescriptions=${tour.MinCostServicesComposition[0].Key.TemplateId
                            }_${tour.MinCostServicesComposition[0].Key.SettingId}_${tour.MinCostServicesComposition[0].Key.PatternId
                            }_${hotel.SvKey}_${tour.MinCostServicesComposition[0].Value.Code
                            }_${hotel.HotelDetails[0].HotelRoom}_${hotel.HotelDetails[0].Pansion.Key
                            }_${hotel.Country.Key}_${hotel.City.Key}_${hotel.PacketId}_${hotel.HotelDetails[0].PartnerId
                            }_${hotel.Day}_${hotel.DurationInNight}&currency=RUB`">
                            Купить
                        </a>
                    </BlocksButton>
                    <BlocksButton filling @click="deleteFromFavorite">
                        Удалить
                    </BlocksButton>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div v-if="visibleCosts" class="mt-30px ">
                <div v-for="costs in hotel.HotelDetails" :key="costs.PartnerId + costs.HotelRoom"
                    class="variants-item justify-between font-ptsans text-15px items-start gap-30px text-13px flex mb-19px">
                    {{ console.log(hotel.HotelDetails[0].AccomodationType.Value) }}
                    <div class="flex gap-15px">
                        <IconsAttention class="cursor-pointer" />
                        <div>
                            {{ hotel.HotelDetails[0].AccomodationType.Value }}
                        </div>
                    </div>
                    <div class="">
                        {{ hotel.HotelDetails[0].Pansion.Value }}
                    </div>
                    <div>проезд жд</div>
                    <div>
                        {{ hotel.HotelDetails[0].RoomCategory.Value }}
                    </div>
                    <BlocksPrice filling>
                        <a @click.stop="addProductOfBasket(tour.Cost + costs.Cost)" target="_blank" :href="`https://online.mosgortur.ru/basket#/Basket?departureCities=${tour.CityDepature.Key
                            }&destination=1_${tour.CountryId}&tour=${tour.Key
                            }&date=${dateForBasket}&duration=${tour.Duration}&${createHS(
                                costs.PartnerId
                            )}&adultCount=${costs.AccomodationType.AdultCount
                            }&hotelQuota=5&aviaQuota=5&busTransferQuota=5&trainTransferQuota=5&serviceDescriptions=${tour.MinCostServicesComposition[0].Key.TemplateId
                            }_${tour.MinCostServicesComposition[0].Key.SettingId}_${tour.MinCostServicesComposition[0].Key.PatternId
                            }_${hotel.SvKey}_${tour.MinCostServicesComposition[0].Value.Code
                            }_${costs.HotelRoom}_${costs.Pansion.Key}_${hotel.Country.Key}_${hotel.City.Key
                            }_${hotel.PacketId}_${costs.PartnerId}_${hotel.Day}_${hotel.DurationInNight
                            }&currency=RUB`"
                            class="text-14px flex whitespace-nowrap cursor-pointer items-center gap-10px font-bold py-6px px-8px bg-base-1 text-base-0">
                            {{ priceFormatter(tour.Cost + costs.Cost) }} руб.
                        </a>
                    </BlocksPrice>
                </div>
            </div>
        </transition>
    </div>
</template>
<script setup>

const route = useRoute();
const toursStore = useToursStore();
const emit = defineEmits(["showHotelInfo", "showTourInfo"]);

const props = defineProps({
    tour: Object,
    hotel: Object,
    visibleCosts: Boolean,
    dateForBasket: String,
    position: Number,
});

const deleteFromFavorite = () => {
    const tourIndex = toursStore.toursCompare.findIndex(el => {
        return '' + el.Key + el.Services.find(el => el.Hotel).Hotel.Key === '' + props.tour.Key + props.hotel.Hotel.Key
    })

    toursStore.toursCompare.splice(tourIndex, 1)
    if (ym) ym(90662828, 'reachGoal', 'removedToFavorites')
    localStorage.setItem("toursCompare", JSON.stringify(toursStore.toursCompare));
}
const addProductOfBasket = (price) => {
    if (process.client)
        window.dataLayer.push({
            ecommerce: {
                currencyCode: "RUB",
                add: {
                    products: [
                        {
                            id: props.tour.Key,
                            name: props.tour.Name,
                            price: price ? price : props.tour.Cost,
                            brand: props.tour.Services.find((el) => el.Hotel).Hotel.Value,
                            category: props.tour.Types.includes(11) ? "лагеря" : "спец предложения",
                            position: props.position + 1,
                        },
                    ],
                },
            },
        });
};

const addProductClick = () => {
    if (process.client)
        window.dataLayer.push({
            ecommerce: {
                currencyCode: "RUB",
                click: {
                    products: [
                        {
                            id: props.tour.Key,
                            name: props.tour.Name,
                            price: props.tour.Cost,
                            brand: props.tour.Services.find((el) => el.Hotel).Hotel.Value,
                            category: props.tour.Types.includes(11) ? "лагеря" : "спец предложения",
                            position: props.position + 1,
                        },
                    ],
                },
            },
        });
};

const addToComapre = () => {
    const tourIndex = toursStore.toursCompare.findIndex(el => {
        return '' + el.Key + el.Services.find(el => el.Hotel).Hotel.Key === '' + props.tour.Key + props.hotel.Hotel.Key
    })
    if (tourIndex < 0) {
        toursStore.toursCompare.push(props.tour)
    } else {
        toursStore.toursCompare.splice(tourIndex, 1)
        localStorage.setItem("toursCompare", JSON.stringify(toursStore.toursCompare));
    }
}



const isCompare = computed(() => toursStore.toursCompare.some(el => {
    return '' + el.Key + el.Services.find(el => el.Hotel).Hotel.Key === '' + props.tour.Key + props.hotel.Hotel.Key
}))

const ymP = computed(() => route.name == "kids" ? ['kids_open-tour-description', 'kids_open-tour-info'] : route.name == "tours-low-cost" ? ['special-offer_open-tour-description', 'special-offer_open-tour-info'] : null)

const filterHotelTypes = computed(() => {
    return isMobile()
        ? props.hotel.HotelTypes.slice(0, 3)
        : props.hotel.HotelTypes.slice(0, 10);
});

const showTourInfo = async () => {
    try {
        if (ymP.value) ym(90662828, 'reachGoal', ymP.value[0])
    } catch (error) {
        console.log(error);
    }

    emit("showTourInfo");
};

const showHotelInfo = async () => {
    if (!props.tour.imagesSlide)
        await toursStore.getHotelImages({ tour: props.tour });

    try {
        if (ymP.value) ym(90662828, 'reachGoal', ymP.value[1])
    } catch (error) {
        console.log(error);
    }
    emit("showHotelInfo");
};

const finishDate = ddMm(
    new Date(props.tour.StartDate).setDate(
        new Date(props.tour.StartDate).getDate() + props.tour.DurationInNight
    )
);

const createHS = (el) => {
    let hotelScheme = "hotelScheme=";

    props.tour.MinCostServicesComposition.forEach(function (t) {
        if (3 === t.Value.ServiceType) {
            var i = t.Key.TemplateId,
                a = t.Value.DurationInNight,
                r = t.Value.Code,
                s = t.Value.PacketId,
                n = el ? el : t.Value.PartnerId,
                o = 0,
                c = props.tour.Duration;
            hotelScheme += ""
                .concat(i, "_")
                .concat(a, "_")
                .concat(r, "_")
                .concat(s, "_")
                .concat(n, "_")
                .concat(o, "_")
                .concat(c, "");
        }
    });

    return hotelScheme;
};
</script>

<style>
#list-card .hotel-types {
    @apply flex gap-y-12px content-start gap-x-10px flex-wrap md:overflow-auto pr-7px flex-grow-[1];
}

#list-card .variants-item:last-child {
    @apply mb-0px;
}

#list-card .hotel-types::-webkit-scrollbar {
    @apply w-4px;
}

#list-card .place-block:hover+.free-place-block {
    top: 31px;
}

#list-card .hotel-types::-webkit-scrollbar-thumb {
    @apply bg-rarely-3 rounded-[10px];
}

#list-card .toggle-bar {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    box-shadow: 0px 10px 10px -1px rgba(0, 0, 0, 0.05);
}

#list-card .list-card__footer {
    @apply grid grid-cols-2 w-full md:(flex w-min max-w-300px) children:w-max xl:text-16px text-sm justify-between flex-wrap gap-y-16px gap-x-5px text-rarely-3 items-center;
    justify-items: center;
}

#list-card .list-card__title {
    @apply font-mulish font-extrabold text-lg;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

#list-card .list-card__geo {
    @apply gap-6px text-sm py-3px text-sm px-10px mt-10px mb-14px;
}

#list-card .list-card__geo span {
    border-radius: 60px;
    padding: 3px 10px;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
}

#list-card .carousel__viewport,
#list-card .carousel__track {
    height: 100%;
}
</style>