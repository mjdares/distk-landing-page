import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyAHrV9ng_Rb_WdYU9Q83UthJEt0fc3itFI",
	authDomain: "distk-website.firebaseapp.com",
	projectId: "distk-website",
	storageBucket: "distk-website.firebasestorage.app",
	messagingSenderId: "147112883603",
	appId: "1:147112883603:web:c5a4009f4bbb9e2e2aa466",
	measurementId: "G-BWDTQ1JPL2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
