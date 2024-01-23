import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const productTagsSchema = new Schema({
  tag: {
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

productTagsSchema.plugin(paginate);

const ProductTagModel = mongoose.model('ProductTags', productTagsSchema);

export {
  ProductTagModel
}