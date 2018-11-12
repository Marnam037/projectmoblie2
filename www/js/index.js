$(function() {
  var config = {
    apiKey: "AIzaSyCF2SSE2-nqgGhef61oSoxB665Tbiq7WJU",
    authDomain: "shopee-16c81.firebaseapp.com",
    databaseURL: "https://shopee-16c81.firebaseio.com",
    projectId: "shopee-16c81",
    storageBucket: "shopee-16c81.appspot.com",
    messagingSenderId: "404787069897"
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      localStorage.setItem('username', user.displayName);
      window.location.href = 'home.html'
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });

  $("#google").click(function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  });
});
