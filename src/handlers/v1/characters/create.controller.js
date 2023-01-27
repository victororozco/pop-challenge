'use strict';

import { Characters } from '../../../classes';
import mongoProvider from '../../../providers/mongo.provider';
import { handleError } from '../../../utils/handle-error.utils';

/**
 * Create a new Character
  * @param {Object} data
  * @returns {Object} response
*/
const createController = async (data) => {
  try {
    const provider = await new mongoProvider().getClient();
    const characters = new Characters(provider, data);

    const saveCharacters = await characters.create();

    if (saveCharacters && saveCharacters._id) {
      return {
        status: 201,
        response: {
          data: saveCharacters
        }
      };
    }

    throw handleError({
      message: 'Error creating new Character',
      errorCode: 'CH002',
      statusCode: 500
    })
  } catch (err) {
    console.error('src.handlers.v1.character.create.error', err);
    if (err?.response?.type === "error") throw err;

    throw handleError({
      message: 'Error creating new Character',
      errorCode: 'CH001',
      errorDetail: err.message ? err.message : err,
      statusCode: 500
    })
  }
};

export default createController;
