// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyBeUcCG_wMRi0GN4_D6BYrP5lL-vNA-Weg',
   authDomain: 'pagla-dentist.firebaseapp.com',
   projectId: 'pagla-dentist',
   storageBucket: 'pagla-dentist.firebasestorage.app',
   messagingSenderId: '76033161096',
   appId: '1:76033161096:web:636263671578a808962c3d',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app
