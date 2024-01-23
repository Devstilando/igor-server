import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const localAdminSchema = new Schema({
  accountId: {
    type: Schema.Types.ObjectId,
    ref: 'Accounts',
    required: true,
  },
  restaurants: {
    type: [ Schema.Types.ObjectId ],
    ref: 'Restaurants',
  },
  superAdmin: {
    type: Boolean
  }
})
const rolesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  policies: {
    type: Array,
  },
  localAdminPermissions: {
    type: [localAdminSchema]
  },
  superAdmin: {
    type: Boolean
  }
}, {
  timestamps: true,
});

rolesSchema.plugin(paginate);

const RoleModel = mongoose.model('Roles', rolesSchema);

export {
  RoleModel
}