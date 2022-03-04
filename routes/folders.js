const express = require('express');
const router = express.Router();
// const getUsers = require("./../services/users.service");
const foldersService = require("../services/folders.service");



/* GET users listing. */
router.get('/', async function(req, res, next) {
  const foldersList = await foldersService.getFoldersFromBase();
  return res.send(foldersList)
});

router.post('/enterDir', async function(req, res, next) {
  console.log(req.body);
  await foldersService.enterDir(req.body.fullPath);
  const foldersList = await foldersService.getFolders();
  console.log(foldersList);
  return res.send(foldersList)
});

router.post('/createDir',async  function(req, res, next) {

  await foldersService.createDir(req.body.newFullPath);
  const foldersList = await foldersService.getFolders();
  console.log(foldersList);
  return res.send(foldersList)
  
});

module.exports = router;
