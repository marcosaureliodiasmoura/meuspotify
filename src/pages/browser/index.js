import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browser = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="playlists/1">
        <img
          src="https://www.billboard.com/files/media/Lady-Gaga-The-Fame-Monster-cover-billboard-1240.jpg"
          alt="Playlist"
        />
        <strong>As melhores do Pop</strong>
        <p>Relaxe enquanto você ouve os melhores do pop mundial!</p>
      </Playlist>

      <Playlist to="playlists/1">
        <img
          src="https://www.billboard.com/files/media/Lady-Gaga-The-Fame-Monster-cover-billboard-1240.jpg"
          alt="Playlist"
        />
        <strong>As melhores do Pop</strong>
        <p>Relaxe enquanto você ouve os melhores do pop mundial!</p>
      </Playlist>

      <Playlist to="playlists/1">
        <img
          src="https://www.billboard.com/files/media/Lady-Gaga-The-Fame-Monster-cover-billboard-1240.jpg"
          alt="Playlist"
        />
        <strong>As melhores do Pop</strong>
        <p>Relaxe enquanto você ouve os melhores do pop mundial!</p>
      </Playlist>

      <Playlist to="playlists/1">
        <img
          src="https://www.billboard.com/files/media/Lady-Gaga-The-Fame-Monster-cover-billboard-1240.jpg"
          alt="Playlist"
        />
        <strong>As melhores do Pop</strong>
        <p>Relaxe enquanto você ouve os melhores do pop mundial!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browser;
