import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const productSubCategorieSchema = new Schema({
  parentCategory: {
    type: Schema.Types.ObjectId,
    ref: 'ProductCategories',
    required: true,
  },
  subCategory: {
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

productSubCategorieSchema.plugin(paginate);

const ProductSubCategoryModel = mongoose.model('ProductSubCategories', productSubCategorieSchema);

export {
  ProductSubCategoryModel
}