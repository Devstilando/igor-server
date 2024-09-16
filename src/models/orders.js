import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const productInOrderSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Products',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'Clients'
  },
  clientName: {
    type: String
  }
})

const orderSchema = new Schema({
  tableIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Tables',
    required: true
  }],
  products: [{
    type: productInOrderSchema,
    required: true
  }],
  status: {
    type: String,
    enum: ['open', 'ready', 'waiting','cancelled'],
    default: 'open',
    required: true
  },
  waiterId: {
    type: Schema.Types.ObjectId,
    ref: 'Waiters',
    required: true
  }
}, {
  timestamps: true
});

orderSchema.plugin(paginate);

const OrderModel = mongoose.model('Orders', orderSchema);

export {
  OrderModel
}