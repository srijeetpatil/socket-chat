const extractor = (req) => {
  let token = req.headers.authorization;
  if (token) token = token.split("Token ")[1];
  else return false;
  if (token) return token;
  else return false;
};

module.exports = extractor;
