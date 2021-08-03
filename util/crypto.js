var CryptoJS = require("crypto-js");

const encrypt = (data) => {
  try {
    return CryptoJS.AES.encrypt(
      JSON.stringify(data),
      process.env.REACT_APP_MESSAGE_SECRET
    ).toString();
  } catch (e) {
    console.log(e);
  }
};

const decrypt = (data) => {
  try {
    const bytes = CryptoJS.AES.decrypt(
      data,
      process.env.REACT_APP_MESSAGE_SECRET
    );
    if (bytes.toString()) {
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return data;
  } catch (e) {
    return e;
  }
};

module.exports = { encrypt, decrypt };
