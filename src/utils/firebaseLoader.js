// src/utils/firebaseLoader.js

const firebaseConfig = {
  // your config here
};

export const loadFirebase = async () => {
  const { initializeApp } = await import('firebase/app');
  const {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    RecaptchaVerifier,
    signInWithPhoneNumber,
  } = await import('firebase/auth');
  const { getFirestore } = await import('firebase/firestore');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  return {
    app,
    auth,
    getFirestore,
    signInWithPopup,
    GoogleAuthProvider,
    RecaptchaVerifier,
    signInWithPhoneNumber,
  };
};
