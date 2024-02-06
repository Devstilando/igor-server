import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const restaurantZonesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurants',
    required: true,
  },
  tables: [{
    type: Schema.Types.ObjectId,
    ref: 'Tables',
    required: true
  }]
}, {
  timestamps: true,
});

restaurantZonesSchema.plugin(paginate);

const RestaurantZoneModel = mongoose.model('RestaurantZones', restaurantZonesSchema);

export {
  RestaurantZoneModel
}