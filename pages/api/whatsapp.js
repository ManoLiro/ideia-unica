import dynamic from "next/dynamic";

function whatsapp(request,response){
    // Verificar se o método de solicitação é POST
    if (request.method === 'POST') {
      // Ler os dados da solicitação
      let requestData = '';
      request.on('data', chunk => {
        requestData += chunk;
      });
  
      // Manipular os dados recebidos
      request.on('end', () => {
        // Converter os dados recebidos para um objeto JSON
        const payload = JSON.parse(requestData);
  
        // Realizar ações com base nos dados recebidos
        // Aqui você pode processar os dados recebidos e fazer o que for necessário, como salvar em um banco de dados, enviar notificações, etc.
  
        // Responder à solicitação
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({ message: 'Webhook recebido com sucesso.' }));
      });
    } else {
      // Método de solicitação inválido
      response.statusCode = 405;
      response.setHeader('Content-Type', 'text/plain');
      response.end('Método não permitido. Utilize o método POST.');
    }
  }

export default whatsapp;