const multer = require("multer");
const path = require("path");
const Guid = require("guid");

const config = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename(_, file, callback) {
      const hash = Guid.raw().toString();
      const fileName = `${hash}-${file.originalname}`;
      callback(null, fileName);
    },
  }),
};

exports.image = multer(config);