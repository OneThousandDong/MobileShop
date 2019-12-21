var db = require('../Dbconnection.js');

var Cauhinh={
	getAllCauhinh:function(callback){
		return db.query("Select * from cauhinhdienthoai",callback);
	},
	getCauhinhById:function(MaDienThoai,callback){
		return db.query("select * from cauhinhdienthoai where MaDienThoai=?",[MaDienThoai],callback);
	},
	addCH:function(cauhinhdienthoai,callback){
		return db.query("Insert into cauhinhdienthoai(MaDienThoai,CongNgheManHinh,DoPhanGiaiMH,DoRongMH,MatKinh,DoPhanGiaiCamSau,QuayPhimCamSau,DenFlashCamSau,NangCaoCamSau,DoPhanGiaiCamTruoc,VideoCall,ThongTinCamTruoc,HeDieuHanh,Chipset,CPU,GPU,RAM,ROM,TheNhoNgoai,MangDIDong,SIM,WIFI,GPS,Bluetooth,KetNoi,JackTaiNghe,KetNoiKhac,ThietKe,ChatLieu,KichThuoc,TrongLuong,DungLuongPin,LoaiPin,CongNghePin,BaoMat,TinhNangDacBiet,GhiAm,Radio,XemPhim,NgheNhac,ThoiDIemPhatHanh) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[cauhinhdienthoai.MaDienThoai, cauhinhdienthoai.CongNgheManHinh, cauhinhdienthoai.DoPhanGiaiMH, cauhinhdienthoai.DoRongMH, cauhinhdienthoai.MatKinh,cauhinhdienthoai.DoPhanGiaiCamSau,cauhinhdienthoai.QuayPhimCamSau, cauhinhdienthoai.DenFlashCamSau, cauhinhdienthoai.NangCaoCamSau,cauhinhdienthoai.DoPhanGiaiCamTruoc,cauhinhdienthoai.VideoCall, cauhinhdienthoai.ThongTinCamTruoc,
		cauhinhdienthoai.HeDieuHanh, cauhinhdienthoai.Chipset,cauhinhdienthoai.CPU, cauhinhdienthoai.GPU, 
		cauhinhdienthoai.RAM, cauhinhdienthoai.ROM,cauhinhdienthoai.TheNhoNgoai, cauhinhdienthoai.MangDIDong, 
		cauhinhdienthoai.SIM, cauhinhdienthoai.WIFI,cauhinhdienthoai.GPS, cauhinhdienthoai.Bluetooth, 
		cauhinhdienthoai.KetNoi, cauhinhdienthoai.JackTaiNghe,cauhinhdienthoai.KetNoiKhac, cauhinhdienthoai.ThietKe, 
		cauhinhdienthoai.ChatLieu, cauhinhdienthoai.KichThuoc,cauhinhdienthoai.TrongLuong, cauhinhdienthoai.DungLuongPin, 
		cauhinhdienthoai.LoaiPin, cauhinhdienthoai.CongNghePin,cauhinhdienthoai.BaoMat, cauhinhdienthoai.TinhNangDacBiet, 
		cauhinhdienthoai.GhiAm, cauhinhdienthoai.Radio,cauhinhdienthoai.XemPhim, cauhinhdienthoai.NgheNhac, 
		cauhinhdienthoai.ThoiDIemPhatHanh],callback);
	},
	deleteCH:function(MaDienThoai,callback){
		return db.query("delete from cauhinhdienthoai where MaDienThoai=?",[MaDienThoai],callback);
	},
	updateCH:function(MaDienThoai,cauhinhdienthoai,callback){
		return db.query("update comment set CongNgheManHinh=?,DoPhanGiaiMH=?,DoRongMH,MatKinh=?,DoPhanGiaiCamSau=?,QuayPhimCamSau=?,DenFlashCamSau=?,NangCaoCamSau=?,DoPhanGiaiCamTruoc=?,VideoCall=?,ThongTinCamTruoc=?,HeDieuHanh=?,Chipset=?,CPU=?,GPU=?,RAM=?,ROM=?,TheNhoNgoai=?,MangDIDong=?,SIM=?,WIFI=?,GPS=?,Bluetooth=?,KetNoi=?,JackTaiNghe=?,KetNoiKhac=?,ThietKe=?,ChatLieu=?,KichThuoc=?,TrongLuong=?,DungLuongPin=?,LoaiPin=?,CongNghePin=?,BaoMat=?,TinhNangDacBiet=?,GhiAm=?,Radio=?,XemPhim=?,NgheNhac=?,ThoiDIemPhatHanh=? where MaDienThoai=?"
			,[cauhinhdienthoai.CongNgheManHinh, cauhinhdienthoai.DoPhanGiaiMH, cauhinhdienthoai.DoRongMH, 
			cauhinhdienthoai.MatKinh,cauhinhdienthoai.DoPhanGiaiCamSau,cauhinhdienthoai.QuayPhimCamSau, cauhinhdienthoai.DenFlashCamSau, 
			cauhinhdienthoai.NangCaoCamSau,cauhinhdienthoai.DoPhanGiaiCamTruoc,cauhinhdienthoai.VideoCall, cauhinhdienthoai.ThongTinCamTruoc,
			cauhinhdienthoai.HeDieuHanh, cauhinhdienthoai.Chipset,cauhinhdienthoai.CPU, cauhinhdienthoai.GPU, 
			cauhinhdienthoai.RAM, cauhinhdienthoai.ROM,cauhinhdienthoai.TheNhoNgoai, cauhinhdienthoai.MangDIDong, 
			cauhinhdienthoai.SIM, cauhinhdienthoai.WIFI,cauhinhdienthoai.GPS, cauhinhdienthoai.Bluetooth, 
			cauhinhdienthoai.KetNoi, cauhinhdienthoai.JackTaiNghe,cauhinhdienthoai.KetNoiKhac, cauhinhdienthoai.ThietKe, 
			cauhinhdienthoai.ChatLieu, cauhinhdienthoai.KichThuoc,cauhinhdienthoai.TrongLuong, cauhinhdienthoai.DungLuongPin, 
			cauhinhdienthoai.LoaiPin, cauhinhdienthoai.CongNghePin,cauhinhdienthoai.BaoMat, cauhinhdienthoai.TinhNangDacBiet, 
			cauhinhdienthoai.GhiAm, cauhinhdienthoai.Radio,cauhinhdienthoai.XemPhim, cauhinhdienthoai.NgheNhac, 
			cauhinhdienthoai.ThoiDIemPhatHanh,MaDienThoai],callback);
	}
};

module.exports=Cauhinh;