'use strict'

import {
  Characters
} from "../../../classes"
import mongoProvider from "../../../providers/mongo.provider"
import {
  handleError
} from "../../../utils/handle-error.utils"

/**
 * Remove a character by id
  * @param {Number} id
  * @returns {Object} response
*/
const removeController = async (id) => {
  try {

    if (Number.isInteger(id) === false) {
      id = parseInt(id);
    } 

    const provider = await new mongoProvider().getClient()
    const characters = new Characters(provider)

    const findCharacter = await characters.findOne({ id })
    if (!findCharacter) {
      throw handleError({
        message: "Character not found",
        errorCode: "CHR002",
        statusCode: 404,
      })
    }

    await characters.removeById(id)

    return {
      status: 200,
      response: {
        removed: true
      }
    }

  } catch (err) {
    console.error('src.handlers.v1.account.remove.error', err)
    if (err?.response?.type === "error") throw err;

    throw handleError({
      message: "Error removing character",
      errorCode: "CHR001",
      errorDetail: err.message,
      statusCode: 500,
    })
  }
}

export default removeController

