interface IProduct {
    data: {
        name: string;
        price: number;
        shortDescription: string;
        description: string;
        stock: number;
        packageSize: number;
        listed: boolean;
        available: boolean;
        colors: string[];
        properties: { [key: string]: string };
        types: string[];
        frontImage: string;
        images: string[];
        createdAt?: Date;
        updatedAt?: Date;
        __v?: number;
    };
}

interface INewProduct {
    data: {
        name?: string;
        price?: number;
        shortDescription?: string;
        description?: string;
        stock?: number;
        packageSize?: number;
        listed?: boolean;
        available?: boolean;
        colors?: string[];
        properties?: { [key: string]: string };
        types?: string[];
        frontImage?: string;
        images?: string[];
        createdAt?: Date;
        updatedAt?: Date;
        __v?: number;
    };
}

interface ICreatedProduct {
    name: string;
    price: number;
    shortDescription: string;
    description: string;
    stock: number;
    packageSize: number;
    listed: boolean;
    available: boolean;
    colors: string[];
    properties: { [key: string]: string };
    types: string[];
    frontImage: string;
    images: string[];
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
}

interface IUpdateProduct {
    data: {
        name?: string;
        price?: number;
        shortDescription?: string;
        description?: string;
        stock?: number;
        packageSize?: number;
        listed?: boolean;
        available?: boolean;
        colors?: string[];
        properties?: { [key: string]: string };
        types?: string[];
        frontImage?: string;
        images?: string[];
        createdAt?: Date;
        updatedAt?: Date;
        __v?: number;
    };
}

export { IProduct, INewProduct, ICreatedProduct, IUpdateProduct };
