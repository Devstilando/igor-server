import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const accountSchema = new Schema({
  accountName: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  alternativeEmail: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

accountSchema.plugin(paginate);

const AccountModel = mongoose.model('Accounts', accountSchema);

export {
  AccountModel
}