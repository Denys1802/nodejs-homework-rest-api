const handleMongooseError = (error, data, next) => {
  const { code, name } = error;
  console.log(code);
  console.log(name);
  const status = name === "MongoServerError" && code === 11000 ? 409 : 400;
  error.status = status;
  next();
};

module.exports = handleMongooseError;
