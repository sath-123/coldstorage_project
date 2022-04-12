// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const { ColdStorageData, ColdStorageID } = initSchema(schema);

export {
  ColdStorageData,
  ColdStorageID
};