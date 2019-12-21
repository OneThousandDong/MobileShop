var db = require('../Dbconnection.js');

var Comment={
	getAllComment:function(callback){
		return db.query("Select * from comment",callback);
	},
	getCommentById:function(IDCmt,callback){
		return db.query("select * from comment where IDCmt=?",[IDCmt],callback);
	},
	addCM:function(comment,callback){
		return db.query("Insert into comment(IDCmt,MaKhachHang,LoaiSanPham,MaSanPham,NoiDung,ThoiGian) values(?,?,?,?,?,?)"
			,[comment.IDCmt, comment.MaKhachHang, comment.LoaiSanPham, comment.MaSanPham, comment.NoiDung, comment.ThoiGian],callback);
	},
	deleteCM:function(IDCmt,callback){
		return db.query("delete from comment where IDCmt=?",[IDCmt],callback);
	},
	updateCM:function(IDCmt,comment,callback){
		return db.query("update comment set MaKhachHang=?,LoaiSanPham=?,MaSanPham=?,NoiDung=?,ThoiGian=? where IDCmt=?"
			,[comment.MaKhachHang, comment.LoaiSanPham, comment.MaSanPham, comment.NoiDung, comment.ThoiGian,IDCmt],callback);
	}
};

module.exports=Comment;