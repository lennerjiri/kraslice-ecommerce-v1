<template>
    <div class="bg-white">
        <div
            class="mx-auto max-w-2xl py-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                <!-- Image gallery -->
                <div class="flex flex-col-reverse">
                    <!-- Image selector -->
                    <div
                        class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none"
                    >
                        <div
                            class="grid grid-cols-4 gap-6"
                            aria-orientation="horizontal"
                            role="tablist"
                        >
                            <button
                                id="tabs-1-tab-1"
                                class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50"
                                type="button"
                                v-for="image in eggData.images"
                                @click="currentImage = image"
                            >
                                <span
                                    class="absolute inset-0 overflow-hidden rounded-md"
                                >
                                    <img
                                        alt=""
                                        class="h-full w-full object-cover object-center"
                                        :src="`http://localhost:3000/api/v1/public/${image}`"
                                    />
                                </span>
                                <span
                                    class="pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                                    :class="{
                                        'ring-rose-600': currentImage === image,
                                        'ring-transparent':
                                            currentImage !== image,
                                    }"
                                ></span>
                            </button>
                            <!-- More images... -->
                        </div>
                    </div>

                    <div class="aspect-w-1 aspect-h-1 w-full">
                        <!-- Tab panel, show/hide based on tab state. -->
                        <div
                            id="tabs-1-panel-1"
                            aria-labelledby="tabs-1-tab-1"
                            role="tabpanel"
                            tabindex="0"
                        >
                            <img
                                :src="`http://localhost:3000/api/v1/public/${currentImage}`"
                                alt="Angled front view with bag zipped and handles upright."
                                class="h-full w-full object-cover object-center sm:rounded-lg"
                            />
                        </div>

                        <!-- More images... -->
                    </div>
                </div>

                <!-- Product info -->
                <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                    <h1
                        class="text-3xl font-semibold tracking-tight text-gray-900"
                    >
                        {{ eggData.name }}
                    </h1>

                    <div class="mt-6">
                        <div class="space-y-6 text-base text-gray-700">
                            <p>
                                {{ eggData.description }}
                            </p>
                        </div>
                    </div>

                    <div class="flex my-6 items-center">
                        <svg
                            id="Layer_1"
                            enable-background="new 0 0 124 124"
                            height="512"
                            viewBox="0 0 124 124"
                            width="512"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 fill-rose-500 mr-2"
                        >
                            <path
                                d="m91.621 26.928c-9.746-16.425-22.196-26.928-31.859-26.928-.14 0-.279.002-.417.007-9.354.298-20.52 10.589-29.139 26.858-11.972 22.599-18.013 54.85-4.52 75.96.528.826 13.182 20.248 34.423 21.146 17.337.714 32.677-11.427 39.572-23.037 12.39-20.861 4.879-52.2-8.06-74.006zm-38.478-12.419c-3.431 3.169-6.387 6.796-8.787 10.778-1.974 3.277-3.566 6.79-4.73 10.441-.354 1.109-1.58 1.742-2.694 1.39-1.129-.358-1.753-1.56-1.395-2.686 1.265-3.967 2.995-7.785 5.141-11.348 2.608-4.328 5.82-8.268 9.547-11.712.87-.804 2.226-.751 3.032.114.806.867.754 2.22-.114 3.023z"
                            />
                        </svg>
                        <p>
                            Druh vajíček:
                            <span class="text-rose-600">
                                {{ eggTypes }}
                            </span>
                        </p>
                    </div>
                    <div class="flex my-6 items-center">
                        <svg
                            id="Layer_1"
                            enable-background="new 0 0 468 468"
                            height="512"
                            viewBox="0 0 468 468"
                            width="512"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 fill-rose-500 mr-2"
                        >
                            <g>
                                <path
                                    d="m0 191.099 168.936 96.721 43.888-55.066-177.885-93.925z"
                                />
                                <path
                                    d="m254.703 232.549 44.051 55.272 169.246-96.899-35.414-55.907z"
                                />
                                <path
                                    d="m60.576 121.376 173.147 91.423 173.395-95.073-173.018-81.726z"
                                />
                                <path
                                    d="m44.112 339.051 176.036 92.949v-164.475l-37.114 46.567c-4.212 5.286-11.647 6.709-17.513 3.35l-121.409-69.51z"
                                />
                                <path
                                    d="m247.542 267.525v164.049l176.036-96.656v-86.987l-121.409 69.51c-5.865 3.357-13.301 1.935-17.512-3.35z"
                                />
                            </g>
                        </svg>
                        <p>
                            V balení:
                            <span class="text-rose-600">
                                {{ packageSize }}
                            </span>
                        </p>
                    </div>
                    <div
                        class="flex my-6 items-center"
                        v-if="eggData.stock === 0"
                    >
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
                            class="h-6 w-6 fill-rose-500 mr-2"
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

                        <p>Na objednávku</p>
                    </div>
                    <div
                        class="flex my-6 items-center"
                        v-if="eggData.stock > 0"
                    >
                        <svg
                            enable-background="new 0 0 24 24"
                            height="512"
                            viewBox="0 0 24 24"
                            width="512"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 fill-rose-500 mr-2"
                        >
                            <path
                                d="m23.685 8.139-11.25-8c-.26-.185-.609-.185-.869 0l-11.25 8c-.198.14-.316.368-.316.611v3.5c0 .281.157.538.406.667.25.128.549.107.778-.055l.816-.581v10.719c0 .552.448 1 1 1h2v-12h14v12h2c.552 0 1-.448 1-1v-10.719l.815.58c.13.092.282.139.435.139.118 0 .235-.028.344-.083.249-.129.406-.386.406-.667v-3.5c0-.243-.118-.471-.315-.611z"
                            />
                            <path d="m6.5 21.5h11v2.5h-11z" />
                            <path d="m6.5 17.5h11v2.5h-11z" />
                            <path d="m6.5 13.5h11v2.5h-11z" />
                        </svg>

                        <p>
                            Skladem:
                            <span class="text-rose-600">
                                {{ stockSize }}
                            </span>
                        </p>
                    </div>

                    <div class="mt-3">
                        <h2 class="sr-only">Product information</h2>
                        <p class="text-xl tracking-tight text-gray-900">
                            {{ eggData.price }} CZK
                        </p>
                    </div>
                    <div class="mt-6">
                        <!-- Colors -->
                        <div class="sm:flex-col1 mt-10 flex">
                            <button
                                class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-rose-500 py-3 px-8 text-base font-medium text-white hover:bg-rose-600 sm:w-full"
                                @click="addToCart"
                            >
                                Přidat do košíku
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="details-heading" class="mt-12">
                        <div class="divide-y divide-gray-200 border-y">
                            <div>
                                <h3>
                                    <!-- Expand/collapse question button -->
                                    <button
                                        type="button"
                                        class="group relative flex w-full items-center justify-between py-6 text-left"
                                        aria-controls="disclosure-1"
                                        aria-expanded="false"
                                        @click="
                                            openProperties = !openProperties
                                        "
                                    >
                                        <!-- Open: "text-indigo-600", Closed: "text-gray-900" -->
                                        <span
                                            class="text-gray-900 text-sm font-medium"
                                            :class="{
                                                'text-rose-600': openProperties,
                                            }"
                                            >Vlastnosti</span
                                        >
                                        <span class="ml-6 flex items-center">
                                            <svg
                                                class="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                v-if="!openProperties"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                />
                                            </svg>
                                            <svg
                                                class="h-6 w-6 text-rose-400 group-hover:text-rose-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                v-if="openProperties"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M19.5 12h-15"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>
                                <div
                                    class="prose prose-sm pb-6"
                                    id="disclosure-1"
                                    v-if="openProperties"
                                >
                                    <ul role="list">
                                        <li
                                            v-for="properties of eggData.properties"
                                        >
                                            {{ properties }}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!-- More sections... -->
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { IEggData } from '../../interfaces/vajicka';
import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore();
const router = useRouter();

interface IReqData {
    data: IReqData[];
}

const route = useRoute();

const reqData = await useFetch<IReqData>(
    'http://localhost:3000/api/v1/products/slug/' + route.params.slug,
    { key: route.params.slug as string }
);

const eggData = (await reqData.data.value)?.data[0] as unknown as IEggData;

const eggTypes = computed(() => {
    const types = [];
    for (const type of eggData.types) {
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

const currentImage = ref(eggData.images[0]);

const packageSize = computed(() => {
    switch (eggData.packageSize) {
        case 1:
            return `1 vajíčko`;
        case 2:
        case 3:
        case 4:
            return `${eggData.packageSize} vajíčka`;
        default:
            return `${eggData.packageSize} vajíček`;
    }
});
const stockSize = computed(() => {
    switch (eggData.stock) {
        case 1:
            return `1 kus`;
        case 2:
        case 3:
        case 4:
            return `${eggData.stock} kusy`;
        default:
            return `${eggData.stock} kusů`;
    }
});

const openProperties = ref(true);

const addToCart = () => {
    cartStore.addToCart(eggData);
    router.push({ path: '/kosik' });
};
</script>
