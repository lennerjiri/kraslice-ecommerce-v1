<template>
    <nav
        class="mt-auto py-7 flex items-center border-gray-200 px-4 max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 w-full self-center"
        :class="{
            'justify-center': pages === 1,
            'justify-between': pages !== 1,
        }"
    >
        <div
            class="-mt-px flex w-0 flex-1"
            v-if="pages !== 1"
            @click="changePage('-')"
        >
            <div
                class="inline-flex items-center border-transparent pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 hover:cursor-pointer"
            >
                <!-- Heroicon name: mini/arrow-long-left -->
                <svg
                    class="mr-3 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                        clip-rule="evenodd"
                    />
                </svg>
                Předchozí
            </div>
        </div>
        <div class="hidden md:-mt-px md:flex">
            <div
                class="inline-flex items-center px-4 text-sm font-medium hover:cursor-pointer"
                v-for="page in pages"
                :class="{
                    'text-rose-600': page === modelValue,
                    'text-gray-500': page !== modelValue,
                    'hover:text-gray-700': page !== modelValue,
                    'hover:text-rose-700': page === modelValue,
                }"
                @click="changePage(page)"
            >
                {{ page }}
            </div>
        </div>
        <div
            class="-mt-px flex w-0 flex-1 justify-end"
            v-if="pages !== 1"
            @click="changePage('+')"
        >
            <div
                class="inline-flex items-center pl-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:cursor-pointer"
            >
                Další
                <!-- Heroicon name: mini/arrow-long-right -->
                <svg
                    class="ml-3 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
const emits = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Number,
    },
    pages: {
        type: Number,
    },
});

const changePage = (page: number | '+' | '-') => {
    if (
        props.modelValue &&
        props.pages &&
        page === '+' &&
        props.modelValue + 1 <= props.pages
    ) {
        emits('update:modelValue', props.modelValue + 1);
    } else if (
        props.modelValue &&
        props.pages &&
        page === '-' &&
        props.modelValue - 1 > 0
    ) {
        emits('update:modelValue', props.modelValue - 1);
    } else if (typeof page === 'number') {
        emits('update:modelValue', page);
    }
};
</script>
