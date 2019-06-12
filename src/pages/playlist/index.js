import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

console.tron.log('teste');

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://www.billboard.com/files/media/Lady-Gaga-The-Fame-Monster-cover-billboard-1240.jpg"
        alt="Playlist"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Pop Forever</h1>
        <p>23 músicas</p>

        <button>PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Man Down</td>
          <td>Rihanna</td>
          <td>Loud</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Man Down</td>
          <td>Rihanna</td>
          <td>Loud</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Man Down</td>
          <td>Rihanna</td>
          <td>Loud</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Man Down</td>
          <td>Rihanna</td>
          <td>Loud</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Man Down</td>
          <td>Rihanna</td>
          <td>Loud</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Man Down</td>
          <td>Rihanna</td>
          <td>Loud</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Man Down</td>
          <td>Rihanna</td>
          <td>Loud</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);
export default Playlist;
