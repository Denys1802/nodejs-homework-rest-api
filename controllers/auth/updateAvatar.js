const path = require("path");
const fs = require("fs/promises");

const { User } = require("../../models/user");

const avatarDir = path.join(__dirname, "..", "..", "public", "avatars");
console.log(avatarDir);
const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  const { path: tmpUpload, originalname } = req.file;

  console.log(req.file);

  const filename = `${_id}_${originalname}`;

  const resultUpload = { avatarDir, filename };

  await fs.rename(tmpUpload, resultUpload);

  const avatarURL = path.join("avatars", filename);

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
