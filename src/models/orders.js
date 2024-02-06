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
  price: {
    type: Number,
    required: true
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'Clients'
  },
  clientName: {
    type: String,
    required: true
  }
})

const subOrdersSchema = new Schema({
  products: [{
    type: productInOrderSchema,
    required: true
  }],
  total: {
    type: Number,
    required: true
  },
  saleRelated: {
    type: Schema.Types.ObjectId,
    ref: 'Sales',
    required: true
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
  total: {
    type: Number,
    required: true
  },
  subOrders: [{
    type: subOrdersSchema
  }],
  status: {
    type: String,
    enum: ['open', 'payed', 'cancelled'],
    default: 'open',
    required: true
  },
  clientIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Clients'
  }]
}, {
  timestamps: true
});

orderSchema.plugin(paginate);

const OrderModel = mongoose.model('Orders', orderSchema);

export {
  OrderModel
}