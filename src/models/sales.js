import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const productsModifiedInSaleSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Products',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

const preSalesSchema = new Schema({
  amount: {
    type: Number,
    required: true
  }
})

const salesSchema = new Schema({
  relatedOrder: {
    type: Schema.Types.ObjectId,
    ref: 'Orders',
    required: true,
  },
  modifiedProducts: [{
    type: productsModifiedInSaleSchema
  }],
  offers: [{
    type: Schema.Types.ObjectId,
    ref: 'Offers'
  }],
  offersAmount: {
    type: Number
  },
  total: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['open', 'closed', 'cancelled'],
    default: 'open',
    required: true
  },
  preSales: [preSalesSchema]
}, {
  timestamps: true,
});

salesSchema.plugin(paginate);

const SaleModel = mongoose.model('Sales', salesSchema);

export {
  SaleModel
}