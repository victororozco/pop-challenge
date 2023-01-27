'use strict';

import express from 'express';
import Debug from 'debug';

/** Utils */
import { handleErrorWithResponse } from '../../utils/handle-error.utils';

/** Handlers */
import { createCharacter, findCharacters, removeCharacter, updateCharacter } from '../../handlers/v1/characters';

const app = express.Router();
const debug = Debug('PopEstate:routes:v1:characters');

app.post('/', async (req, res) => {
  try {
    debug('Create new character.');

    const create = await createCharacter(req.body);

    return res.status(create.status).json({
      ...create.response
    });
  } catch (err) {
    console.error(err);
    return handleErrorWithResponse(
      {
        status: err.status || 500,
        message: err.response.message
          ? err.response.message
          : 'Error creating new Character',
        messageWithCode: err.response.messageWithCode
          ? err.response.messageWithCode
          : null,
        errorDetail: err.response.errorDetail ? err.response.errorDetail : null
      },
      {},
      res
    );
  }
});

app.get('/', async (req, res) => {
  try {
    debug('Get all characters.');
    const find = await findCharacters(req.query);

    return res.status(find.status).json({
      ...find.response
    });
  } catch (err) {
    console.error(err);
    return handleErrorWithResponse(
      {
        status: err.status || 500,
        message: err.response.message
          ? err.response.message
          : 'Error obtaining characters list',
        messageWithCode: err.response.messageWithCode
          ? err.response.messageWithCode
          : null,
        errorDetail: err.response.errorDetail ? err.response.errorDetail : null
      },
      {},
      res
    );
  }
});

app.put('/:id', async (req, res) => {
  try {
    debug('Get all characters.');

    const find = await updateCharacter(req.params.id, req.body)

    return res.status(find.status).json({
      ...find.response
    });
  } catch (err) {
    console.error(err);
    return handleErrorWithResponse(
      {
        status: err.status || 500,
        message: err.response.message
          ? err.response.message
          : 'Error updating the characters',
        messageWithCode: err.response.messageWithCode
          ? err.response.messageWithCode
          : null,
        errorDetail: err.response.errorDetail ? err.response.errorDetail : null
      },
      {},
      res
    );
  }
});

app.delete('/:id', async (req, res) => {
  try {
    debug('Remove a character by ID.');

    const find = await removeCharacter(req.params.id);

    return res.status(find.status).json({
      ...find.response
    });
  } catch (err) {
    console.error('errror-here', err);
    return handleErrorWithResponse(
      {
        status: err.status || 500,
        message: err.response.message
          ? err.response.message
          : 'Error deleting the character',
        messageWithCode: err.response.messageWithCode
          ? err.response.messageWithCode
          : null,
        errorDetail: err.response.errorDetail ? err.response.errorDetail : null
      },
      {},
      res
    );
  }
});

export default app;
