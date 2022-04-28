var express = require('express');
var router = express.Router();
const memos=require('../memo.json');
let count=2;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(memos);
});

router.get('/:id', function(req, res, next) {
  const id=req.params.id;
  const result=memos.filter((memo) => {if(memo.id==id) {return true}});
  res.send(result[0]);
})

router.post('/', function(req, res, next) {
  const data=req.body.data;
  const memo={
    id: ++count,
    writer: "익명",
    title: data.title,
    memo: data.memo
  };
  memos.push(memo);
  res.send("200 OK");
})

module.exports = router;
