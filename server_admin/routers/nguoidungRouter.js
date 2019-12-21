var express = require('express');
var router = express.Router();
var Comment = require('../models/Nguoidung.js');
var db = require('../Dbconnection.js');
router.get('/list/:id?',function(req,res,next){
    if(req.params.id){
        Comment.getUserById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        Comment.getAllUser(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router.post("/login", function(req, res, next) {
  
    Comment.getUserByEmail(req.body,function(err,result){
      console.log(req.body)
      console.log(result)
        // if(req.body.Email == 'quang@99.com'){
        //    res.status(200);
        //   console.log('succes')
        // }
        if(result.length !== 0){
          if(result[0].Level === 2){
            res.json(result);
          }
        } 

    })
});


// router.post('/create',function(req,res,next){
//     Comment.addUS(req.body,function(err,count){
//         if(err){
//             res.json(err);
//         } else{
//             res.json(req.body);
//         }
//     });
// });

router.delete('/delete/:id',function(req,res,next){
    Comment.deleteUS(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router.put('/update/:id',function(req,res,next){
    Comment.updateUS(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});

module.exports=router;