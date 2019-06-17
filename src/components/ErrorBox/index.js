import React from 'react';

import CloseIcon from '../../assets/images/close.svg';
import { Container } from './styles';

const ErrorBox = () => (
  <Container>
    <p>Mensagem de erro</p>
    <button>
      <img src={CloseIcon} alt="fechar" />
    </button>
  </Container>
);

export default ErrorBox;
