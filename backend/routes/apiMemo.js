var express = require('express');
var router = express.Router();
let memos=require('../memo.json');
let count=2;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(memos);
});

router.get('/:id', function(req, res, next) {
  const id=req.params.id;
  const result=memos.filter((memo) => {if(memo.id==id) {return true}});
  res.send(result[0]);
});

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
});

router.delete('/:id', function(req, res, next) {
  const id=req.params.id;
  memos=memos.filter((memo) => {if(memo.id!=id) {return true}});
  res.send(memos);
});

router.put('/:id', function(req, res, next) {
  const data=req.body.data;
  const id=req.params.id;
  let target=memos.findIndex((memo) => memo.id==id);
  memos[target].title=data.title;
  memos[target].memo=data.memo;

  res.send("200 OK");
})

module.exports = router;
