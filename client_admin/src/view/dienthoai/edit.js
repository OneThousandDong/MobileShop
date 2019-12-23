import React from 'react';
import {  Button, Row, Col, Form, FormGroup, Label, Input,Progress } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

// const baseUrl = "http://192.168.0.105:5000";

class EditSanPham extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        dataSanpham:[],
        campmaDienthoai: "",
        campTendienthoai:"",
        campHang:"",
        campSoluong:"",
        campGiaban:"",
        campGiakhuyenmai:"",

        dataCauhinh:[],
        CongNgheManHinh: "",
        DoPhanGiaiMH: "",
        DoRongMH: "",
        MatKinh: "",
        DoPhanGiaiCamSau: "",
        QuayPhimCamSau: "",
        DenFlashCamSau: "",
        NangCaoCamSau: "",
        DoPhanGiaiCamTruoc: "",
        VideoCall: "",
        ThongTinCamTruoc: "",
        HeDieuHanh: "",
        Chipset: "",
        CPU: "",
        GPU: "",
        RAM: "",
        ROM: "",
        TheNhoNgoai: "",
        MangDIDong: "",
        SIM: "",
        WIFI: "",
        GPS: "",
        Bluetooth: "",
        KetNoi: "",
        JackTaiNghe: "",
        KetNoiKhac: "",
        ThietKe: "",
        ChatLieu: "",
        KichThuoc: "",
        TrongLuong: "",
        DungLuongPin: "",
        LoaiPin: "",
        CongNghePin: "",
        BaoMat: "",
        TinhNangDacBiet: "",
        GhiAm: "",
        Radio: "",
        XemPhim: "",
        NgheNhac: "",
        ThoiDIemPhatHanh: "",

        selectedFile: null,
        loaded:0,
      }
    }

    componentDidMount(){
    let userId = this.props.match.params.sanphamID;
    const url = "http://localhost:5000/dienthoai/list/"+userId;
    axios.get(url)
    .then(res => {
        if (res.data) {
          const data = res.data[0];
          this.setState({
            dataSanpham: data,
            campmaDienthoai: data.MaDienThoai,
            campTendienthoai: data.TenDienThoai,
            campHang: data.Hang,
            campSoluong: data.SoLuong,
            campGiaban: data.GiaBan,
            campGiakhuyenmai: data.GiaKhuyenMai
          })
          console.log(res.data[0]);
       }
       else {
          alert("Error web service");
        }
    })
    .catch(error=>{
      alert("Error server "+error);
    })


    const urlCH = "http://localhost:5000/cauhinh/list/"+userId;
    axios.get(urlCH)
    .then(res => {
        if (res.data) {
          const datach = res.data[0];
          this.setState({
            dataCauhinh: datach,
          CongNgheManHinh: datach.CongNgheManHinh,
          DoPhanGiaiMH: datach.DoPhanGiaiMH,
          DoRongMH: datach.DoRongMH,
          MatKinh: datach.MatKinh,
          DoPhanGiaiCamSau: datach.DoPhanGiaiCamSau,
          QuayPhimCamSau: datach.QuayPhimCamSau,
          DenFlashCamSau: datach.DenFlashCamSau,
          NangCaoCamSau: datach.NangCaoCamSau,
          DoPhanGiaiCamTruoc: datach.DoPhanGiaiCamTruoc,
          VideoCall: datach.VideoCall,
          ThongTinCamTruoc: datach.ThongTinCamTruoc,
          HeDieuHanh: datach.HeDieuHanh,
          Chipset: datach.Chipset,
          CPU: datach.CPU,
          GPU: datach.GPU,
          RAM: datach.RAM,
          ROM: datach.ROM,
          TheNhoNgoai: datach.TheNhoNgoai,
          MangDIDong: datach.MangDIDong,
          SIM: datach.SIM,
          WIFI: datach.WIFI,
          GPS: datach.GPS,
          Bluetooth: datach.Bluetooth,
          KetNoi: datach.KetNoi,
          JackTaiNghe: datach.JackTaiNghe,
          KetNoiKhac: datach.KetNoiKhac,
          ThietKe: datach.ThietKe,
          ChatLieu: datach.ChatLieu,
          KichThuoc: datach.KichThuoc,
          TrongLuong: datach.TrongLuong,
          DungLuongPin: datach.DungLuongPin,
          LoaiPin: datach.LoaiPin,
          CongNghePin: datach.CongNghePin,
          BaoMat: datach.BaoMat,
          TinhNangDacBiet: datach.TinhNangDacBiet,
          GhiAm: datach.GhiAm,
          Radio: datach.Radio,
          XemPhim: datach.XemPhim,
          NgheNhac: datach.NgheNhac,
          ThoiDIemPhatHanh: datach.ThoiDIemPhatHanh,
          })
       }
       else {
          alert("Error web service");
        }
    })
    .catch(error=>{
      alert("Error server "+error);
    })

  }

  onChangeHandler=event=>{
      this.setState({
        selectedFile: event.target.files
      })
  }
      
  render(){
    // let userId = this.props.match.params.id;
    return(
      
     <Form className="formdt">
      <div className="headformdt">Thông tin cơ bản</div>
        <Row>
          <Col xs="4">
                <FormGroup>
                    <Label for="eMa">Mã điện thoại</Label>
                    <Input type="text" name="madt" id="eMa" value={this.state.campmaDienthoai} onChange={(value) => this.setState({campmaDienthoai:value.target.value})} disabled/>
                </FormGroup>
              
          </Col>
          <Col xs="4">
              <FormGroup>
                  <Label for="eTen">Tên điện thoại</Label>
                  <Input type="text" name="tendt" id="eTen" value={this.state.campTendienthoai} onChange={(value) => this.setState({campTendienthoai:value.target.value})} />
              </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
              <FormGroup>
                  <Label for="eHang">Hãng</Label>
                  <Input type="text" name="hangdt" id="eHang" value={this.state.campHang} onChange={(value) => this.setState({campHang:value.target.value})} />
              </FormGroup>
          </Col>
          <Col xs="4">
                <FormGroup>
                    <Label for="eSum">Số lượng</Label>
                    <Input type="text" id="eSum" value={this.state.campSoluong} onChange={(value)=> this.setState({campSoluong:value.target.value})}/>
                </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
              <FormGroup>
                  <Label for="eGia">Giá bán</Label>
                  <Input type="text" name="giadt" id="eGia" value={this.state.campGiaban} onChange={(value)=> this.setState({campGiaban:value.target.value})}/>
              </FormGroup>
          </Col>
           <Col xs="4">
              <FormGroup>
                  <Label for="eGiakm">Giá khuyến mãi</Label>
                  <Input type="text" name="giakm" id="eGiakm" value={this.state.campGiakhuyenmai} onChange={(value)=> this.setState({campGiakhuyenmai:value.target.value})}/>
              </FormGroup>
          </Col>
        </Row>
    

        <div className="headformdt">Thông số kỹ thuật chi tiết</div>
        <div className="headformdtct">Màn hình</div>
          <Row>
            <Col xs="3">
                  <FormGroup>
                      <Label for="eCNMH">Công nghệ màn hình</Label>
                      <Input type="textarea" name="cnmh" id="eCNMH" value={this.state.CongNgheManHinh} onChange={(value) => this.setState({CongNgheManHinh:value.target.value})}/>
                  </FormGroup>
                
            </Col>
            <Col xs="3">
                <FormGroup>
                    <Label for="eDPGMH">Độ phân giải</Label>
                    <Input type="textarea" name="dpg" id="eDPGMH" value={this.state.DoPhanGiaiMH} onChange={(value) => this.setState({DoPhanGiaiMH:value.target.value})} />
                </FormGroup>
            </Col>
            <Col xs="3">
                <FormGroup>
                    <Label for="eDRMH">Độ rộng màn hình</Label>
                    <Input type="textarea" name="drmh" id="eDRMH" value={this.state.DoRongMH} onChange={(value) => this.setState({DoRongMH:value.target.value})} />
                </FormGroup>
            </Col>
            <Col xs="3">
                <FormGroup>
                    <Label for="eMK">Mặt kính</Label>
                    <Input type="textarea" name="mk" id="eMK" value={this.state.MatKinh} onChange={(value) => this.setState({MatKinh:value.target.value})} />
                </FormGroup>
            </Col>
          </Row>
          <div className="headformdtct">Camera sau</div>
          <Row>
            <Col xs="3">
                <FormGroup>
                    <Label for="eDPGCS">Độ phân giải</Label>
                    <Input type="textarea" name="dpg1" id="eDPGCS" value={this.state.DoPhanGiaiCamSau} onChange={(value) => this.setState({DoPhanGiaiCamSau:value.target.value})} />
                </FormGroup>
            </Col>
            <Col xs="3">
                  <FormGroup>
                      <Label for="eQP">Quay phim</Label>
                      <Input type="textarea" id="eQP" value={this.state.QuayPhimCamSau} onChange={(value)=> this.setState({QuayPhimCamSau:value.target.value})}/>
                  </FormGroup>
            </Col>
            <Col xs="3">
                <FormGroup>
                    <Label for="eNCCS">Nâng cao camera sau</Label>
                    <Input type="textarea" name="nccs" id="eNCCS" value={this.state.NangCaoCamSau} onChange={(value) => this.setState({NangCaoCamSau:value.target.value})} />
                </FormGroup>
            </Col>
            <Col xs="3">
                  <FormGroup>
                      <Label for="eDF">Đèn flash</Label>
                      <Input type="textarea" id="eDF" value={this.state.DenFlashCamSau} onChange={(value)=> this.setState({DenFlashCamSau:value.target.value})}/>
                  </FormGroup>
            </Col>
          </Row>
          <div className="headformdtct">Camera trước</div>
          <Row>
            <Col xs="4">
                <FormGroup>
                    <Label for="eDPGCT">Độ phân giải</Label>
                    <Input type="textarea" name="DPGCT" id="eDPGCT" value={this.state.DoPhanGiaiCamTruoc} onChange={(value)=> this.setState({DoPhanGiaiCamTruoc:value.target.value})}/>
                </FormGroup>
            </Col>
             <Col xs="4">
                <FormGroup>
                    <Label for="eVideo">VideoCall</Label>
                    <Input type="textarea" name="videocall" id="eVideo" value={this.state.VideoCall} onChange={(value)=> this.setState({VideoCall:value.target.value})}/>
                </FormGroup>
            </Col>
            <Col xs="4">
                <FormGroup>
                    <Label for="eTTCT">Thông tin camera trước</Label>
                    <Input type="textarea" name="ttct" id="eTTCT" value={this.state.ThongTinCamTruoc} onChange={(value) => this.setState({ThongTinCamTruoc:value.target.value})} />
                </FormGroup>
            </Col>
          </Row>
          <div className="headformdtct">Hệ điều hành - CPU</div>
          <Row>
            <Col xs="4">
                <FormGroup>
                    <Label for="eHDH">Hệ điều hành</Label>
                    <Input type="textarea" name="hdh" id="eHDH" value={this.state.HeDieuHanh} onChange={(value)=> this.setState({HeDieuHanh:value.target.value})}/>
                </FormGroup>
            </Col>
             <Col xs="4">
                <FormGroup>
                    <Label for="eChip">Chipset </Label>
                    <Input type="textarea" name="chip" id="eChip" value={this.state.Chipset} onChange={(value)=> this.setState({Chipset:value.target.value})}/>
                </FormGroup>
            </Col>
          </Row>

          <div className="headformdtct">Bộ nhớ & Lưu trữ</div>
          <Row>
            <Col xs="3">
                <FormGroup>
                    <Label for="eCPU">CPU</Label>
                    <Input type="textarea" name="cpu" id="eCPU" value={this.state.CPU} onChange={(value)=> this.setState({CPU:value.target.value})}/>
                </FormGroup>
            </Col>
             <Col xs="3">
                <FormGroup>
                    <Label for="eGPU">GPU</Label>
                    <Input type="textarea" name="gpu" id="eGPU" value={this.state.GPU} onChange={(value)=> this.setState({GPU:value.target.value})}/>
                </FormGroup>
            </Col>
            <Col xs="3">
                <FormGroup>
                    <Label for="eRam">RAM</Label>
                    <Input type="textarea" name="ram" id="eRam" value={this.state.RAM} onChange={(value)=> this.setState({RAM:value.target.value})}/>
                </FormGroup>
            </Col>
            <Col xs="4">
                <FormGroup>
                    <Label for="eRom">ROM</Label>
                    <Input type="textarea" name="rom" id="eRom" value={this.state.ROM} onChange={(value)=> this.setState({ROM:value.target.value})}/>
                </FormGroup>
            </Col>
            <Col xs="4">
                <FormGroup>
                    <Label for="eTheNho">Thẻ nhớ ngoài</Label>
                    <Input type="textarea" name="thenho" id="eTheNho" value={this.state.TheNhoNgoai} onChange={(value)=> this.setState({TheNhoNgoai:value.target.value})}/>
                </FormGroup>
            </Col>
          </Row>
          
          <div className="headformdtct">Kết nối</div>
          <Row>
            <Col xs="3">
                <FormGroup>
                    <Label for="eMdd">Mạng di động</Label>
                    <Input type="textarea" name="mdd" id="eMdd" value={this.state.MangDIDong} onChange={(value)=> this.setState({MangDIDong:value.target.value})}/>
                </FormGroup>
            </Col>
             <Col xs="3">
                <FormGroup>
                    <Label for="eSim">SIM</Label>
                    <Input type="textarea" name="sim" id="eSim" value={this.state.SIM} onChange={(value)=> this.setState({SIM:value.target.value})}/>
                </FormGroup>
            </Col>
            <Col xs="3">
                <FormGroup>
                    <Label for="eWifi">WIFI</Label>
                    <Input type="textarea" name="wifi" id="eWifi" value={this.state.WIFI} onChange={(value)=> this.setState({WIFI:value.target.value})}/>
                </FormGroup>
            </Col>
            <Col xs="3">
                <FormGroup>
                    <Label for="eGps">GPS</Label>
                    <Input type="textarea" name="gps" id="eGps" value={this.state.GPS} onChange={(value)=> this.setState({GPS:value.target.value})}/>
                </FormGroup>
            </Col>
            
          </Row>
          <Row>
            <Col xs="3">
                <FormGroup>
                    <Label for="eBlue">Bluetooth</Label>
                    <Input type="textarea" name="blue" id="eBlue" value={this.state.Bluetooth} onChange={(value)=> this.setState({Bluetooth:value.target.value})}/>
                </FormGroup>
            </Col>
            <Col xs="3">
                <FormGroup>
                    <Label for="eKn">Kết nối</Label>
                    <Input type="textarea" name="kn" id="eKn" value={this.state.KetNoi} onChange={(value)=> this.setState({KetNoi:value.target.value})}/>
                </FormGroup>
            </Col>
             <Col xs="3">
                <FormGroup>
                    <Label for="eJtn">Jack Tai Nghe</Label>
                    <Input type="textarea" name="jtn" id="eJtn" value={this.state.JackTaiNghe} onChange={(value)=> this.setState({JackTaiNghe:value.target.value})}/>
                </FormGroup>
            </Col>
            <Col xs="3">
                <FormGroup>
                    <Label for="eKnk">Kết nối khác</Label>
                    <Input type="textarea" name="knk" id="eKnk" value={this.state.KetNoiKhac} onChange={(value)=> this.setState({KetNoiKhac:value.target.value})}/>
                </FormGroup>
            </Col>
          </Row>
          
          <div className="headformdtct">Thiết kế & Trọng lượng</div>
          <Row>
            <Col xs="3">
                <FormGroup>
                    <Label for="eTK">Thiết kế</Label>
                    <Input type="textarea" name="tk" id="eTK" value={this.state.ThietKe} onChange={(value)=> this.setState({ThietKe:value.target.value})}/>
                </FormGroup>
            </Col>
             <Col xs="3">
                <FormGroup>
                    <Label for="eCL">Chất liệu</Label>
                    <Input type="textarea" name="cl" id="eCL" value={this.state.ChatLieu} onChange={(value)=> this.setState({ChatLieu:value.target.value})}/>
                </FormGroup>
            </Col>
            <Col xs="3">
                <FormGroup>
                    <Label for="eKT">Kích thước</Label>
                    <Input type="textarea" name="kt" id="eKT" value={this.state.KichThuoc} onChange={(value)=> this.setState({KichThuoc:value.target.value})}/>
                </FormGroup>
            </Col>
            <Col xs="3">
                <FormGroup>
                    <Label for="eTL">Trọng Lượng</Label>
                    <Input type="textarea" name="tl" id="eTL" value={this.state.TrongLuong} onChange={(value)=> this.setState({TrongLuong:value.target.value})}/>
                </FormGroup>
            </Col>
          </Row>
          
          <div className="headformdtct">Thông tin pin & Sạc</div>
          <Row>
            <Col xs="4">
                <FormGroup>
                    <Label for="eDLP">Dung lượng pin</Label>
                    <Input type="textarea" name="dlp" id="eDLP" value={this.state.DungLuongPin} onChange={(value)=> this.setState({DungLuongPin:value.target.value})}/>
                </FormGroup>
            </Col>
             <Col xs="4">
                <FormGroup>
                    <Label for="eLP">Loại pin</Label>
                    <Input type="textarea" name="lp" id="eLP" value={this.state.LoaiPin} onChange={(value)=> this.setState({LoaiPin:value.target.value})}/>
                </FormGroup>
            </Col>
            <Col xs="4">
                <FormGroup>
                    <Label for="eCNP">Công nghệ pin</Label>
                    <Input type="textarea" name="cnp" id="eCNP" value={this.state.CongNghePin} onChange={(value)=> this.setState({CongNghePin:value.target.value})}/>
                </FormGroup>
            </Col>
          </Row>
          
          <div className="headformdtct">Tiện ích</div>
          <Row>
            <Col xs="3">
                <FormGroup>
                    <Label for="eBM">Bảo mật</Label>
                    <Input type="textarea" name="bm" id="eBM" value={this.state.BaoMat} onChange={(value)=> this.setState({BaoMat:value.target.value})}/>
                </FormGroup>
            </Col>
             <Col xs="3">
                <FormGroup>
                    <Label for="eTNDB">Tính năng đặc biệt</Label>
                    <Input type="textarea" name="tndb" id="eTNDB" value={this.state.TinhNangDacBiet} onChange={(value)=> this.setState({TinhNangDacBiet:value.target.value})}/>
                </FormGroup>
            </Col>
            <Col xs="3">
                <FormGroup>
                    <Label for="eGA">Ghi âm</Label>
                    <Input type="textarea" name="ga" id="eGA" value={this.state.GhiAm} onChange={(value)=> this.setState({GhiAm:value.target.value})}/>
                </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="3">
                <FormGroup>
                    <Label for="eRaio">Radio</Label>
                    <Input type="textarea" name="radio" id="eRaio" value={this.state.Radio} onChange={(value)=> this.setState({Radio:value.target.value})}/>
                </FormGroup>
            </Col>
            <Col xs="3">
                <FormGroup>
                    <Label for="eXP">Xem phim</Label>
                    <Input type="textarea" name="xp" id="eXP" value={this.state.XemPhim} onChange={(value)=> this.setState({XemPhim:value.target.value})}/>
                </FormGroup>
            </Col>
            <Col xs="3">
                <FormGroup>
                    <Label for="eNN">Nghe nhạc</Label>
                    <Input type="textarea" name="nn" id="eNN" value={this.state.NgheNhac} onChange={(value)=> this.setState({NgheNhac:value.target.value})}/>
                </FormGroup>
            </Col>
          </Row>

          <div className="headformdtct">Thông tin khác</div>
          <Row>
            <Col xs="3">
                <FormGroup>
                    <Label for="eTDPH">Thời điểm phát hành</Label>
                    <Input type="textarea" name="tdph" id="eTDPH" value={this.state.ThoiDIemPhatHanh} onChange={(value)=> this.setState({ThoiDIemPhatHanh:value.target.value})}/>
                </FormGroup>
            </Col>
          </Row>
          <Button color="info" onClick={()=>this.sendUpdate()}>Update</Button>
      </Form> 
        
    )
  }
   onSubmit = () => {
    this.props.history.push('/listsanpham');    
  }

  sendUpdate(){

      
      const cauhinhUrlUpdate = `http://localhost:5000/cauhinh/update/${this.state.campmaDienthoai}`;
      const chdataupdate = {
            CongNgheManHinh: this.state.CongNgheManHinh,
            DoPhanGiaiMH: this.state.DoPhanGiaiMH,
            DoRongMH: this.state.DoRongMH,
            MatKinh: this.state.MatKinh,
            DoPhanGiaiCamSau: this.state.DoPhanGiaiCamSau,
            QuayPhimCamSau: this.state.QuayPhimCamSau,
            DenFlashCamSau: this.state.DenFlashCamSau,
            NangCaoCamSau: this.state.NangCaoCamSau,
            DoPhanGiaiCamTruoc: this.state.DoPhanGiaiCamTruoc,
            VideoCall: this.state.VideoCall,
            ThongTinCamTruoc: this.state.ThongTinCamTruoc,
            HeDieuHanh: this.state.HeDieuHanh,
            Chipset: this.state.Chipset,
            CPU: this.state.CPU,
            GPU: this.state.GPU,
            RAM: this.state.RAM,
            ROM: this.state.ROM,
            TheNhoNgoai: this.state.TheNhoNgoai,
            MangDIDong: this.state.MangDIDong,
            SIM: this.state.SIM,
            WIFI: this.state.WIFI,
            GPS: this.state.GPS,
            Bluetooth: this.state.Bluetooth,
            KetNoi: this.state.KetNoi,
            JackTaiNghe: this.state.JackTaiNghe,
            KetNoiKhac: this.state.KetNoiKhac,
            ThietKe: this.state.ThietKe,
            ChatLieu: this.state.ChatLieu,
            KichThuoc: this.state.KichThuoc,
            TrongLuong: this.state.TrongLuong,
            DungLuongPin: this.state.DungLuongPin,
            LoaiPin: this.state.LoaiPin,
            CongNghePin: this.state.CongNghePin,
            BaoMat: this.state.BaoMat,
            TinhNangDacBiet: this.state.TinhNangDacBiet,
            GhiAm: this.state.GhiAm,
            Radio: this.state.Radio,
            XemPhim: this.state.XemPhim,
            NgheNhac: this.state.NgheNhac,
            ThoiDIemPhatHanh: this.state.ThoiDIemPhatHanh
      }

      // param post

      axios.put(cauhinhUrlUpdate,chdataupdate)
        .then(response=>{
          console.log(response)
        }).catch(error=>{
          alert("Error 34 "+error)
        })


      const baseUrl = `http://localhost:5000/dienthoai/update/${this.state.campmaDienthoai}`;
      const datapost = {
        Hang : this.state.campHang,
        TenDienThoai : this.state.campTendienthoai,
        SoLuong : this.state.campSoluong,
        GiaBan  : this.state.campGiaban,
        GiaKhuyenMai: this.state.campGiakhuyenmai
      }

        axios.put(baseUrl,datapost)
        .then(response=>{
          if (1==1) {
            // alert("Sửa thành công")
            Swal.fire(
            'Sửa thành công',
            '',
            'success'
              )
            this.onSubmit();
          }
          else {
            alert("Error")
          }
        }).catch(error=>{
          alert("Error 34 "+error)
        })

      

  }
}

export default EditSanPham;