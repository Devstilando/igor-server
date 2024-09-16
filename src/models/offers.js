import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const offersRulesSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Products',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  multiplier: {
    type: Number
  },
  offerPrice: {
    type: Number
  },
  discount: {
    type: Number
  },
  productBenefitId: {
    type: Schema.Types.ObjectId,
    ref: 'Products'
  }
}, {
  timestamps: true
})
 
const offersSchema = new Schema({
  name: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  discount: {
    type: Number
  },
  offerPrice: {
    type: Number
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Products'
  }],
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'ProductCategories'
  }],
  productPackages: [{
    type: Schema.Types.ObjectId,
    ref: 'Products'
  }]
}, {
  timestamps: true,
});

offersSchema.plugin(paginate);
offersRulesSchema.plugin(paginate);

const OffersSchema = mongoose.model('TableZones', offersSchema);
const OffersRulesSchema = mongoose.model('TableZones', offersRulesSchema);

export {
  OffersSchema,
  OffersRulesSchema
}