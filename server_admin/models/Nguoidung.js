var db = require('../Dbconnection.js');

var Nguoidung={
	getAllUser:function(callback){
		return db.query("Select * from nguoidung",callback);
	},
	getUserById:function(MaNguoiDung,callback){
		return db.query("select * from nguoidung where MaNguoiDung=?",[MaNguoiDung],callback);
	},
	getUserByEmail:function(nguoidung, callback){
		return db.query("select * from nguoidung where nguoidung.Email=? and nguoidung.Password=?", [nguoidung.Email,nguoidung.Password], callback);
	},
	addUS:function(nguoidung,callback){
		return db.query("Insert into nguoidung(MaNguoiDung,TenNguoiDung,TenDangNhap,Email,SDT,Password,Level) values(?,?,?,?,?,?,?)"
			,[nguoidung.MaNguoiDung, nguoidung.TenNguoiDung, nguoidung.TenDangNhap, nguoidung.Email, nguoidung.SDT, nguoidung.Password, nguoidung.Level],callback);
	},
	deleteUS:function(MaNguoiDung,callback){
		return db.query("delete from nguoidung where MaNguoiDung=?",[MaNguoiDung],callback);
	},
	updateUS:function(MaNguoiDung,nguoidung,callback){
		return db.query("update nguoidung set TenNguoiDung=?,TenDangNhap=?,Email=?,SDT=?,Password=?,Level=? where MaNguoiDung=?"
			,[nguoidung.TenNguoiDung, nguoidung.TenDangNhap, nguoidung.Email, nguoidung.SDT, nguoidung.Password, nguoidung.Level,MaNguoiDung],callback);
	}
};

module.exports=Nguoidung;