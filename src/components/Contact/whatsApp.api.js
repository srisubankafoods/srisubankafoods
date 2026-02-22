export const sendToWhatsApp = (
  name,
  companyName,
  email,
  mobileNumber,
  message,
) => {
  const phoneNumber = "919042649000"; // India country code added

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  const text = `
*NEW WEBSITE ENQUIRY FROMS SRI SUBANKS FOODS*

*Date:* ${date}
*Time:* ${time}

----------------------------

*Name:* ${name}
*Company:* ${companyName}
*Email:* ${email}
*Phone:* ${mobileNumber}

----------------------------

*Requirements:*
${message}

----------------------------

_Message sent via Website Contact Form_
`;

  const encodedText = encodeURIComponent(text);

  const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  window.open(url, "_blank");
};
