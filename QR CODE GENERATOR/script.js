function generateQR() {
  const text = document.getElementById("text").value.trim();
  const qrBox = document.getElementById("qrBox");

  qrBox.innerHTML = ""; // clear previous QR

  if (text === "") {
    alert("Please enter some text or URL!");
    return;
  }

  new QRCode(qrBox, {
    text: text,
    width: 200,
    height: 200
  });
}
