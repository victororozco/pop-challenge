'use strict';

import { Characters } from '../../../classes';
import mongoProvider from '../../../providers/mongo.provider';
import { handleError } from '../../../utils/handle-error.utils';

/**
  * update a new Character
  * @param {Number} id
  * @param {Object} data
  * @returns {Object} response
*/
const updateController = async (id, data) => {
  try {
    if (Number.isInteger(id) === false) {
      id = parseInt(id);
    }
    const provider = await new mongoProvider().getClient();
    const characters = new Characters(provider);


    const updateCharacters = await characters.update({ id }, data);

    if (updateCharacters && updateCharacters.matchedCount === 1) {
      const findUpdateCharacters = await characters.findOne({ id });

      return {
        status: 200,
        response: {
          data: findUpdateCharacters,
        }
      };
    }

    throw handleError({
      message: 'Error updating the Character, not found',
      errorCode: 'CHU002',
      statusCode: 404,
    })
  } catch (err) {
    console.error('src.handlers.v1.character.update.error', err);
    if (err?.response?.type === "error") throw err;

    throw handleError({
      message: 'Error updating the Character',
      errorCode: 'CHU001',
      errorDetail: err.message ? err.message : err,
      statusCode: 500
    })
  }
};

export default updateController; 
