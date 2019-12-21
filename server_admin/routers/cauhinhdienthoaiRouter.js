var express = require('express');
var router = express.Router();
var Cauhinh = require('../models/Cauhinhdienthoai.js');

router.get('/list/:id?',function(req,res,next){
    if(req.params.id){
        Cauhinh.getCauhinhById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        Cauhinh.getAllCauhinh(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router.post('/create',function(req,res,next){
    Cauhinh.addCH(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});

router.delete('/delete/:id',function(req,res,next){
    Cauhinh.deleteCH(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router.put('/update/:id',function(req,res,next){
    Cauhinh.updateCH(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});

module.exports=router;