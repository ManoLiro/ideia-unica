import { useEffect } from 'react';
import { Server } from 'ws';

export default function WhatsappWebhook() {
  useEffect(() => {
    const socket = new WebSocket('https://ideia-unica-nu-nine.vercel.app/api/whatsapp');

    socket.onopen = () => {
      console.log('Conexão estabelecida com o servidor WebSocket.');
    };

    socket.onmessage = event => {
      const message = JSON.parse(event.data);
      console.log('Nova mensagem recebida:', message);
      // Faça o que for necessário com a mensagem em tempo real
    };

    socket.onclose = event => {
      console.log('Conexão WebSocket fechada. Código:', event.code);
    };

    return () => {
      socket.close();
    };
  }, []);

  return <div>Webhook em tempo real com Next.js e WebSocket para a rota /api/whatsapp</div>;
}

export async function getServerSideProps({ req, res }) {
  const wss = new Server({ noServer: true });

  wss.on('connection', socket => {
    socket.on('message', message => {
      // Aqui você pode processar a mensagem recebida e enviar para os clientes conectados em tempo real
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(message));
        }
      });
    });
  });

  res.socket.server.wss = wss;

  return { props: {} };
}
