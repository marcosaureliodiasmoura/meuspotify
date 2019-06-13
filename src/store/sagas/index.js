import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlaylistsTypes } from '../ducks/playlists';

import { getplaylists } from './playlists';

export default function* rootSaga() {
  yield all([takeLatest(PlaylistsTypes.GET_REQUEST, getplaylists)]);
}
