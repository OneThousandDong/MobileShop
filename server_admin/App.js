const express = require('express');

const app = express();

app.set('port', process.env.PORT || 5000);


app.use(express.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

var connection = require('./Dbconnection.js');
var dienthoaiRouter = require('./routers/dienthoaiRouter.js');
var phukienRouter = require('./routers/phukienRouter.js')
var donhangRouter = require('./routers/donhangRouter.js');
var commentRouter = require('./routers/commentRouter.js');
var comment2Router = require('./routers/comment2Router.js');
var chitietRouter = require('./routers/ChitietdonhangRouter.js');
var nguoidungRouter = require('./routers/nguoidungRouter.js');
var hinhanhdienthoaiRouter = require('./routers/hinhanhdienthoaiRouter.js');
var hinhanhphukienRouter = require('./routers/hinhanhphukienRouter.js');
var cauhinhRouter = require('./routers/cauhinhdienthoaiRouter.js');

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

var storage = multer.diskStorage({
      destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
})

var upload = multer({ storage: storage }).single('file')

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

app.listen(app.get('port'),()=>{
  console.log("Start server on port "+ app.get('port'))
})