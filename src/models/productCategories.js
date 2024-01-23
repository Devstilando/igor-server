import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const productCategoriesSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  accountOwner: {
    type: Schema.Types.ObjectId,
    ref: 'Accounts',
    required: true,
  },
  shared: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true,
});

productCategoriesSchema.plugin(paginate);

const ProductCategoryModel = mongoose.model('ProductCategories', productCategoriesSchema);

export {
  ProductCategoryModel
}