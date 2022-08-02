module.exports = async (req, res, next) => {
  const user = req.user;
  console.log(user);
  if (user.type !== "admin") {
    return res.status(400).send("You are not an authorized admin.");
  }
  next();
};
