import { createAction } from 'redux-actions';

export const createReduxAction = reducerName => (actionName, payloadCreator = null) => {
  const newActionName = `ACTION/${reducerName}/${actionName}`;
  return createAction(newActionName, payloadCreator);
};

export const createSignalAction = reducerName => (actionName, payloadCreatorMap = {}) =>
  ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((acc, action) => {
    const data = acc;
    data[action] = `SIGNAL/${reducerName}/${actionName}/${action}`;
    const lowercaseAction = action.toLowerCase();
    data[lowercaseAction] = createAction(data[action], payloadCreatorMap[lowercaseAction]);
    return data;
  }, {});
