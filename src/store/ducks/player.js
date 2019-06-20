// Este duck  vai servir para armazenar e controlar toda parte da musica
// desde o que está tocando, a duração, tempo atual, passar e voltar música.

import Sound from 'react-sound';

// 1. O type de load vai servir para quando quisermos carregar uma música (ação de dar dois cliques na música)
export const Types = {
  LOAD: 'player/LOAD',
};

// 2. State
// Teremos uma propriedade chamada currentSong que vai armazenar a informação da música atual que está tocando
// E também um status do som, se está tocando, pausado, parado
const INITIAL_STATE = {
  currentSong: null,
  status: Sound.status.PLAYING,
};

// 3. Reducer Player
// Vou fazer uso do único Type que é o LOAD
export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      // Ele força o status para playing caso esteja em pause ou parado e passa o song
      return { ...state, currentSong: action.payload.song, status: Sound.status.PLAYING };
    default:
      return state;
  }
}

// 4. Creators
// Sua ação é retornar o song para o payload
export const Creators = {
  loadSong: song => ({
    type: Types.LOAD,
    payload: { song },
  }),
};
