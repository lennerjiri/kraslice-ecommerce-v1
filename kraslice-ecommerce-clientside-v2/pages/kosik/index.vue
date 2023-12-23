<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <form
                class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
            >
                <section aria-labelledby="cart-heading" class="lg:col-span-7">
                    <ul
                        role="list"
                        class="divide-y divide-gray-200 border-t border-b border-gray-200"
                    >
                        <CartProduct
                            v-for="cartItem in cartStore.cart"
                            :cartItem="cartItem"
                        />
                    </ul>
                </section>

                <!-- Order summary -->
                <section
                    aria-labelledby="summary-heading"
                    class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                >
                    <h2
                        id="summary-heading"
                        class="text-lg font-medium text-gray-900"
                    >
                        Shrnutí objednávky
                    </h2>

                    <dl class="mt-6 space-y-4">
                        <CartSummaryItem
                            v-for="cartItem in cartStore.cart"
                            :cartItem="cartItem"
                        />

                        <div
                            class="flex items-center justify-between border-t border-gray-200 pt-4"
                        >
                            <dt class="text-base font-medium text-gray-900">
                                Celkem
                            </dt>
                            <dd class="text-base font-medium text-gray-900">
                                {{ fullPrice }} CZK
                            </dd>
                        </div>
                    </dl>

                    <div class="mt-6">
                        <button
                            type="submit"
                            class="w-full rounded-md bg-rose-500 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-rose-600 focus:bg-rose-700"
                        >
                            Objednat
                        </button>
                    </div>
                </section>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore();

const fullPrice = computed(() => {
    return cartStore.cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);
});
</script>
