<template>
    <div
        class="flex items-center justify-between border-t border-gray-200 pt-4"
    >
        <dt class="flex text-sm text-gray-600">
            <span
                >{{ cartItem.name }}
                {{ cartItem.quantity > 1 ? `${cartItem.quantity}x` : '' }}</span
            >
            <a
                href="#"
                class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
            >
            </a>
        </dt>
        <dd class="text-sm font-medium text-gray-900">
            {{ cartItem.price * cartItem.quantity }} CZK
        </dd>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IEggData } from '@/interfaces/vajicka';

interface IEggDataExtended extends IEggData {
    quantity: number;
}

interface ICartItem {
    cartItem: IEggDataExtended;
}

const props = defineProps<ICartItem>();
</script>
