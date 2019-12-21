var db = require('../Dbconnection.js');

var Donhang = {
	getAllDonHang:function(callback){
		return db.query("Select * from donhang",callback);
	},
	getTongtien:function(callback){
		return db.query("select *, (select sum(GiaBan) from chitietdonhang where chitietdonhang.MADonHang = donhang.MADonHang) as Tongtien from donhang",callback);
	},
	getTongtienID:function(MADonHang,callback){
		return db.query("select *, (select sum(chitietdonhang.GiaBan * chitietdonhang.SoLuong) from chitietdonhang where chitietdonhang.MADonHang = donhang.MADonHang) as Tongtien from donhang where MADonHang=?",[MADonHang],callback);
	},
	getDonHangById:function(MADonHang,callback){
		return db.query("select * from donhang where MADonHang=?",[MADonHang],callback);
	},
	deleteDH:function(MADonHang,callback){
		return db.query("delete from donhang where MADonHang=?",[MADonHang],callback);
	},
	updateDH:function(MADonHang,donhang,callback){
		return db.query("update donhang set MADonHang=?,DiaChi=?,NgayDatHang=?,NgayChuyenHang=?,NgayNhanHang=?,TrangThai=?,GhiChu=? where MADonHang=?"
			,[donhang.DiaChi, donhang.NgayDatHang, donhang.NgayChuyenHang, donhang.NgayNhanHang, donhang.TrangThai, donhang.GhiChu,MADonHang],callback);
	}
};

module.exports = Donhang;