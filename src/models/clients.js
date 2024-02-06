import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const clientsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

clientsSchema.plugin(paginate);

const ClientModel = mongoose.model('Clients', clientsSchema);

export {
  ClientModel
}