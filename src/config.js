function initPiSDK() {
  if (!window.Pi) {
    document.getElementById("loading").innerText =
      "Buka lewat Pi Browser";
    return null;
  }

  Pi.init({
    version: "2.0",
    sandbox: true
  });

  return Pi.authenticate(["username"], () => {})
    .then(auth => {
      window.piUID = auth.user.uid;
      window.piUser = auth.user;
      return auth.user;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
}

function autoInsertProfile(piUID, profile) {
  console.log("PROFILE:", piUID, profile);
  // nanti backend
}
