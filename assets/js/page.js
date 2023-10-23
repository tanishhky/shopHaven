
  gapi.load("auth2", function () {
		gapi.auth2
			.init({
				client_id:
					"382850597214-csh59512sf1fbmrduj1s8rsmtjdk6uf6.apps.googleusercontent.com",
			})
			.then(function () {
				// Your code that depends on Google Sign-In API goes here.
			});
	});


function startGoogleLogin() {
    console.log("startGoogleLogin")
	gapi.auth2.getAuthInstance().signIn().then(
		function (googleUser) {
			var profile = googleUser.getBasicProfile();
			console.log("Logged in as: " + profile.getName());
			// Handle user login here, e.g., send user data to your server.
		},
		function (error) {
			console.error("Google login error:", error);
		}
	);
}
