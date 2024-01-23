import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
    unique: true
  },
  theme: {
    type: String,
    default: 'dark'
  },
  homePage: {
    type: String,
    default: '/dashboard'
  },
  language: {
    type: String,
    default: 'es'
  },
  avatar: {
    type: String,
    default: '/img/avatars/avatar.svg'
  },
  pallette: {
    type: String,
    default: 'indigo'
  },
  favorites: {
    type: Array
  }
}, {
  timestamps: true,
});

profileSchema.plugin(paginate);

const ProfileModel = mongoose.model('Profile', profileSchema);

export {
  ProfileModel
}