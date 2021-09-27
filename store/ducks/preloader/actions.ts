export const PRELOADER_INIT = 'PRELOADER_INIT';

export const preloaderInit = (data) => ({
  type: PRELOADER_INIT,
  payload: data,
});
