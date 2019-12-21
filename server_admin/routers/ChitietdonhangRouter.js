var express = require('express');
var router = express.Router();
var Comment = require('../models/Chitietdonhang.js');

router.get('/list/:id?',function(req,res,next){
    if(req.params.id){
        Comment.getTenSanPham(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        Comment.getAllChitiet(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router.get('/listid/:id?',function(req,res,next){
        Comment.getChitietById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
   
});
router.get('/listpk/:id?',function(req,res,next){

        Comment.getTenPK(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
  
});

router.get('/tongtien/:id?', function(req,res,next){
    Comment.getTongTien(req.params.id, function(err, rows){
        if(err){
            res.json(err);
            }
        else{
            res.json(rows);
        }
    });
});

router.post('/create',function(req,res,next){
    Comment.addCT(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});

router.delete('/delete/:id',function(req,res,next){
    Comment.deleteCT(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router.put('/update/:id',function(req,res,next){
    Comment.updateCT(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});

module.exports=router;