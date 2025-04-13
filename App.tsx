import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation/routes';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import api from './src/screen/InterceptorsScreen';

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBleAm783SA4h1ap__ZQ6GtxnINHNJA2q4",
    authDomain: "firebaseapp",
    databaseURL: "https://branchcraft-edd97-default-rtdb.firebaseio.com",
    projectId: "branchcraft-edd97",
    storageBucket: "branchcraft-edd97.appspot.com",
    messagingSenderId: "1055433782606",
    appId: "1:124420024164:android:033aa9ae7da4bb63d3fc71",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      getToken();
    }
  };

  const getToken = async () => {
    try {
      const token = await messaging().getToken();
      console.log('Token : ', token);
    } catch (error) {
      console.error('Error getting FCM token:', error);
    }
  };

  useEffect(() => {
    requestUserPermission();
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('');
        console.log(JSON.stringify(response, null, 2));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (

    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  );
};

export default App;
// import React from 'react';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/messaging';
// import PushNotification from 'react-native-push-notification';
// import { Platform } from 'react-native';
// import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

// const App = () => {
//   const getToken = () => {
//     firebase.messaging()
//       .getToken(firebase.app().options.messagingSenderId)
//       .then(x => console.log(x))
//       .catch(e => console.log(e));
//   };
//   const registerForRemoteMessages = () => {
//     firebase
//       .messaging()
//       .registerDeviceForRemoteMessages()
//       .then(() => {
//         console.log('Registered');
//         requestPermissions();
//       })
//       .catch(e => console.log(e));
//   };
//   const requestPermissions = () => {
//     firebase
//       .messaging()
//       .requestPermission()
//       .then((status: FirebaseMessagingTypes.AuthorizationStatus) => {
//         if (status === 1) {
//           console.log('Authorized');
//           onMessage();
//         } else {
//           console.log('Not authorized');
//         }
//       })
//       .catch(e => console.log(e));
//   };
//   const onMessage = () => {
//     firebase.messaging()
//       .onMessage(response => {
//         showNotification(response.data!.notification);
//       });
//   };
//   const showNotification = (notification: any) => {
//     console.log('Showing notification');
//     console.log(JSON.stringify(notification));
//     PushNotification.localNotification({
//       title: notification.title, message: notification.body!,
//     });
//   };
//   getToken();
//   if (Platform.OS === 'ios') {
//     registerForRemoteMessages();
//   } else {
//     onMessage();
//   }
//   return <></>;
// };

// export default App;