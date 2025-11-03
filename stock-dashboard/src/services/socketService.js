import { Client } from '@stomp/stompjs';

let stompClient = null;

export const connectSocket = (onMessageReceived, token, subscribedStocks) => {
  const socketUrl = `ws://localhost:8080/ws?token=${token}`;
  stompClient = new Client({
    brokerURL: socketUrl,        // Native WebSocket!
    reconnectDelay: 5000,
  });

  stompClient.onConnect = () => {
    subscribedStocks.forEach(symbol => {
      stompClient.subscribe(`/topic/prices.${symbol}`, message => {
        onMessageReceived(JSON.parse(message.body));
      });
    });
  };

  stompClient.activate();
};

export const disconnectSocket = () => {
  if (stompClient) stompClient.deactivate();
};
