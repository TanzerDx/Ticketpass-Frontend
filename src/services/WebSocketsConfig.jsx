import { v4 as uuidv4 } from 'uuid';
import { Client } from '@stomp/stompjs';
import {toast} from "react-toastify";

let stompClient = null;
let notifs = [];

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
  notifs.push(message);

  toast.success('You have received a new notification!', {
    position: toast.POSITION.BOTTOM_RIGHT,
});
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
    notifs
};


