<template>
    <div
        class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8 w-full"
    >
        <section
            aria-labelledby="filter-heading"
            class="border-t border-gray-200 py-6"
        >
            <h2 id="filter-heading" class="sr-only">Product filters</h2>

            <div class="flex items-center justify-between">
                <div class="relative inline-block text-left">
                    <div>
                        <button
                            type="button"
                            class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                            id="mobile-menu-button"
                            aria-expanded="false"
                            aria-haspopup="true"
                            ref="targetSortMenu"
                            @click="sortMenu = !sortMenu"
                        >
                            <span>Seřazení</span>
                            <span
                                class="ml-1.5 rounded bg-gray-200 py-0.5 px-1.5 text-xs font-semibold tabular-nums text-gray-700"
                                v-if="filters.sort !== 'none'"
                                >{{
                                    filters.sort === 'price-asc'
                                        ? 'Od Nejdražší'
                                        : 'Od Nejlevnější'
                                }}</span
                            >
                            <svg
                                class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 transition ease-in-out duration-150"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                :style="
                                    sortMenu ? 'transform: rotate(180deg)' : ''
                                "
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                    <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
                    <div
                        class="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="mobile-menu-button"
                        tabindex="-1"
                        v-if="sortMenu"
                    >
                        <div class="py-1" role="none">
                            <!-- Active: "bg-gray-100", Not Active: "" -->
                            <div
                                class="block px-4 py-2 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                id="mobile-menu-item-2"
                                @click="changeSortFilter('none')"
                                :class="{
                                    'bg-gray-200': filters.sort == 'none',
                                }"
                            >
                                Žádné
                            </div>
                            <div
                                class="block px-4 py-2 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                id="mobile-menu-item-2"
                                @click="changeSortFilter('price-asc')"
                                :class="{
                                    'bg-gray-200': filters.sort == 'price-asc',
                                }"
                            >
                                Nejdražší
                            </div>
                            <div
                                class="block px-4 py-2 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                id="mobile-menu-item-2"
                                @click="changeSortFilter('price-dsc')"
                                :class="{
                                    'bg-gray-200': filters.sort == 'price-dsc',
                                }"
                            >
                                Nejlevnější
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile filter dialog toggle, controls the 'mobileFilterDialogOpen' state. -->
                <button
                    type="button"
                    class="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
                >
                    Filtry
                </button>

                <div class="hidden sm:flex sm:items-baseline sm:space-x-8">
                    <div
                        id="desktop-menu-0"
                        class="relative inline-block text-left"
                        ref="targetEggTypeMenu"
                    >
                        <div>
                            <button
                                type="button"
                                class="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                aria-expanded="false"
                                @click="eggTypeMenu = !eggTypeMenu"
                            >
                                <span>Druh Vajíček</span>

                                <span
                                    v-if="filters.eggTypes.length > 0"
                                    class="ml-1.5 rounded bg-gray-200 py-0.5 px-1.5 text-xs font-semibold tabular-nums text-gray-700"
                                    >{{ filters.eggTypes.length }}</span
                                >
                                <svg
                                    class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 transition ease-in-out duration-150"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    :style="
                                        eggTypeMenu
                                            ? 'transform: rotate(180deg)'
                                            : ''
                                    "
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>

                        <!--
              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
                        <div
                            class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                            v-if="eggTypeMenu"
                        >
                            <form class="space-y-4">
                                <div class="flex items-center">
                                    <input
                                        id="filter-eggType-0"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="
                                            changeEggTypesFilter('chicken')
                                        "
                                        :checked="
                                            filters.eggTypes.includes('chicken')
                                        "
                                    />
                                    <label
                                        for="filter-eggType-0"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Slepičí</label
                                    >
                                </div>

                                <div class="flex items-center">
                                    <input
                                        id="filter-eggType-1"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="changeEggTypesFilter('goose')"
                                        :checked="
                                            filters.eggTypes.includes('goose')
                                        "
                                    />
                                    <label
                                        for="filter-eggType-1"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Husí</label
                                    >
                                </div>

                                <div class="flex items-center">
                                    <input
                                        id="filter-eggType-2"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="
                                            changeEggTypesFilter('ostrich')
                                        "
                                        :checked="
                                            filters.eggTypes.includes('ostrich')
                                        "
                                    />
                                    <label
                                        for="filter-eggType-2"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Pštrosí</label
                                    >
                                </div>
                                <div class="flex items-center">
                                    <input
                                        id="filter-eggType-3"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="changeEggTypesFilter('quail')"
                                        :checked="
                                            filters.eggTypes.includes('quail')
                                        "
                                    />
                                    <label
                                        for="filter-eggType-3"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Křepelčí</label
                                    >
                                </div>
                            </form>
                        </div>
                    </div>

                    <div
                        id="desktop-menu-2"
                        class="relative inline-block text-left"
                        ref="targetColorMenu"
                    >
                        <div>
                            <button
                                type="button"
                                class="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                aria-expanded="false"
                                @click="colorMenu = !colorMenu"
                            >
                                <span>Barva</span>
                                <span
                                    v-if="filters.colors.length > 0"
                                    class="ml-1.5 rounded bg-gray-200 py-0.5 px-1.5 text-xs font-semibold tabular-nums text-gray-700"
                                    >{{ filters.colors.length }}</span
                                >
                                <svg
                                    class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 transition ease-in-out duration-150"
                                    :style="
                                        colorMenu
                                            ? 'transform: rotate(180deg)'
                                            : ''
                                    "
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>

                        <!--
              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
                        <div
                            class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5"
                            v-if="colorMenu"
                        >
                            <form class="space-y-4">
                                <div class="flex items-center">
                                    <input
                                        id="filter-color-0"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="changeEggColorFilter('white')"
                                        :checked="
                                            filters.colors.includes('white')
                                        "
                                    />
                                    <label
                                        for="filter-color-0"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Bílá</label
                                    >
                                </div>
                                <div class="flex items-center">
                                    <input
                                        id="filter-color-1"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="changeEggColorFilter('black')"
                                        :checked="
                                            filters.colors.includes('black')
                                        "
                                    />
                                    <label
                                        for="filter-color-1"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Černá</label
                                    >
                                </div>
                                <div class="flex items-center">
                                    <input
                                        id="filter-color-2"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="changeEggColorFilter('gray')"
                                        :checked="
                                            filters.colors.includes('gray')
                                        "
                                    />
                                    <label
                                        for="filter-color-2"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Šedá</label
                                    >
                                </div>
                                <div class="flex items-center">
                                    <input
                                        id="filter-color-3"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="changeEggColorFilter('brown')"
                                        :checked="
                                            filters.colors.includes('brown')
                                        "
                                    />
                                    <label
                                        for="filter-color-3"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Hnědá</label
                                    >
                                </div>
                                <div class="flex items-center">
                                    <input
                                        id="filter-color-4"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="changeEggColorFilter('pink')"
                                        :checked="
                                            filters.colors.includes('pink')
                                        "
                                    />
                                    <label
                                        for="filter-color-4"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Růžová</label
                                    >
                                </div>
                                <div class="flex items-center">
                                    <input
                                        id="filter-color-5"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="changeEggColorFilter('purple')"
                                        :checked="
                                            filters.colors.includes('purple')
                                        "
                                    />
                                    <label
                                        for="filter-color-5"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Fialová</label
                                    >
                                </div>
                                <div class="flex items-center">
                                    <input
                                        id="filter-color-6"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="
                                            changeEggColorFilter('turquoise')
                                        "
                                        :checked="
                                            filters.colors.includes('turquoise')
                                        "
                                    />
                                    <label
                                        for="filter-color-6"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Tyrkysová</label
                                    >
                                </div>
                                <div class="flex items-center">
                                    <input
                                        id="filter-color-7"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="changeEggColorFilter('blue')"
                                        :checked="
                                            filters.colors.includes('blue')
                                        "
                                    />
                                    <label
                                        for="filter-color-7"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Modrá</label
                                    >
                                </div>
                                <div class="flex items-center">
                                    <input
                                        id="filter-color-8"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="changeEggColorFilter('green')"
                                        :checked="
                                            filters.colors.includes('green')
                                        "
                                    />
                                    <label
                                        for="filter-color-8"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Zelená</label
                                    >
                                </div>
                                <div class="flex items-center">
                                    <input
                                        id="filter-color-9"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="changeEggColorFilter('red')"
                                        :checked="
                                            filters.colors.includes('red')
                                        "
                                    />
                                    <label
                                        for="filter-color-9"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Červená</label
                                    >
                                </div>
                                <div class="flex items-center">
                                    <input
                                        id="filter-color-10"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="changeEggColorFilter('orange')"
                                        :checked="
                                            filters.colors.includes('orange')
                                        "
                                    />
                                    <label
                                        for="filter-color-10"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Oranžová</label
                                    >
                                </div>
                                <div class="flex items-center">
                                    <input
                                        id="filter-color-11"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="changeEggColorFilter('yellow')"
                                        :checked="
                                            filters.colors.includes('yellow')
                                        "
                                    />
                                    <label
                                        for="filter-color-11"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Žlutá</label
                                    >
                                </div>
                            </form>
                        </div>
                    </div>

                    <div
                        id="desktop-menu-3"
                        class="relative inline-block text-left"
                        ref="targetAvailabilityMenu"
                    >
                        <div>
                            <button
                                type="button"
                                class="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                aria-expanded="false"
                                @click="availabilityMenu = !availabilityMenu"
                            >
                                <span>Dostupnost</span>
                                <span
                                    v-if="filters.availability !== 'all'"
                                    class="ml-1.5 rounded bg-gray-200 py-0.5 px-1.5 text-xs font-semibold tabular-nums text-gray-700"
                                    >{{
                                        filters.availability === 'available'
                                            ? 'Skladem'
                                            : 'Na Objednávku'
                                    }}</span
                                >
                                <svg
                                    class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 transition ease-in-out duration-150"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    :style="
                                        availabilityMenu
                                            ? 'transform: rotate(180deg)'
                                            : ''
                                    "
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>

                        <!--
              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
                        <div
                            class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                            v-if="availabilityMenu"
                        >
                            <form class="space-y-4">
                                <div class="flex items-center">
                                    <input
                                        id="filter-availability-0"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="
                                            changeAvailabilityFilter(
                                                'available'
                                            )
                                        "
                                        :checked="
                                            filters.availability == 'available'
                                        "
                                    />
                                    <label
                                        for="filter-availability-0"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Skladem</label
                                    >
                                </div>

                                <div class="flex items-center">
                                    <input
                                        id="filter-availability-1"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-offset-0 focus:ring-0 hover:cursor-pointer"
                                        @change="
                                            changeAvailabilityFilter(
                                                'orderOnly'
                                            )
                                        "
                                        :checked="
                                            filters.availability == 'orderOnly'
                                        "
                                    />
                                    <label
                                        for="filter-availability-1"
                                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:cursor-pointer"
                                        >Na Objednávku</label
                                    >
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';

interface filters {
    sort: string;
    eggTypes: string[];
    colors: string[];
    availability: string;
}

const props = defineProps<{ modelValue: filters }>();
const emit = defineEmits(['update:modelValue']);

// watcher
const filters = reactive(props.modelValue);

watch(
    () => filters.sort,
    (newVal, oldVal) => {
        emit('update:modelValue', { ...filters });
    }
);
watch(
    () => filters.eggTypes,
    (newVal, oldVal) => {
        emit('update:modelValue', { ...filters });
    }
);
watch(
    () => filters.colors,
    (newVal, oldVal) => {
        emit('update:modelValue', { ...filters });
    }
);
watch(
    () => filters.availability,
    (newVal, oldVal) => {
        emit('update:modelValue', { ...filters });
    }
);

// Dialog Values
// Sort
const changeSortFilter = (value: 'price-asc' | 'price-dsc' | 'none') => {
    filters.sort = value;
};

// Egg Type
const changeEggTypesFilter = (value: string) => {
    if (filters.eggTypes.includes(value)) {
        filters.eggTypes = filters.eggTypes.filter((item) => item !== value);
    } else {
        filters.eggTypes = [...filters.eggTypes, value];
    }
};

// Egg Color
const changeEggColorFilter = (value: string) => {
    if (filters.colors.includes(value)) {
        filters.colors = filters.colors.filter((item) => item !== value);
    } else {
        filters.colors = [...filters.colors, value];
    }
};

// Availability
const changeAvailabilityFilter = (value: 'all' | 'available' | 'orderOnly') => {
    if (value == 'all' && filters.availability == 'all') {
        filters.availability = 'all';
    } else if (value == 'available' && filters.availability == 'available') {
        filters.availability = 'all';
    } else if (value == 'orderOnly' && filters.availability == 'orderOnly') {
        filters.availability = 'all';
    } else {
        filters.availability = value;
    }
};

// Dialogs
const sortMenu = ref(false);
const eggTypeMenu = ref(false);
const colorMenu = ref(false);
const availabilityMenu = ref(false);

// Dialogs - close when click outside
const targetSortMenu = ref(null);
const targetEggTypeMenu = ref(null);
const targetColorMenu = ref(null);
const targetAvailabilityMenu = ref(null);

// add flag after click that closed dialog to prevent reopening
onClickOutside(targetSortMenu, (event) => {
    sortMenu.value = false;
});
onClickOutside(targetEggTypeMenu, (event) => {
    eggTypeMenu.value = false;
});
onClickOutside(targetColorMenu, (event) => {
    colorMenu.value = false;
});
onClickOutside(targetAvailabilityMenu, (event) => {
    availabilityMenu.value = false;
});
</script>
