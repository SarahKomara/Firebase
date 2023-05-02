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
	//   const app = initializeApp(firebaseConfig);

	firebase.initializeApp(firebaseConfig);

	// Create a root reference
	var storage = firebase.storage();
	var storageRef = storage.ref();

	// get elements
	const file     = document.getElementById('file');
	const upload   = document.getElementById('upload');	
	const download = document.getElementById('download');		
	const status   = document.getElementById('status');	
	const image    = document.getElementById('image');

	// upload file
	upload.addEventListener('click', e => {
		// Create a file reference
		var ref = storageRef.child('globe');
		let photo = document.getElementById("file").files[0];

		// upload
		ref.put(photo).then(function(snapshot) {
			console.log('Uploaded a blob or file!');
			status.innerHTML = 'Uploaded blob or file!'
		});
	});

	// download file
	download.addEventListener('click', e => {
		// file reference
		var ref = storage.ref('globe');

		ref.getDownloadURL().then(function(url) {
			// insert url into an <img> tag to "download"
			image.src = url;
			status.innerHTML = 'Downloaded blob or file!'			

		}).catch(function(error){console.log(error)});


	});


}());