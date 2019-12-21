var express = require('express');
var router = express.Router();
var Donhang = require('../models/Donhang.js');

router.get('/list/:id?', function(req,res,next){
	if(req.params.id){
		Donhang.getTongtienID(req.params.id, function(err,rows){
			if(err){
				res.json(err);
			}else{
				res.json(rows);
			}
		});
	}else{
		Donhang.getTongtien(function(err,rows){
			if(err){
				res.json(err);
			}else{
				res.json(rows);
			}
		});
	}
});


router.post('/create', function(req,res,next){
    Donhang.addDH(req.body, function(err,count){
        if(err){
                res.json(err);
            }
        else{
                res.json(req.body);
            }
        });
});

router.delete('/delete/:id?',function(req,res,next){
    Donhang.deleteDH(req.params.id, function(err,count){
        if(err){
            res.json(err);
        }
        else{
            res.json(count);
        }
    });
});

router.put('/update/:id?',function(req,res,next){
    Donhang.updateDH(req.params.id,req.body, function(err, rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});

module.exports = router;