const multer = require('multer')

const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  },
})

function filterFiles (req, file, cb) {
  if (file.mimetype.indexOf('image') >= 0) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}
const upload = multer({
  storage,
  fileFilter: filterFiles,
})

module.exports = upload
