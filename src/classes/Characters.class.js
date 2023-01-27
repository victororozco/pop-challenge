'use strict';

import CharactersModel from '../models/Character.model';

class Characters {
  collection = 'characters';

  constructor(provider, data = {}) {
    /** DB Provider */
    this.provider = provider;

    this.id = data.id;
    this.name = data.name;
    this.status = data.status;
    this.species = data.species;
    this.gender = data.gender;
    this.origin = data.origin;
    this.location = data.location;
    this.image = data.image;
    this.setter_collection = this.collection;
    this.setter_balance = this.balance;
  }

  /**
   * @param {string} collection
   */
  set setter_collection(collection) {
    this.provider.setCollection(collection);
  }

  /**
   * @returns Mongo Collection
   */
  getCollectionModel = () => this.provider.getCollection();

  find = (query, opts = {}) => {
    return this.provider.find(query, opts);
  };

  findOne = (query) => {
    return this.provider.findOne(query);
  };

  findById = (id) => {
    return this.provider.findById(id);
  };

  create = async () => {
    const data = {
      id: this.id,
      name: this.name,
      status: this.status,
      species: this.species,
      gender: this.gender,
      origin: this.origin,
      location: this.location,
      image: this.image,
    };

    return await this.provider.create(CharactersModel, data);
  };

  update = async (query, data) => {
    return await this.provider.update(query, data);
  };

  insertMany = async (data, options) => {
    return this.provider.insertMany(data, options);
  }

  removeById = async (id) => {
    return this.provider.remove({ id: id });
  }
}

export default Characters;
