window.onload = async () => {
  const user = await initPiSDK();
  if (!user) return;

  document.getElementById("welcome").innerText =
    "Welcome " + user.username;

  document.getElementById("loading").style.display = "none";
  document.getElementById("app").style.display = "block";

  autoInsertProfile(window.piUID, {
    name: "Nama Petani",
    phone: "08123456789",
    location: "Desa Contoh"
  });
};
