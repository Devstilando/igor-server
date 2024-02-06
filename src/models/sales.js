import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const salesSchema = new Schema({
  relatedOrder: {
    type: Schema.Types.ObjectId,
    ref: 'Orders',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  
}, {
  timestamps: true,
});

salesSchema.plugin(paginate);

const SaleModel = mongoose.model('Sales', salesSchema);

export {
  SaleModel
}