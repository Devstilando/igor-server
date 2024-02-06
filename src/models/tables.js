import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const tableSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurants',
    required: true,
  },
  status: {
    type: String,
    enum: ['available', 'occuped', 'unavailable'],
    default: 'available',
    required: true
  },
  currentOrder: {
    type: Schema.Types.ObjectId,
    ref: 'Orders',
  }
}, {
  timestamps: true,
});

tableSchema.plugin(paginate);

const TableModel = mongoose.model('Tables', tableSchema);

export {
  TableModel
}