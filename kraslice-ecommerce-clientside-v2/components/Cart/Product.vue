<template>
    <li class="flex py-6 sm:py-10">
        <div class="flex-shrink-0">
            <img
                :src="`http://localhost:3000/api/v1/public/${cartItem.frontImage}`"
                alt="Front of men&#039;s Basic Tee in sienna."
                class="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
            />
        </div>

        <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div
                class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0"
            >
                <div>
                    <div class="flex justify-between">
                        <h3 class="text-sm">
                            <NuxtLink
                                :to="`/vajicka/${cartItem.slug}`"
                                class="font-medium text-gray-700 hover:text-gray-800"
                                >{{ cartItem.name }}</NuxtLink
                            >
                        </h3>
                    </div>
                    <div class="mt-1 flex text-sm">
                        <p class="text-gray-500">{{ eggTypes }}</p>

                        <p
                            class="ml-4 border-l border-gray-200 pl-4 text-gray-500"
                        >
                            {{ colors }}
                        </p>
                    </div>
                    <p class="mt-1 text-sm font-medium text-gray-900">
                        {{ cartItem.price }} CZK
                    </p>
                </div>

                <div class="mt-4 sm:mt-0 sm:pr-9">
                    <select
                        id="quantity-0"
                        name="quantity-0"
                        class="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:ring-0 sm:text-sm"
                        @change="changeQuantity($event as Event)"
                        v-model="quantity"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <div class="absolute top-0 right-0">
                        <button
                            type="button"
                            class="-m-2 inline-flex p-2 text-gray-400 hover:text-rose-500"
                            @click="removeFromCart(cartItem)"
                        >
                            <svg
                                class="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex my-6 items-center" v-if="cartItem.stock === 0">
                <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="347.523px"
                    height="347.523px"
                    viewBox="0 0 347.523 347.523"
                    style="enable-background: new 0 0 347.523 347.523"
                    xml:space="preserve"
                    class="h-4 w-4 text-gray-500 mr-2"
                >
                    <g>
                        <g>
                            <path
                                d="M108.674,196.125c-2.857-0.402-5.777-0.592-8.746-0.534c-14.267,0.278-36.342,6.092-60.493,32.207
			c-19.171,20.729-19.954,42.635-20.644,61.961c-0.66,18.474-1.181,33.065-16.507,43.727c-1.506,1.049-2.318,2.837-2.113,4.661
			c0.128,1.147,0.645,2.191,1.434,2.98c0.466,0.466,1.026,0.843,1.658,1.099c28.523,11.553,77.316,5.895,117.044-33.833
			c18.043-18.044,28.812-37.145,31.14-55.233c0.607-4.719,0.618-9.323,0.091-13.763L108.674,196.125z M100.915,229.382
			c-1.553,2.174-3.859,3.612-6.494,4.052c-19.209,3.202-25.884,15.953-26.159,16.494c-1.627,3.387-5.167,5.611-8.989,5.611
			c-0.337,0-0.676-0.017-1.015-0.052c-1.149-0.117-2.264-0.432-3.313-0.936c-4.97-2.391-7.069-8.376-4.681-13.347
			c0.442-0.918,11.153-22.546,40.869-27.5c0.546-0.09,1.1-0.136,1.647-0.136c4.908,0,9.055,3.516,9.861,8.357
			C103.08,224.559,102.467,227.207,100.915,229.382z"
                            />
                            <path
                                d="M340.587,6.796c-8.615-8.614-22.425-9.1-31.624-1.112c-5.782,5.021-141.818,123.166-160.166,141.513
			c-9.175,9.175-20.946,24.898-31.124,39.428l42.864,43.271c14.546-10.18,30.345-22.003,39.65-31.308
			C218.749,180.024,336.69,44.193,341.703,38.42C349.688,29.22,349.201,15.41,340.587,6.796z"
                            />
                        </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                </svg>

                <p class="text-sm font-medium text-gray-900">Na objednávku</p>
            </div>
            <div class="flex items-center" v-if="cartItem.stock > 0">
                <svg
                    enable-background="new 0 0 24 24"
                    height="512"
                    viewBox="0 0 24 24"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-500 mr-2"
                >
                    <path
                        d="m23.685 8.139-11.25-8c-.26-.185-.609-.185-.869 0l-11.25 8c-.198.14-.316.368-.316.611v3.5c0 .281.157.538.406.667.25.128.549.107.778-.055l.816-.581v10.719c0 .552.448 1 1 1h2v-12h14v12h2c.552 0 1-.448 1-1v-10.719l.815.58c.13.092.282.139.435.139.118 0 .235-.028.344-.083.249-.129.406-.386.406-.667v-3.5c0-.243-.118-.471-.315-.611z"
                    />
                    <path d="m6.5 21.5h11v2.5h-11z" />
                    <path d="m6.5 17.5h11v2.5h-11z" />
                    <path d="m6.5 13.5h11v2.5h-11z" />
                </svg>

                <p class="text-sm font-medium text-gray-900">
                    Skladem:
                    <span class="text-gray-500">
                        {{ stockSize }}
                    </span>
                </p>
            </div>
        </div>
    </li>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { IEggData } from '~~/interfaces/vajicka';
import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore();

interface IEggDataExtended extends IEggData {
    quantity: number;
}

interface ICartItem {
    cartItem: IEggDataExtended;
}

const props = defineProps<ICartItem>();

const removeFromCart = (cartItem: IEggDataExtended) => {
    cartStore.removeFromCart(cartItem);
};

const eggTypes = computed(() => {
    const types = [];
    for (const type of props.cartItem?.types) {
        switch (type) {
            case 'goose':
                types.push('husí');
                break;
            case 'chicken':
                types.push('slepičí');
                break;
            case 'ostrich':
                types.push('pštrosí');
                break;
            case 'quail':
                types.push('křepelčí');
                break;
        }
    }
    return types.join(', ');
});

const colors = computed(() => {
    const colors = [];
    for (const color of props.cartItem?.colors) {
        switch (color) {
            case 'white':
                colors.push('bílá');
                break;
            case 'black':
                colors.push('černá');
                break;
            case 'grey':
                colors.push('šedá');
                break;
            case 'brown':
                colors.push('hnědá');
                break;
            case 'pink':
                colors.push('růžová');
                break;
            case 'purple':
                colors.push('fialová');
                break;
            case 'turquoise':
                colors.push('tyrkysová');
                break;
            case 'blue':
                colors.push('modrá');
                break;
            case 'green':
                colors.push('zelená');
                break;
            case 'red':
                colors.push('červená');
                break;
            case 'orange':
                colors.push('oranžová');
                break;
            case 'yellow':
                colors.push('žlutá');
                break;
        }
    }
    return colors.join(', ');
});

const stockSize = computed(() => {
    switch (props.cartItem?.stock) {
        case 1:
            return `1 kus`;
        case 2:
        case 3:
        case 4:
            return `${props.cartItem?.stock} kusy`;
        default:
            return `${props.cartItem?.stock} kusů`;
    }
});

const quantity = ref(props.cartItem?.quantity);

const changeQuantity = (event: Event) => {
    const extendedEvent = event as Event & {
        target: HTMLSelectElement;
    };

    if (event.target) {
        cartStore.changeQuantity(
            props.cartItem,
            Number(extendedEvent.target.value)
        );
    }
};
</script>
