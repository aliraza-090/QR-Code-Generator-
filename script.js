function generateQRCode() {
    let text = document.getElementById("text-input").value;
    let qrImage = document.getElementById("qr-image");

    if (text.trim() === "") {
        alert("Please enter text or a URL.");
        return;
    }

    let qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
    qrImage.src = qrCodeUrl;
    qrImage.style.display = "block";
}
