<template>
    <div class="bg-white">
        <div
            class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col"
        >
            <div
                class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
            >
                <EggListProduct
                    v-for="product in products"
                    :key="product._id"
                    :product="product"
                />

                <EggListProductNotFound
                    v-if="products.length === 0"
                    @removeFilters="removeFilters"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IEggData } from '../../../interfaces/vajicka';
import { defineEmits } from 'vue';

const emits = defineEmits(['removeFilters']);

const removeFilters = () => {
    emits('removeFilters');
};

interface IProps {
    products: IEggData[];
}

const props = defineProps<IProps>();
</script>
