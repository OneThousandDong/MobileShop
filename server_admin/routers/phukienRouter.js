var express = require('express');
var router = express.Router();
var Phukien = require('../models/Phukien.js');

router.get('/list/:id?', function(req,res,next){
    if(req.params.id){
        Phukien.getPhuKienById(req.params.id, function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        Phukien.getAllPhuKien(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});

router.get('/haphukien/:id?',function(req,res,next){
        Phukien.getHAPhuKienById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
   
});

router.post('/create', function(req,res,next){
    if(req.body.GiaKhuyenMai == ''){
        req.body.GiaKhuyenMai = null;
    } 
    if(req.body.Hang == ''){
        req.body.Hang = null;
    }
    Phukien.addPK(req.body, function(err,count){
        console.log(req.body);
        if(err){
                res.json(err);
            }
        else{
                res.json(req.body);
            }
        });
});

router.delete('/delete/:id?',function(req,res,next){
    Phukien.deletePK(req.params.id, function(err,count){
        if(err){
            res.json(err);
        }
        else{
            res.json(count);
        }
    });
});

router.put('/update/:id?',function(req,res,next){
    Phukien.updatePK(req.params.id,req.body, function(err, rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});

module.exports=router;