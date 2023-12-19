import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Client } from '@stomp/stompjs';

let stompClient = null;
let notifications = [];

function setupStompClient(topics) {
  stompClient = new Client({
    brokerURL: 'ws://localhost:8080/ws',
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
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


const onMessageReceived = (data) => {
    const message = JSON.parse(data.body);
    
    notifications.push(message);
    localStorage.setItem("notifications", JSON.stringify(notifications));
    }
  

  function publishMessage(destination, message) {
    const payload = { id: uuidv4(), message };
    stompClient.publish({ destination: `${destination}`, body: JSON.stringify(payload) });
  }

export default { 
    setupStompClient, 
    publishMessage 
};