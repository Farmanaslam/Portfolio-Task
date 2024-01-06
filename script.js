const sendMail = (e) => {
  alert("Mail sent");
  e.preventDefault();
  const message = encodeURIComponent(document.getElementById("message").value);
  Email.send({
    Host: "smtp.yourisp.com",
    Username: "farmanaslam674@gmail.com",
    Password: "farman11",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: encodeURIComponent("This is my subject"),
    Body: message,
  })
    .then((message) => alert(message))
    .catch((err) => {
      alert(err);
    });
};
