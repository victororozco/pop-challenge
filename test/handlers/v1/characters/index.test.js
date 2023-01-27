import { expect } from 'chai';
import { mongoUrl } from '../../../../src/config';
/** Controller */
import {
  createCharacter,
  findCharacters,
  updateCharacter,
  removeCharacter,
} from '../../../../src/handlers/v1/characters';
/** Mongo Provider */
import mongoProvider from '../../../../src/providers/mongo.provider';
/** Mocks */
import CharactersMocks from '../../../mocks/characters.mock';

describe('Test Character Types handlers', async function () {
  const provider = new mongoProvider('characters', mongoUrl);

  before(async () => {
    await provider.newClient();
    await provider.insertMany(CharactersMocks.insert, {
      upsert: true
    });
  });

  after(async () => {
    provider.closeClient();
    // provider.drop();
  });

  /** Find a Character */
  it('Check the findCharacters data returned is valid ', async function () {
    await findCharacters().then((result) => {
      expect(result, 'result should be object').to.be.a('object');
      expect(result.status, 'result.status should be 200').to.equal(200);
      expect(result.response, 'result.response should be object').to.be.a(
        'object'
      );
      expect(
        result.response.data,
        'result.response.data should be array'
      ).to.be.a('array');
      expect(
        result.response.data,
        'result.response.data length should be 1'
      ).to.length.greaterThan(0);
    });
  });

  /** Create a Characters */
  it('Check the createCharacter returned Ok', async function () {
    await createCharacter(CharactersMocks.create).then((result) => {
      expect(result, 'result should be object').to.be.a('object');
      expect(result.status, 'result.status should be 200').to.equal(201);
      expect(result.response, 'result should be object').to.be.a('object');
      expect(
        result.response.data,
        'result.response.data should be object'
      ).to.be.a('object');
      expect(
        result.response.data.name,
        `result.response.data.name should be ${CharactersMocks.create.name}`
      ).to.equal(CharactersMocks.create.name);
    });
  });

  /** Update a Characters */
  it('Check the updateCharacter returned Ok', async function () {
    const updateData = {
      name: 'Victor',
      gender: 'Male',
    };
    await updateCharacter(CharactersMocks.create.id, updateData).then((result) => {
      expect(result, 'result should be object').to.be.a('object');
      expect(result.status, 'result.status should be 200').to.equal(200);
      expect(result.response, 'result should be object').to.be.a('object');
      expect(
        result.response.data,
        'result.response.data should be object'
      ).to.be.a('object');
      expect(
        result.response.data.name,
        `result.response.data.name should be ${updateData.name}`
      ).to.equal(updateData.name);
    });
  });

  /** Remove a Characters */
  it('Check the removeCharacter returned Ok', async function () {
    await removeCharacter(CharactersMocks.create.id).then((result) => {
      expect(result, 'result should be object').to.be.a('object');
      expect(result.status, 'result.status should be 200').to.equal(200);
      expect(result.response, 'result should be object').to.be.a('object');
      expect(
        result.response.removed,
        'result.response.removed should be true'
      ).to.equal(true);
    });
  });
});
