import mongoose from 'mongoose';
import { slugify } from '../utils/slufigy.js';

const productsSchema = new mongoose.Schema(
    {
        name: {
            // Product Name
            type: String,
            required: [true, 'Product has to have a name'],
            unique: true,
            trim: true,
            maxlength: [
                40,
                'The name must be less than or equal to 40 characters long',
            ],
            minlength: [
                10,
                'The name must be more than or equal to 10 characters long',
            ],
        },
        price: {
            // Product Price
            type: Number,
            required: [true, 'Product has to have a price'],
            default: 200,
            min: 0,
        },
        shortDescription: {
            // Product Short Description
            trim: true,
            type: String,
            required: [true, 'Product has to have a short description'],
        },
        description: {
            // Product Long Description
            trim: true,
            type: String,
            required: [true, 'Product has to have a long description'],
        },
        stock: {
            // Product Stock
            type: Number,
            required: [
                true,
                'Product has to have a stock amount available for sale',
            ],
            default: 1,
            min: 0,
        },
        packageSize: {
            // Products per package
            type: Number,
            required: [
                true,
                'Product has to have a number of products per package',
            ],
            default: 1,
            min: 1,
        },
        listed: {
            // Product Listed
            type: Boolean,
            required: [true, 'Product has to have a listed status'],
            default: true,
        },
        available: {
            // Product Available
            type: Boolean,
            required: [true, 'Product has to have an available status'],
            default: true,
        },
        colors: {
            // Product Colors
            type: [String],
            required: [true, 'Product has to have colors'],
        },
        properties: {
            // Product Properties
            type: Object,
            required: [true, 'Product has to have properties'],
        },
        types: {
            // Product types in the package
            type: [String],
            required: [
                true,
                'Product has to have at least one type of egg included in the package',
            ],
            default: ['slepici'],
        },
        frontImage: {
            // Product Front Image on the listing page
            type: String,
            trim: true,
            required: [true, 'Product has to have a front image'],
        },
        images: {
            // All Product Images
            type: [String],
            required: [
                true,
                'Product has to have images shown on the description page',
            ],
        },
        slug: {
            // Product Slug
            type: String,
            //required: [true, 'Product has to have a slug'],
            unique: true,
        },
    },
    {
        strict: 'throw',
        timestamps: true,
    }
);

productsSchema.pre('save', function (next) {
    this.slug = slugify(this.name);
    next();
});

productsSchema.pre('findOneAndUpdate', function (next) {
    // This middleware will be executed before the update operations
    const update = this.getUpdate();

    if (update && 'name' in update) {
        // Generate the slug using the name and the slugify function
        const slug = slugify(update.name);

        // Update the slug property
        this.update({}, { $set: { slug: slug } });
    }
    next();
});

productsSchema.post('init', function (doc) {
    // This middleware will be executed after the document is retrieved and converted into a Mongoose object
    doc.set('__v', undefined);
});

// Connect productsSchema to the 'products' collection in the database
const Products = mongoose.model('Product', productsSchema);

export default Products;
