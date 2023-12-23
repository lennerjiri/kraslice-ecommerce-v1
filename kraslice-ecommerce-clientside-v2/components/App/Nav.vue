<template>
    <nav class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div class="flex h-16 justify-between">
                <!-- Logo + Links -->
                <div class="flex px-2 lg:px-0">
                    <NuxtLink to="/" class="flex items-center">
                        <svg
                            enable-background="new 0 0 512 512"
                            height="512"
                            viewBox="0 0 512 512"
                            width="512"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-auto lg:block transition fill-rose-500"
                        >
                            <g id="_x31__toucan">
                                <g>
                                    <path
                                        d="m177.625 55.636-163.402 49.027c11.972-42.211 36.82-87.958 84.853-86.84 30.217.5 54.283 18.876 78.549 37.813z"
                                    />
                                    <path
                                        d="m223.291 102.883-221.17 66.359c1.214-12.858 3.106-26.371 5.631-38.625l189.576-56.878c8.842 8.844 17.868 19.091 25.963 29.144z"
                                    />
                                    <path
                                        d="m134.959 210.237c-45.486 13.652-90.452 23.893-133.848 30.514-1.18-14.952-1.42-30.664-.72-46.976l237.852-71.36c9.561 13.222 18.002 26.464 25.253 39.595-39.855 18.363-83.021 34.576-128.537 48.227z"
                                    />
                                    <path
                                        d="m38.216 299.339-20.403 16.932c-6.962-16.908-11.076-33.618-14.072-52.657 88.712-13.276 188.793-43.315 270.147-81.061 7.326 16.06 12.668 30.856 16.282 47.046l-40.836 40.655-60.908-18.742c-4.121-1.27-8.601-.12-11.612 2.96l-58.208 59.558-70.34-17.022c-3.529-.859-7.26.011-10.05 2.331z"
                                    />
                                    <path
                                        d="m253.055 358.977c-62.555 61.184-179.808 58.015-224.62-21.623l20.033-16.633 71.08 17.213c3.95.95 8.101-.24 10.932-3.141l57.878-59.228 60.808 18.712c4.07 1.25 8.491.16 11.502-2.84l33.224-33.074c1.6 38.555-13.311 74.552-40.837 100.614z"
                                    />
                                    <path
                                        d="m481.616 428.637 1.94 1.61c-56.515 99.464-216.702 76.643-256.495-25.253 13.982-7.031 26.794-15.742 38.085-25.874 10.401 1.61 21.053.85 31.174-2.26 4.451-1.37 9.081-2.071 13.762-2.071 12.552 0 24.773 5.141 33.525 14.102 21.648 25.063 46.548 42.328 81.102 34.114 20.262-5.855 39.338-9.107 56.907 5.632z"
                                    />
                                    <path
                                        d="m413.987 186.144c-29.514-9.952-55.717-24.404-75.14-41.286 74.181-61.912 134.541-36.656 159.292 53.917-25.544 1.571-54.898-2.78-84.152-12.631z"
                                    />
                                    <path
                                        d="m508.72 251.473c-1.24-10.412-2.871-20.433-4.891-30.044-60.883 5.368-138.197-21.196-182.465-61.338-7.471 7.061-14.822 14.752-22.053 23.043 24.97 55.902 25.07 124.548-12.662 172.523 38.141-11.831 63.659 4.153 88.121 32.215 11.492 11.751 28.554 16.651 44.527 12.781 26.102-8.075 52.343-8.998 74.86 8.581 18.213-46.309 21.308-96.074 14.563-157.761zm-165.823 76.75c-14.285-.245-14.293-21.507 0-21.753 14.309.246 14.297 21.512 0 21.753zm21.753-78.78c-14.293-.236-14.291-21.51 0-21.743 14.293.235 14.291 21.509 0 21.743zm29.114 37.495c.245-14.285 21.507-14.293 21.753 0-.242 14.297-21.515 14.284-21.753 0zm16.302 84.781c-14.309-.246-14.296-21.512 0-21.753 14.285.246 14.293 21.507 0 21.753zm35.215-114.675c.243-14.299 21.509-14.306 21.753 0-.248 14.294-21.51 14.282-21.753 0zm19.653 92.922c-14.291-.241-14.289-21.504 0-21.743 14.304.239 14.302 21.507 0 21.743z"
                                    />
                                </g>
                            </g>
                        </svg>
                    </NuxtLink>
                    <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
                        <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                        <NuxtLink
                            to="/vajicka"
                            class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium transition"
                            :class="{
                                'text-rose-500': $route.name === 'vajicka',
                                'border-rose-500': $route.name === 'vajicka',
                                'hover:border-rose-500':
                                    $route.name === 'vajicka',
                                'text-gray-700': !($route.name === 'vajicka'),
                                'hover:text-gray-800': !(
                                    $route.name === 'vajicka'
                                ),
                            }"
                            @click="imageHover = false"
                            >Vajíčka
                        </NuxtLink>
                        <NuxtLink
                            to="/darkova-baleni"
                            class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium transition"
                            :class="{
                                'text-rose-500':
                                    $route.name === 'darkova-baleni',
                                'border-rose-500':
                                    $route.name === 'darkova-baleni',
                                'hover:border-rose-500':
                                    $route.name === 'darkova-baleni',
                                'text-gray-700': !(
                                    $route.name === 'darkova-baleni'
                                ),
                                'hover:text-gray-800': !(
                                    $route.name === 'darkova-baleni'
                                ),
                            }"
                            @click="imageHover = false"
                            >Dárková Balení</NuxtLink
                        ><NuxtLink
                            to="/workshopy"
                            class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium transition"
                            :class="{
                                'text-rose-500': $route.name === 'workshopy',
                                'border-rose-500': $route.name === 'workshopy',
                                'hover:border-rose-500':
                                    $route.name === 'workshopy',
                                'text-gray-700': !($route.name === 'workshopy'),
                                'hover:text-gray-800': !(
                                    $route.name === 'workshopy'
                                ),
                            }"
                            @click="imageHover = false"
                            >Workshopy</NuxtLink
                        >
                        <NuxtLink
                            to="/o-malirce"
                            class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium transition"
                            :class="{
                                'text-rose-500': $route.name === 'o-malirce',
                                'border-rose-500': $route.name === 'o-malirce',
                                'hover:border-rose-500':
                                    $route.name === 'o-malirce',
                                'text-gray-700': !($route.name === 'o-malirce'),
                                'hover:text-gray-800': !(
                                    $route.name === 'o-malirce'
                                ),
                            }"
                            @click="imageHover = false"
                            >O malířce</NuxtLink
                        >
                        <NuxtLink
                            to="/kontakty"
                            class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium transition"
                            :class="{
                                'text-rose-500': $route.name === 'kontakty',
                                'border-rose-500': $route.name === 'kontakty',
                                'hover:border-rose-500':
                                    $route.name === 'kontakty',
                                'text-gray-700': !($route.name === 'kontakty'),
                                'hover:text-gray-800': !(
                                    $route.name === 'kontakty'
                                ),
                            }"
                            @click="imageHover = false"
                            >Kontakty
                        </NuxtLink>
                    </div>
                </div>
                <!-- Cart and search -->
                <div class="ml-4 flex items-center">
                    <div class="flex space-x-8">
                        <div class="flex">
                            <a
                                href="#"
                                class="lg:-m-2 p-2 text-gray-400 hover:text-gray-500 transition"
                            >
                                <!-- Heroicon name: outline/magnifying-glass -->
                                <svg
                                    class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <span
                        class="hidden h-6 w-px bg-gray-200 lg:flex lg:mx-6"
                        aria-hidden="true"
                    ></span>

                    <div class="flex space-x-8">
                        <NuxtLink
                            to="/kosik"
                            class="group -mr-2 lg:-m-2 flex items-center p-2"
                        >
                            <!-- Heroicon name: outline/shopping-cart -->
                            <svg
                                class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 transition"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                            </svg>
                            <span
                                class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                                >{{ cartStore.cart?.length }}</span
                            >
                        </NuxtLink>
                    </div>

                    <span
                        class="mx-4 h-6 w-px bg-gray-200 lg:hidden"
                        aria-hidden="true"
                    ></span>

                    <div class="lg:hidden flex space-x-8">
                        <a href="#" class="group -ml-2 flex items-center p-2">
                            <!-- Heroicon name: outline/shopping-cart -->
                            <svg
                                class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore();

const imageHover = ref(false);
</script>
