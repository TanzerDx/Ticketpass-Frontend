import { v4 as uuidv4 } from 'uuid';
import { Client } from '@stomp/stompjs';

let stompClient = null;
let notifications = [];

function setupStompClient(topics) {

  if (stompClient == null) {

      stompClient = new Client({
        brokerURL: 'ws://localhost:8080/ws'
      });

      stompClient.onConnect = () => {

        if (topics) {
          topics.forEach((concertId) => {
            stompClient.subscribe(`/topic/${concertId}`, (data) => {
              onMessageReceived(data);
            });
          });
        }
      };

      stompClient.activate();

  }
}

const onMessageReceived = (data) => {
  const message = JSON.parse(data.body);
  notifications.push(message);
}

function getNotifications() {
  return this.notifications;
}

function publishMessage(destination, message) {
  const payload = { id: uuidv4(), message };
  stompClient.publish({ destination: `${destination}`, body: JSON.stringify(payload) });
}

export default { 
    setupStompClient, 
    publishMessage,
    getNotifications,
    notifications
};