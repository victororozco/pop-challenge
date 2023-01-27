import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const CharacterModel = new Schema({
  id: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    },
    unique: true
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
    enum: ['Female', 'Male', 'Genderless', 'unknown'],
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
  const character = this;
  character.createdAt = new Date();
  character.updatedAt = new Date();
  next();
});

CharacterModel.pre('update', function (next) {
  const character = this;
  const data = character.$set;
  data.updatedAt = new Date();
  next();
});

CharacterModel.pre('findOneAndUpdate', function (next) {
  const character = this.getUpdate();
  const data = character.$set;
  data.updatedAt = new Date();
  next();
});

export default mongoose.model('Characters', CharacterModel);
