import http from 'k6/http';
import { sleep, check } from 'k6';
import { obterToken } from '../Helpers/authenticacao.js';
import {pegarBaseURL} from '../utiils/variaveis.js'

export const options = {
iteration: 1,
};

export default function() {
  const token = obterToken()

  const url =  pegarBaseURL() + '/transferencias';

  const payload = JSON.stringify({

    contaOrigem: 1 ,
    contaDestino: 2,
    valor:11 ,
    token: ""
  });
    
      const params = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      };
    
  let res = http.post(url, payload, params);

  
   check(res, {
    'Validar que o Status é 201': (r) => r.status === 201

  });
  sleep(1);
}


