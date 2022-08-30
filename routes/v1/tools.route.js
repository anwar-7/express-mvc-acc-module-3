const express = require('express');
const toolsControllers = require('../../controllers/tools.controller');
const limiter = require('../../middleware/limiter');
const viewCount = require('../../middleware/viewCount');

const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('tools found on GET request');
// });

// router.post('/', (req, res) => {
//   res.send('tools post request found');
// });
router
  .route('/')
  /** 
 * @api {get} /tools All tools
 * @apiDescription Get all the tools
 * @apiPermission admin
 * 
 * @apiHeader {String} Authorization User's access token
 * 
 * @apiParam {Number{1-}}  [page-1] List page
 * @apiParam {Number{1-100}}  [limit-10] user per page
 * 
 * @apiSuccess {Object{}} all the tools.
 * 
 * @apiError (Unauthorized 401) Unauthorized Only authenticated users can access the data
 * @apiError (forbidden 403) Forbidden Only admins can access the data

*/
  .get(toolsControllers.getAllTools)
  /** 
 * @api {post} /tools save a tool
 * @apiDescription Post a tools
 * @apiPermission admin
 * 
 * @apiHeader {String} Authorization User's access token
 * 
 * @apiParam {Number{1-}}  [page-1] List page
 * @apiParam {Number{1-100}}  [limit-10] user per page
 * 
 * @apiSuccess {Object{}} form of the tools to save a tool.
 * 
 * @apiError (Unauthorized 401) Unauthorized Only authenticated users can access the data
 * @apiError (forbidden 403) Forbidden Only admins can access the data

*/
  .post(toolsControllers.saveATools);

router
  .route('/:id')
  .get(viewCount, limiter, toolsControllers.getToolDetail)
  .patch(toolsControllers.updateTool)
  .delete(toolsControllers.deleteTool);

module.exports = router;

let tool = {
  id: 1,
  name: 'hammer',
};

const newTool = { name: 'test' };

// put
tool = { name: 'test' };

// patch
tool = { id: '1', name: 'test' };
