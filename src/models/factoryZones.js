import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const factoryZonesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurants',
    required: true,
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'ProductCategories',
    required: true
  }]
}, {
  timestamps: true,
});

factoryZonesSchema.plugin(paginate);

const FactoryZoneModel = mongoose.model('FactoryZones', factoryZonesSchema);

export {
  FactoryZoneModel
}