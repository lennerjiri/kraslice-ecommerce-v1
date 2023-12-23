<template>
    <section aria-labelledby="category-heading" class="bg-gray-50">
        <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-baseline sm:justify-between">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">
                    Kategorie
                </h2>
            </div>

            <div
                class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8"
            >
                <div
                    class="group overflow-hidden rounded-lg sm:row-span-2 relative h-full"
                >
                    <img
                        src="../../assets/img/eggs.png"
                        alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                        class="object-cover object-center group-hover:opacity-75 transition"
                    />
                    <div
                        aria-hidden="true"
                        class="bg-gradient-to-b from-transparent to-black opacity-50 absolute inset-0"
                    ></div>
                    <div class="flex items-end p-6 absolute inset-0">
                        <div>
                            <h3 class="font-semibold text-white">
                                <NuxtLink to="/vajicka">
                                    <span class="absolute inset-0"></span>
                                    Vajíčka
                                </NuxtLink>
                            </h3>
                            <p
                                aria-hidden="true"
                                class="mt-1 text-sm text-white"
                            >
                                Nabídka
                            </p>
                        </div>
                    </div>
                </div>
                <div class="group overflow-hidden rounded-lg relative h-full">
                    <img
                        src="../../assets/img/packages.png"
                        alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                        class="object-cover object-bottom group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full transition"
                    />
                    <div
                        aria-hidden="true"
                        class="bg-gradient-to-b from-transparent to-black opacity-50 absolute inset-0"
                    ></div>
                    <div class="flex items-end p-6 absolute inset-0">
                        <div>
                            <h3 class="font-semibold text-white">
                                <NuxtLink to="/darkova-baleni">
                                    <span class="absolute inset-0"></span>
                                    Dárková Balení
                                </NuxtLink>
                            </h3>
                            <p
                                aria-hidden="true"
                                class="mt-1 text-sm text-white"
                            >
                                Nabídka
                            </p>
                        </div>
                    </div>
                </div>
                <div class="group overflow-hidden rounded-lg relative h-full">
                    <img
                        src="../../assets/img/workshops.png"
                        alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                        class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full transition"
                    />
                    <div
                        aria-hidden="true"
                        class="bg-gradient-to-b from-transparent to-black opacity-50 absolute inset-0"
                    ></div>
                    <div class="flex items-end p-6 absolute inset-0">
                        <div>
                            <h3 class="font-semibold text-white">
                                <NuxtLink to="/workshopy">
                                    <span class="absolute inset-0"></span>
                                    Workshopy
                                </NuxtLink>
                            </h3>
                            <p
                                aria-hidden="true"
                                class="mt-1 text-sm text-white"
                            >
                                Rezervace
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
