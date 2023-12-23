<template>
    <div class="relative overflow-hidden">
        <div class="pt-40 pb-40 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div
                class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8"
            >
                <div class="sm:max-w-lg">
                    <h1
                        class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                    >
                        Kraslice Lennerová
                    </h1>
                    <p class="mt-4 text-xl text-justify text-gray-500">
                        Vítejte! Jsme malý rodinný obchod, který se zaměřuje na
                        tradiční způsoby malby kraslic. Naše kraslice jsou ručně
                        malované s láskou a pečlivostí, což z nich činí
                        jedinečné a originální doplňky do vašeho domova.
                    </p>
                </div>
                <div>
                    <div class="mt-10">
                        <HomeHeroImageGrid />
                        <NuxtLink
                            to="/vajicka"
                            class="inline-block rounded-md border border-transparent bg-rose-500 py-3 px-8 text-center font-medium text-white hover:bg-rose-600 focus:bg-rose-700"
                            >Vstoupit do obchodu!</NuxtLink
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
