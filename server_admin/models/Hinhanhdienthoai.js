var db = require('../Dbconnection.js');

var Hinhanhdienthoai={
	getAllImage:function(callback){
		return db.query("Select * from hinhanhdienthoai",callback);
	},
	getImageById:function(MaDT,callback){
		return db.query("select * from hinhanhdienthoai where MaDT=?",[MaDT],callback);
	},
	addImage:function(hinhanhdienthoai,callback){
		return db.query("Insert into hinhanhdienthoai(MaDT,DuongDan) values(?,?)"
			,[hinhanhdienthoai.MaDT, hinhanhdienthoai.DuongDan],callback);
	},
	deleteImage:function(DuongDan,callback){
		return db.query("delete from hinhanhdienthoai where DuongDan=?",[DuongDan],callback);
	},
	updateImage:function(MaDT,hinhanhdienthoai,callback){
		return db.query("update hinhanhdienthoai set DuongDan=? where MaDT=?"
			,[hinhanhdienthoai.DuongDan,MaDT],callback);
	}
};

module.exports=Hinhanhdienthoai;