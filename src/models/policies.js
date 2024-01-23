import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const policyPermissionSchema = new Schema({
  entity: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    validator: [ (value) => (/^[0-9A-Fa-f]{1}$/).test(value), 'Invalid action, you need to specify a HEX digit' ],
    required: true,
  }
});

const policiesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  default: {
    type: Boolean,
    default: false,
    required: true,
  },
  accountOwner: {
    type: Schema.Types.ObjectId,
    ref: 'Accounts'
  },
  permissions: {
    type: [policyPermissionSchema],
    required: true,
  }
}, {
  timestamps: true,
});

policiesSchema.plugin(paginate);

const PolicyModel = mongoose.model('Policies', policiesSchema);

export {
  PolicyModel
}