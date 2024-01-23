import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    hidden: {
      type: Boolean,
      default: false
    },
    code: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'ProductCategories',
      required: true
    },
    tags: [{
      type: Schema.Types.ObjectId,
      ref: 'ProductTags'
    }],
    subCategory: {
      type: Schema.Types.ObjectId,
      ref: 'ProductSubCategories'
    },
    available: {
      type: Boolean,
      default: true,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurants',
      required: true
    },
    shared: {
      type: Boolean,
      default: false
    },
  }, {
  timestamps: true,
});

productsSchema.plugin(paginate);

const ProductModel = mongoose.model('Products', productsSchema);

export {
  ProductModel
}