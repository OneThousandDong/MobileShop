var express = require('express');
var router = express.Router();
var Comment = require('../models/Hinhanhdienthoai.js');

router.get('/list/:id?',function(req,res,next){
    if(req.params.id){
        Comment.getImageById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        Comment.getAllImage(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router.post('/create',function(req,res,next){
    Comment.addImage(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});

router.delete('/delete/:id',function(req,res,next){
    Comment.deleteImage(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router.put('/update/:id',function(req,res,next){
    Comment.updateImage(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});




module.exports=router;