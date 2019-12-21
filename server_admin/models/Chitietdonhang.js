var db = require('../Dbconnection.js');

var Chitiet={
	getAllChitiet:function(callback){
		return db.query("Select * from chitietdonhang",callback);
	},
	getChitietById:function(MADonHang,callback){
		return db.query("select * from chitietdonhang where MADonHang=?",[MADonHang],callback);
	},
	getTongTien:function(MADonHang, callback){
		return db.query("select sum(GiaBan) as tongTien from chitietdonhang where MADonHang=?", [MADonHang],callback);
	},
	getTenSanPham:function(MADonHang,callback){
		return db.query("select Sum(ct.GiaBan* ct.SoLuong) as 'tien',ct.MADonHang, ct.LoaiSanPham, ct.Mau, ct.GiaBan,ct.SoLuong, dt.TenDienThoai,pk.TenPhuKien from chitietdonhang as ct join dienthoai as dt on ct.MaSanPham = dt.MaDienThoai join phukien as pk on ct.MaSanPham = pk.MaPhuKien where MADonHang=?", [MADonHang],callback );
	},
	getTenPK:function(MADonHang,callback){
		return db.query("select ct.MADonHang, ct.LoaiSanPham, ct.Mau, ct.GiaBan, pk.TenPhuKien from chitietdonhang as ct join phukien as pk on ct.MaSanPham = pk.MaPhuKien where ct.LoaiSanPham = 'Phụ kiện' AND MADonHang=?", [MADonHang],callback );
	},
	addCT:function(chitietdonhang,callback){
		return db.query("Insert into chitietdonhang(MADonHang,LoaiSanPham,MaSanPham,Mau,GiaBan,SoLuong) values(?,?,?,?,?)"
			,[chitietdonhang.MADonHang, chitietdonhang.LoaiSanPham, chitietdonhang.MaSanPham, chitietdonhang.Mau, chitietdonhang.GiaBan, chitietdonhang.SoLuong],callback);
	},
	deleteCT:function(MADonHang,callback){
		return db.query("delete from chitietdonhang where MADonHang=?",[MADonHang],callback);
	},
	updateCT:function(MADonHang,chitietdonhang,callback){
		return db.query("update comment set LoaiSanPham=?,MaSanPham=?,Mau=?,GiaBan=?,SoLuong=? where MADonHang=?"
			,[chitietdonhang.LoaiSanPham, chitietdonhang.MaSanPham, chitietdonhang.Mau, chitietdonhang.GiaBan, chitietdonhang.SoLuong,MADonHang],callback);
	}
};

module.exports=Chitiet;