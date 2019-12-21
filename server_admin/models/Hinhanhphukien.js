var db = require('../Dbconnection.js');

var Hinhanhphukien={
	getAllImage:function(callback){
		return db.query("Select * from hinhanhphukien",callback);
	},
	getImageById:function(MaPhuKien,callback){
		return db.query("select * from hinhanhphukien where MaPhuKien=?",[MaPhuKien],callback);
	},
	addImage:function(hinhanhphukien,callback){
		return db.query("Insert into hinhanhphukien(MaPhuKien,DuongDan) values(?,?)"
			,[hinhanhphukien.MaPhuKien, hinhanhphukien.DuongDan],callback);
	},
	deleteImage:function(MaPhuKien,callback){
		return db.query("delete from hinhanhphukien where MaPhuKien=?",[MaPhuKien],callback);
	},
	updateImage:function(MaPhuKien,hinhanhphukien,callback){
		return db.query("update hinhanhphukien set DuongDan=? where MaPhuKien=?"
			,[hinhanhphukien.DuongDan,MaPhuKien],callback);
	}
};

module.exports=Hinhanhphukien;