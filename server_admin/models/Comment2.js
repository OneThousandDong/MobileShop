var db = require('../Dbconnection.js');

var Comment2={
	getAllComment:function(callback){
		return db.query("Select * from comment2",callback);
	},
	getCommentById:function(IDCmt2,callback){
		return db.query("select * from comment2 where IDCmt2=?",[IDCmt2],callback);
	},
	addCM:function(comment2,callback){
		return db.query("Insert into comment2(IDCmt2,IDNguoiDung,IDCmt,NoiDung,ThoiGian,LoaiSanPham) values(?,?,?,?,?)"
			,[comment2.IDCmt2, comment2.IDNguoiDung, comment2.IDCmt, comment2.NoiDung, comment2.ThoiGian],callback);
	},
	deleteCM:function(IDCmt2,callback){
		return db.query("delete from comment2 where IDCmt2=?",[IDCmt2],callback);
	},
	updateCM:function(IDCmt2,comment2,callback){
		return db.query("update comment2 set IDNguoiDung=?,IDCmt=?,NoiDung=?,ThoiGian=?,LoaiSanPham=? where IDCmt2=?"
			,[comment2.IDNguoiDung, comment2.IDCmt, comment2.NoiDung, comment2.ThoiGian,comment2.LoaiSanPham,IDCmt2],callback);
	}
};

module.exports=Comment2;