let firebaseConfig = {
    apiKey: "AIzaSyBrmV86zLvAG3y6Nq-IEFCh7ykJbBs8Giw",
    authDomain: "teejhayblog-website.firebaseapp.com",
    projectId: "teejhayblog-website",
    storageBucket: "teejhayblog-website.appspot.com",
    messagingSenderId: "304350391820",
    appId: "1:304350391820:web:e801579f58f168f10ec829"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();