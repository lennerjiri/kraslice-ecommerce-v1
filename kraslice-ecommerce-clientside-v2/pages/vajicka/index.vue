<template>
    <div class="grow flex flex-col">
        <!-- Filters Off Canvas -->
        <EggListFilterSlideFilter />

        <!-- Filters In Canvas -->
        <EggListFilter v-model="filters" />

        <!-- List -->
        <EggListProductList
            :products="paginatedEggData"
            @removeFilters="removeFilters"
        />

        <!-- Pagination -->
        <EggListPagination :pages="pages" v-model="currentPage" />
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { IEggData } from '../../interfaces/vajicka';

// Pagination
const currentPage = ref(1);
const pageLimit = 9;

// Fetch initial data from the server => ALL
const reqData = await useFetch<IEggData[]>('/api/eggdata');
const data = await reqData.data.value;

// check if it is not null
let reactiveData: IEggData[];

if (data !== null) {
    reactiveData = data as unknown as IEggData[];
} else {
    reactiveData = [];
}

const filters = reactive({
    sort: 'none', // none, priceUp, priceDown
    eggTypes: [], // ['chicken', 'duck', 'goose']
    colors: [], // ['white', 'brown', 'black' ...]
    availability: 'all', // all, available, orderOnly
});

const removeFilters = () => {
    filters.eggTypes = [];
    filters.colors = [];
    filters.availability = 'all';
};

// Filter data
const eggData = computed(() => {
    const retrievedData = reactiveData;

    // filter by egg type
    const filteredByEggType = retrievedData.filter((egg) => {
        if (filters.eggTypes.length === 0) {
            return true;
        }

        return filters.eggTypes.some((eggType) => {
            return egg.types.includes(eggType);
        });
    });

    // filter by color
    const filteredByColor = filteredByEggType.filter((egg) => {
        if (filters.colors.length === 0) {
            return true;
        }

        return filters.colors.some((color) => {
            return egg.colors.includes(color);
        });
    });

    // filter by availability
    const filteredByAvailability = filteredByColor.filter((egg) => {
        if (filters.availability === 'all') {
            return true;
        }

        if (filters.availability === 'available') {
            return egg.available === true;
        }

        if (filters.availability === 'orderOnly') {
            return egg.available === false;
        }

        return true;
    });

    // sort
    if (filters.sort === 'price-dsc') {
        filteredByAvailability.sort((a, b) => {
            return a.price - b.price;
        });
    } else if (filters.sort === 'price-asc') {
        filteredByAvailability.sort((a, b) => {
            return b.price - a.price;
        });
    } else {
        // sort by id which is a string
        filteredByAvailability.sort((a, b) => {
            return a._id.localeCompare(b._id);
        });
    }

    return filteredByAvailability;
});

const paginatedEggData = computed(() => {
    return eggData.value.slice(
        (currentPage.value - 1) * pageLimit,
        currentPage.value * pageLimit
    );
});

// Paginate data
const pages = computed(() => {
    return Math.ceil(eggData.value.length / pageLimit);
});

watch(pages, () => {
    currentPage.value = 1;
});
</script>
