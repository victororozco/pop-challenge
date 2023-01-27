'use strict'

import {
  Characters
} from "../../../classes"
import mongoProvider from "../../../providers/mongo.provider"
import {
  handleError
} from "../../../utils/handle-error.utils"

/**
 * Find a list of characters
  * @param {Object} query
  * @returns {Object} response
*/
const findController = async (query = {}) => {
  try {
    const provider = await new mongoProvider().getClient()
    const characters = new Characters(provider)

    const opts = {
      limit: query.limit ? parseInt(query.limit) : 10,
      skip: query.skip ? parseInt(query.skip) : 0,
      sort: query.sort ? { [parseInt(query.sort)] : 1 } : { id: 1 }
    }

    delete query.limit;
    delete query.skip;
    delete query.sort;

    const data = await characters.find(query, opts);

    return {
      status: 200,
      response: {
        data
      }
    }

  } catch (err) {
    console.error('src.handlers.v1.character.find.error', err);
    if (err?.response?.type === "error") throw err;

    throw handleError({
      message: "Error obtaining character list",
      errorCode: "ACF001",
      errorDetail: err.message,
      statusCode: 500,
    })
  }
}

export default findController
