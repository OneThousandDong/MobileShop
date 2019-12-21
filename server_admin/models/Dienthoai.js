var db = require('../Dbconnection.js');

var Dienthoai={
	getAllDienThoai:function(callback){
		return db.query("Select * from dienthoai",callback);
	},
	getDienThoaiById:function(MaDienThoai,callback){
		return db.query("select * from dienthoai where MaDienThoai=?",[MaDienThoai],callback);
	},
	getHADienThoaiById:function(MaDienThoai,callback){
		return db.query("select *, ha.DuongDan from dienthoai join hinhanhdienthoai as ha on ha.MaDT = dienthoai.MaDienThoai where MaDienThoai=?",[MaDienThoai],callback);
	},
	addDT:function(dienthoai,callback){
		return db.query("Insert into dienthoai(MaDienThoai,Hang,TenDienThoai,SoLuong,GiaBan,GiaKhuyenMai) values(?,?,?,?,?,?)",[dienthoai.MaDienThoai,dienthoai.Hang,dienthoai.TenDienThoai,dienthoai.SoLuong, dienthoai.GiaBan, dienthoai.GiaKhuyenMai],callback);
	},
	deleteDT:function(MaDienThoai,callback){
		return db.query("delete from dienthoai where MaDienThoai=?",[MaDienThoai],callback);
	},
	updateDT:function(MaDienThoai,dienthoai,callback){
		return db.query("update dienthoai set Hang=?,TenDienThoai=?,SoLuong=?,GiaBan=?,GiaKhuyenMai=? where MaDienThoai=?",[dienthoai.Hang,dienthoai.TenDienThoai,dienthoai.SoLuong, dienthoai.GiaBan, dienthoai.GiaKhuyenMai,MaDienThoai],callback);
	}
};
 module.exports=Dienthoai;