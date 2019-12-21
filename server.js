const express = require('express');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.static('uploads'))

app.use(express.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

var connection = require('./server_admin/Dbconnection.js');
var dienthoaiRouter = require('./server_admin/routers/dienthoaiRouter.js');
var phukienRouter = require('./server_admin/routers/phukienRouter.js')
var donhangRouter = require('./server_admin/routers/donhangRouter.js');
var commentRouter = require('./server_admin/routers/commentRouter.js');
var comment2Router = require('./server_admin/routers/comment2Router.js');
var chitietRouter = require('./server_admin/routers/ChitietdonhangRouter.js');
var nguoidungRouter = require('./server_admin/routers/nguoidungRouter.js');
var hinhanhdienthoaiRouter = require('./server_admin/routers/hinhanhdienthoaiRouter.js');
var hinhanhphukienRouter = require('./server_admin/routers/hinhanhphukienRouter.js');
var cauhinhRouter = require('./server_admin/routers/cauhinhdienthoaiRouter.js');

app.use('/dienthoai',dienthoaiRouter);
app.use('/phukien',phukienRouter);
app.use('/donhang',donhangRouter);
app.use('/comment',commentRouter);
app.use('/comment2',comment2Router);
app.use('/chitietdonhang',chitietRouter);
app.use('/nguoidung',nguoidungRouter);
app.use('/hadienthoai',hinhanhdienthoaiRouter);
app.use('/haphukien',hinhanhphukienRouter);
app.use('/cauhinh', cauhinhRouter);


var path = require("path");
var multer = require("multer");
var cors = require('cors');
app.use(cors());

const storage = multer.diskStorage({
   destination: "./uploads/phones",
   filename: function(req, file, cb){
      cb(null, file.originalname)
   }
});

var upload = multer({ storage: storage }).array('file')

app.post('/uploadimage',function(req, res) {

    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

});


const storagepk = multer.diskStorage({
   destination: "./uploads/accessories",
   filename: function(req, file, cb){
      cb(null, file.originalname)
   }
});

var uploadpk = multer({ storage: storagepk }).array('file')

app.post('/uploadpk',function(req, res) {

    uploadpk(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

});

app.listen(app.get('port'),()=>{
  console.log("Start server on port "+ app.get('port'))
})