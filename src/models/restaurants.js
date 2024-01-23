import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const dateRangeSchema = new Schema({
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  weekDay: {
    type: Number,
    required: true,
  },
});

const restaurantsSchema = new Schema({
  accountId: {
    type: Schema.Types.ObjectId,
    ref: 'Accounts',
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  openHours: {
    type: [ dateRangeSchema ],
    required: true,
  },
}, {
  timestamps: true,
});

restaurantsSchema.plugin(paginate);

const RestaurantModel = mongoose.model('Restaurant', restaurantsSchema);

export {
  RestaurantModel
}