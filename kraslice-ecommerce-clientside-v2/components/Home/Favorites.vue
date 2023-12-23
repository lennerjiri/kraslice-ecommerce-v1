<template>
    <section aria-labelledby="favorites-heading">
        <div class="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-baseline sm:justify-between">
                <h2
                    id="favorites-heading"
                    class="text-2xl font-bold tracking-tight text-gray-900"
                >
                    Nejoblíbenější
                </h2>
                <NuxtLink
                    to="/vajicka"
                    class="hidden text-sm font-semibold text-rose-600 hover:text-rose-500 sm:block transition"
                >
                    Procházet všechna vajíčka
                    <span aria-hidden="true"> &rarr;</span>
                </NuxtLink>
            </div>

            <div
                class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8"
            >
                <div class="group relative">
                    <div
                        class="h-96 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-3 sm:h-auto transition"
                    >
                        <img
                            src="../../assets/img/egg1.png"
                            alt="Model wearing women&#039;s black cotton crewneck tee."
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                    <h3 class="mt-4 text-base font-semibold text-gray-900">
                        <a href="#">
                            <span class="absolute inset-0"></span>
                            Zelená slepičí kraslice
                        </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">300 CZK</p>
                </div>
                <div class="group relative">
                    <div
                        class="h-96 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-3 sm:h-auto transition"
                    >
                        <img
                            src="../../assets/img/egg2.png"
                            alt="Model wearing women&#039;s off-white cotton crewneck tee."
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                    <h3 class="mt-4 text-base font-semibold text-gray-900">
                        <a href="#">
                            <span class="absolute inset-0"></span>
                            Modrá slepičí kraslice
                        </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">320 CZK</p>
                </div>

                <div class="group relative">
                    <div
                        class="h-96 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-3 sm:h-auto transition"
                    >
                        <img
                            src="../../assets/img/egg3.png"
                            alt="Model wearing women&#039;s burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle."
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                    <h3 class="mt-4 text-base font-semibold text-gray-900">
                        <a href="#">
                            <span class="absolute inset-0"></span>
                            Červená slepičí kraslice
                        </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">450 CZK</p>
                </div>
            </div>

            <div class="mt-6 sm:hidden">
                <NuxtLink
                    to="/vajicka"
                    class="block text-sm font-semibold text-rose-600 hover:text-rose-500 transition"
                >
                    Procházet všechna vajíčka
                    <span aria-hidden="true"> &rarr;</span>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
