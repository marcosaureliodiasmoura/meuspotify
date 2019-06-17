import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlayListsActions } from '../ducks/playlists';
import { Creators as ErrorActions } from '../ducks/error';

export function* getplaylists() {
  try {
    // É aqui que eu envio os dados pro meu Creators de Success
    const response = yield call(api.get, 'playlists');
    yield put(PlayListsActions.getPlaylistSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível obter os detalhes da playlist'));
  }
}
