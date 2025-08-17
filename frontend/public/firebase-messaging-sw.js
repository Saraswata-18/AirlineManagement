

importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "notification-bf689.firebaseapp.com",
  projectId: "notification-bf689",
  storageBucket: "notification-bf689.appspot.com",
  messagingSenderId: "545378563400",
  appId: "1:545378563400:web:419f9c900eeac28699af7d",
  measurementId: "G-VSN3QW1HC7"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png', // Make sure this icon path is correct and accessible
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
