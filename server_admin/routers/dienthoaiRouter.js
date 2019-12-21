var express = require('express');
var router = express.Router();
var Dienthoai = require('../models/Dienthoai.js');

router.get('/list/:id?',function(req,res,next){
    if(req.params.id){
        Dienthoai.getDienThoaiById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        Dienthoai.getAllDienThoai(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router.get('/hadienthoai/:id?',function(req,res,next){
        Dienthoai.getHADienThoaiById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
   
});

router.post('/create',function(req,res,next){
    if(req.body.GiaKhuyenMai == ''){
        req.body.GiaKhuyenMai = null;
    } 
    Dienthoai.addDT(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});

router.delete('/delete/:id',function(req,res,next){
    Dienthoai.deleteDT(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router.put('/update/:id',function(req,res,next){
    Dienthoai.updateDT(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});

module.exports=router;