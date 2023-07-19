import Axios from 'axios';

function consultarDados() {
    Axios.get('http://localhost:1010/hoteis')
      .then(response => response.json());
  }