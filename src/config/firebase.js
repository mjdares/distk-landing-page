import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	// Your Firebase config from Firebase Console
	// Go to Project Settings > General > Your Apps > SDK setup and configuration
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
