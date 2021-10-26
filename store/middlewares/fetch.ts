import { data } from 'store/data';

export const createFetch =
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    const { type, payload, types, fetchData } = action;

    if (type === 'LOCAL_API') {
      return dispatch({ type: types, payload: data[payload] });
    }

    if (type !== 'API') return next(action);

    const [pendingType, successType, errorType] = types;

    let { endpoint, method = 'GET', body = null, headers = {}, props = {} } = fetchData;

    if (body) {
      body = JSON.stringify(body);
    }

    dispatch({ type: pendingType });

    try {
      const req = await fetch(process.env.SITE_URL + endpoint, { method, body, headers });

      try {
        const res = await req.json();
        dispatch({ type: successType, payload: res });
      } catch (error) {
        dispatch({ type: successType, payload: props });
      }

      return Promise.resolve(getState());
    } catch (error) {
      dispatch({ type: errorType, payload: error });
      return Promise.reject(error);
    }
  };
