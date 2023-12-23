<template>
    <div
        class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white hover:cursor-pointer"
        @click="$router.push(`/vajicka/${product.slug}`)"
    >
        <div
            class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96 transition duration-150 ease-in-out"
        >
            <img
                :src="`http://localhost:3000/api/v1/public/${product.frontImage}`"
                :alt="product.name"
                class="h-full w-full object-cover object-center sm:h-full sm:w-full"
            />
        </div>
        <div class="flex flex-1 flex-col space-y-2 p-4">
            <h3 class="text-sm font-medium text-gray-900">
                <div>
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    {{ product.name }}
                </div>
            </h3>
            <p class="text-sm text-gray-500">
                {{ product.shortDescription }}
            </p>
            <div class="flex flex-1 flex-col justify-end">
                <p class="text-sm italic text-gray-500">
                    {{ product.types.join(', ') }}
                </p>
                <p class="text-base font-medium text-gray-900">
                    {{ product.price }} CZK
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IEggData } from '../../../interfaces/vajicka';

interface IProps {
    product: IEggData;
}

const props = defineProps<IProps>();
</script>
