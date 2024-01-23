import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const permissionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  roleId: {
    type: Schema.Types.ObjectId,
    ref: 'Roles',
    required: true,
  }
}, {
  timestamps: true,
});

permissionSchema.plugin(paginate);

const PermissionModel = mongoose.model('Permissions', permissionSchema);

export {
  PermissionModel
}