// 1. O componente vai chamar o GET_REQUEST (n° 7)
// 2. O GET_REQUEST vai chamar o saga
// 3. O saga assim que finalizar e conseguir me trazer os dados, vai chamar o GET_SUCCESS através da action Creators getPLayListSuccess (n° 30)
// 4. getPlayListSuccess vai me repassar os dados obtidos da API (n° 32) pro nosso Reducer (n° 20, 21) através do payload da action e vai remover o loading.

export const Types = {
  GET_REQUEST: 'playlistDetails/GET_REQUEST',
  GET_SUCCESS: 'playlistDetails/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function PlaylistDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getPlaylistDetailsRequest: id => ({ type: Types.GET_REQUEST, payload: { id } }),

  getPlaylistDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
