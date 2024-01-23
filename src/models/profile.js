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
    default: 'dark',
    required: true,
  },
  homePage: {
    type: String,
    default: '/dashboard',
    required: true,
  },
  language: {
    type: String,
    default: 'en',
    required: true,
  },
  avatar: {
    type: String,
    default: '/assets/img/avatars/avatar.jpg',
    required: true,
  },
  pallette: {
    type: String,
    default: 'indigo',
    required: true,
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