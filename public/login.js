import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";


(function(){

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	// var firebaseConfig = {
	// 	apiKey: "AIzaSyBboZP3WoD5Os9mOv4QGWej9Cu5lmI-bIM",
	// 	authDomain: "course-92aae.firebaseapp.com",
	// 	databaseURL: "https://course-92aae.firebaseio.com",
	// 	projectId: "course-92aae",
	// 	storageBucket: "course-92aae.appspot.com",
	// 	messagingSenderId: "906967504618",
	// 	appId: "1:906967504618:web:a5b51551a229502dc7a993",
	// 	measurementId: "G-PWBBC8GN6B"
	// };
	// // Initialize Firebase
	// firebase.initializeApp(firebaseConfig);

	// Your web app's Firebase configuration
	const firebaseConfig = {
		apiKey: "AIzaSyBXdWRYbvazkajEluvysRzg7j4joUPyXAI",
		authDomain: "courso-m26.firebaseapp.com",
		projectId: "courso-m26",
		storageBucket: "courso-m26.appspot.com",
		messagingSenderId: "668417603407",
		appId: "1:668417603407:web:6d5ca954ecc634020ab73a"
	  };
	
	  // Initialize Firebase

	// firebase.initializeApp(firebaseConfig);

	const app = initializeApp(firebaseConfig);
	// Initialize Firebase Authentication and get a reference to the service
	const auth = getAuth(app);
  
	// TODO: initialize provider for google auth
	const provider = new GoogleAuthProvider();
  
	console.log("app initialized...");
  

	// get elements
	const email    = document.getElementById('email');
	const password = document.getElementById('password');
	const login    = document.getElementById('login');
	const signup   = document.getElementById('signup');
	const logout   = document.getElementById('logout');

	const loggedInStatus = document.getElementById("loggedInStatus");
	const googlelogin = document.getElementById("googlelogin");


// 	// login
// 	login.addEventListener('click', e => {
// 		const auth  = firebase.auth();		
// 		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
// 		promise.catch(e => console.log(e.message));
// 	});

// 	// signup
// 	signup.addEventListener('click', e => {
// 		// TODO: check for real email
// 		const auth  = firebase.auth();
// 		const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
// 		promise.catch(e => console.log(e.message));
// 	});

//     // logout
// 	logout.addEventListener('click', e => {
// 		firebase.auth().signOut();
// 	});

//     // login state
// 	firebase.auth().onAuthStateChanged(firebaseUser => {
// 		if(firebaseUser){
// 			console.log(firebaseUser);
// 			logout.style.display = 'inline';
// 			login.style.display  = 'none';
// 			signup.style.display = 'none';
// 		}
// 		else{
// 			console.log('User is not logged in');
// 			logout.style.display = 'none';			
// 			login.style.display  = 'inline';
// 			signup.style.display = 'inline';
// 		}
// 	});

// }());


/////// GOOGLE AUTH INFO


  // login
  login.addEventListener("click", (e) => {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // signup
  signup.addEventListener("click", (e) => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  //Google Login
  googlelogin.addEventListener("click", (e) => {
    console.log("google sign in clicked");
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("google user: ", user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.error(error);
      });
  });

  // logout
  logout.addEventListener("click", (e) => {
    auth.signOut();
  });

  // login state
  auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log(firebaseUser);
      loggedInStatus.innerText = `You are logged in using the following email: ${firebaseUser.email}`;
      logout.style.display = "inline";
      login.style.display = "none";
      signup.style.display = "none";
      email.style.display = "none";
      password.style.display = "none";
      googlelogin.style.display = "none";
    } else {
      console.log("User is not logged in");
      loggedInStatus.innerText = "You are not yet logged in";
      login.style.display = "inline";
      signup.style.display = "inline";
      email.style.display = "inline";
      googlelogin.style.display = "inline";
      password.style.display = "inline";
      logout.style.display = "none";
    }
  });
})();
