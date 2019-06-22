// Este duck  vai servir para armazenar e controlar toda parte da musica
// desde o que está tocando, a duração, tempo atual, passar e voltar música.

import Sound from 'react-sound';

// 1. O type de load vai servir para quando quisermos carregar uma música (ação de dar dois cliques na música)
export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  NEXT: 'player/NEXT',
  PREV: 'player/PREV',
  PLAYING: 'player/PLAYING',
};

// 2. State
// Teremos uma propriedade chamada currentSong que vai armazenar a informação da música atual que está tocando
// E também um status do som, se está tocando, pausado, parado
const INITIAL_STATE = {
  currentSong: null,
  list: [],
  status: Sound.status.PLAYING,
  position: null,
  duration: null,
};

// 3. Reducer Player
// Vou fazer uso do único Type que é o LOAD
export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      // Ele força o status para playing caso esteja em pause ou parado e passa o song
      return {
        ...state,
        currentSong: action.payload.song,
        list: action.payload.list,
        status: Sound.status.PLAYING,
      };
    case Types.PLAY:
      return { ...state, status: Sound.status.PLAYING };
    case Types.PAUSE:
      return { ...state, status: Sound.status.PAUSE };
    case Types.PREV: {
      const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id);
      const prev = state.list[currentIndex - 1];

      if (prev) {
        return { ...state, currentSong: prev, status: Sound.status.PLAYING };
      }

      return state;
    }

    case Types.NEXT: {
      const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id);
      const next = state.list[currentIndex + 1];

      if (next) {
        return { ...state, currentSong: next, status: Sound.status.PLAYING };
      }
      return state;
    }
    case Types.PLAYING:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

// 4. Creators
// Sua ação é retornar o song para o payload no loadSong.
export const Creators = {
  loadSong: (song, list) => ({
    type: Types.LOAD,
    payload: { song, list },
  }),
  play: () => ({ type: Types.PLAY }),
  pause: () => ({ type: Types.PAUSE }),
  next: () => ({ type: Types.NEXT }),
  prev: () => ({ type: Types.PREV }),
  playing: ({ position, duration }) => ({
    type: Types.PLAYING,
    payload: { position, duration },
  }),
};
