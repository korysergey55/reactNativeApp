
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBa_01NZRfJIU5MJks2yS9B5of5g01rXHY",
  authDomain: "reactnativeapp-3e83a.firebaseapp.com",
  projectId: "reactnativeapp-3e83a",
  storageBucket: "reactnativeapp-3e83a.firebasestorage.app",
  messagingSenderId: "1060764672188",
  appId: "1:1060764672188:web:d74b1ed0ed8d35715830b9",
  measurementId: "G-RNRC430TSB"
};

const app = initializeApp(firebaseConfig);

// Ініціалізація Auth з AsyncStorage для роботи редакс персистора
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
