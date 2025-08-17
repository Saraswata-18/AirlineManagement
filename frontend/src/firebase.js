
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';



const firebaseConfig = {

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "notification-bf689.firebaseapp.com",
  projectId: "notification-bf689",
  storageBucket: "notification-bf689.appspot.com",
  messagingSenderId: "545378563400",
  appId: "1:545378563400:web:419f9c900eeac28699af7d",
  measurementId: "G-VSN3QW1HC7"

};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: process.env.REACT_APP_vapidKey })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);

      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.error('An error occurred while retrieving token. ', err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
