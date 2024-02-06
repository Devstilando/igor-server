import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const menuSchema = new Schema({
  name: {
    type: Number,
    required: true,
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'ProductCategories',
    required: true,
  }],
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurants',
    required: true,
  }
}, {
  timestamps: true,
});

menuSchema.plugin(paginate);

const MenuModel = mongoose.model('TableZones', menuSchema);

export {
  MenuModel
}