function generateQR() {
    let upiID = document.getElementById("upi_id").value.trim();
    let amount = document.getElementById("amount").value.trim();
    let qrCodeDiv = document.getElementById("qrCode");

    if (!upiID) {
        alert("Please enter a valid UPI ID");
        return;
    }

    if (!amount || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    // Clear previous QR code
    qrCodeDiv.innerHTML = "";

    // Create UPI QR Code URL for PhonePe
    let upiURL = `upi://pay?pa=${upiID}&pn=PhonePe&mc=&tid=&tr=&tn=Payment&am=${amount}&cu=INR`;

    // Generate QR code
    new QRCode(qrCodeDiv, {
        text: upiURL,
        width: 200,
        height: 200
    });
}
