var db = require('../Dbconnection.js');

var Phukien={
	getAllPhuKien:function(callback){
		return db.query("Select * from phukien",callback);
	},
	getPhuKienById:function(MaPhuKien,callback){
		return db.query("select * from phukien where MaPhuKien=?",[MaPhuKien],callback);
	},
	getHAPhuKienById:function(MaPhuKien,callback){
		return db.query("select *, hinhanhphukien.DuongDan from phukien join hinhanhphukien on hinhanhphukien.MaPhuKien = phukien.MaPhuKien where phukien.MaPhuKien=?",[MaPhuKien],callback);
	},
	addPK:function(phukien,callback){
		return db.query("Insert into phukien(MaPhuKien,LoaiPhuKien,TenPhuKien,SoLuong,GiaBan,GiaKhuyenMai,Hang,ThongTin) values(?,?,?,?,?,?,?,?)"
						,[phukien.MaPhuKien, phukien.LoaiPhuKien, phukien.TenPhuKien, phukien.SoLuong, phukien.GiaBan, phukien.GiaKhuyenMai, phukien.Hang, phukien.ThongTin],callback);
	},
	deletePK:function(MaPhuKien,callback){
		return db.query("delete from phukien where MaPhuKien=?",[MaPhuKien],callback);
	},
	updatePK:function(MaPhuKien,phukien,callback){
		return db.query("update phukien set LoaiPhuKien=?,TenPhuKien=?,SoLuong=?,GiaBan=?,GiaKhuyenMai=?,Hang=?,ThongTin=? where MaPhuKien=?",[phukien.LoaiPhuKien, phukien.TenPhuKien, phukien.SoLuong, phukien.GiaBan, phukien.GiaKhuyenMai, phukien.Hang, phukien.ThongTin,MaPhuKien],callback);
	}
};
 module.exports=Phukien;