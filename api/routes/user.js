const express = require("express");
const router = express.Router();
const fs = require("fs");
const multer = require('multer');

const storage = multer.diskStorage(
{
    destination: function(req, file, cb)
    {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb)
    {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) =>
{
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
    {
        cb(null, true);
    }
    else
    {
        cb(null, false);
    }
};

const upload = multer(
{
    storage: storage,
    limits:
    {
        fileSize: 1024 * 1024 * 50
    },
    fileFilter: fileFilter
});


router.post("/uploads", upload.single('image'), (req, res, next) =>
{
    if (!req.file)
      return res.send('Please upload a file')
    var tempPath = req.file.path
      console.log(tempPath);
});

module.exports = router;
 