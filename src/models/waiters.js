import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const waitersSchema = new Schema({
  waiterName: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  tableIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Tables',
  }]
}, {
  timestamps: true,
});

waitersSchema.plugin(paginate);

const WaiterModel = mongoose.model('waiters', waitersSchema);

export {
  WaiterModel
}