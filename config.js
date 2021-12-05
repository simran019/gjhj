import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAJVs0Qj6C1PZkL-OyAXY_Wa9BP_GcAfE8",
  authDomain: "e-library-d956f.firebaseapp.com",
  projectId: "e-library-d956f",
  storageBucket: "e-library-d956f.appspot.com",
  messagingSenderId: "369622924537",
  appId: "1:369622924537:web:e94d841d428bdf3c763628"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAkp3gQdHbMPD5pCfHbBzIIgFpdCJXD5KM",
//   authDomain: "wily-app-v2.firebaseapp.com",
//   projectId: "wily-app-v2",
//   storageBucket: "wily-app-v2.appspot.com",
//   messagingSenderId: "772559744213",
//   appId: "1:772559744213:web:9417b879882f231175065c",
//   measurementId: "G-H8Y352W6Z2"
// };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
