export const createReducer = reducers => (state, action) => {
  const reducer = reducers[action.type] || null;

  return reducer ? reducer(state, action) : state;
};
