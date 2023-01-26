import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const CharacterModel = new Schema({
  id: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'unknown',
    enum: ['alive', 'dead', 'unknown']
  },
  species: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['female', 'male', 'genderless', 'unknown'],
  },
  origin: {
    type: String,
  },
  location: {
    type: String,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

CharacterModel.pre('save', async function (next) {
  const account = this;
  account.createdAt = new Date();
  account.updatedAt = new Date();
  next();
});

CharacterModel.pre('update', function (next) {
  const account = this;
  const data = account.$set;
  data.updatedAt = new Date();
  next();
});

CharacterModel.pre('findOneAndUpdate', function (next) {
  const account = this.getUpdate();
  const data = account.$set;
  data.updatedAt = new Date();
  next();
});

export default mongoose.model('Accounts', CharacterModel);
