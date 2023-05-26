import dynamic from "next/dynamic";
const http = require('http');
const url = require('url');

function whatsapp(request,response){
    const queryData = url.parse(request.url, true).query;
  
    // Acessar os parâmetros da solicitação GET
    const parameter1 = queryData.parameter1;
    const parameter2 = queryData.parameter2;
  
    // Realizar ações com base nos parâmetros recebidos
    // Aqui você pode processar os parâmetros da solicitação e fazer o que for necessário
  
    // Responder à solicitação
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Webhook GET recebido com sucesso.');
  }


export default whatsapp;