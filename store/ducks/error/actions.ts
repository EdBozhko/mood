export const ERROR_INIT = 'ERROR_INIT';

export const errorInit = (data) => ({
  type: ERROR_INIT,
  payload: data,
});
