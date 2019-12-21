import React from 'react';
import {  Button, Row, Col, Form, FormGroup, Label, Input,Progress } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AvForm, AvGroup,AvInput,AvFeedback } from 'availity-reactstrap-validation';
import UploadImage from './image.js';
class FormCreateSanPham extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        campmaDienthoai: "",
        campTendienthoai:"",
        campHang:"",
        campSoluong:"",
        campGiaban:"",
        campGiakhuyenmai:"",

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

  onChangeHandler=event=>{
        this.setState({
          selectedFile: event.target.files
        })
      }


  render(){
    return(
      <div>
      
     <Form>
     <div>Thông tin cơ bản</div>
        <Row>
          <Col xs="4">
                <FormGroup>
                    <Label for="eMa">Mã điện thoại</Label>
                    <Input type="text" name="madt" id="eMa" value={this.state.campmaDienthoai} onChange={(value) => this.setState({campmaDienthoai:value.target.value})}/>
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
    

    <h3>Image Upload</h3>
      <input type="file" name="file" multiple onChange={this.onChangeHandler} />
      <div class="form-group">
         <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>
      </div>

      <div>Thông số kỹ thuật chi tiết</div>
        <Row>
          <Col xs="3">
                <FormGroup>
                    <Label for="eCNMH">Công nghệ màn hình</Label>
                    <Input type="text" name="cnmh" id="eCNMH" value={this.state.CongNgheManHinh} onChange={(value) => this.setState({CongNgheManHinh:value.target.value})}/>
                </FormGroup>
              
          </Col>
          <Col xs="3">
              <FormGroup>
                  <Label for="eDPGMH">Độ phân giải</Label>
                  <Input type="text" name="dpg" id="eDPGMH" value={this.state.DoPhanGiaiMH} onChange={(value) => this.setState({DoPhanGiaiMH:value.target.value})} />
              </FormGroup>
          </Col>
          <Col xs="3">
              <FormGroup>
                  <Label for="eDRMH">Độ rộng màn hình</Label>
                  <Input type="text" name="drmh" id="eDRMH" value={this.state.DoRongMH} onChange={(value) => this.setState({DoRongMH:value.target.value})} />
              </FormGroup>
          </Col>
        </Row>
        <Row>
        <Col xs="3">
              <FormGroup>
                  <Label for="eMK">Mặt kính</Label>
                  <Input type="text" name="mk" id="eMK" value={this.state.MatKinh} onChange={(value) => this.setState({MatKinh:value.target.value})} />
              </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
              <FormGroup>
                  <Label for="eDPGCS">Độ phân giải</Label>
                  <Input type="text" name="dpg1" id="eDPGCS" value={this.state.DoPhanGiaiCamSau} onChange={(value) => this.setState({DoPhanGiaiCamSau:value.target.value})} />
              </FormGroup>
          </Col>
          <Col xs="3">
                <FormGroup>
                    <Label for="eQP">Quay phim</Label>
                    <Input type="text" id="eQP" value={this.state.QuayPhimCamSau} onChange={(value)=> this.setState({QuayPhimCamSau:value.target.value})}/>
                </FormGroup>
          </Col>
          <Col xs="3">
                <FormGroup>
                    <Label for="eDF">Đèn flash</Label>
                    <Input type="text" id="eDF" value={this.state.DenFlashCamSau} onChange={(value)=> this.setState({DenFlashCamSau:value.target.value})}/>
                </FormGroup>
          </Col>
        </Row>
        <Row>
        <Col xs="3">
              <FormGroup>
                  <Label for="eNCCS">Nâng cao camera sau</Label>
                  <Input type="text" name="nccs" id="eNCCS" value={this.state.NangCaoCamSau} onChange={(value) => this.setState({NangCaoCamSau:value.target.value})} />
              </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
              <FormGroup>
                  <Label for="eDPGCT">Độ phân giải</Label>
                  <Input type="text" name="DPGCT" id="eDPGCT" value={this.state.DoPhanGiaiCamTruoc} onChange={(value)=> this.setState({DoPhanGiaiCamTruoc:value.target.value})}/>
              </FormGroup>
          </Col>
           <Col xs="4">
              <FormGroup>
                  <Label for="eVideo">VideoCall</Label>
                  <Input type="text" name="videocall" id="eVideo" value={this.state.VideoCall} onChange={(value)=> this.setState({VideoCall:value.target.value})}/>
              </FormGroup>
          </Col>
        </Row>
        <Row>
        <Col xs="3">
              <FormGroup>
                  <Label for="eTTCT">Thông tin camera trước</Label>
                  <Input type="text" name="ttct" id="eTTCT" value={this.state.ThongTinCamTruoc} onChange={(value) => this.setState({ThongTinCamTruoc:value.target.value})} />
              </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
              <FormGroup>
                  <Label for="eHDH">Hệ điều hành</Label>
                  <Input type="text" name="hdh" id="eHDH" value={this.state.HeDieuHanh} onChange={(value)=> this.setState({HeDieuHanh:value.target.value})}/>
              </FormGroup>
          </Col>
           <Col xs="4">
              <FormGroup>
                  <Label for="eChip">Chipset </Label>
                  <Input type="text" name="chip" id="eChip" value={this.state.Chipset} onChange={(value)=> this.setState({Chipset:value.target.value})}/>
              </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
              <FormGroup>
                  <Label for="eCPU">CPU</Label>
                  <Input type="text" name="cpu" id="eCPU" value={this.state.CPU} onChange={(value)=> this.setState({CPU:value.target.value})}/>
              </FormGroup>
          </Col>
           <Col xs="3">
              <FormGroup>
                  <Label for="eGPU">GPU</Label>
                  <Input type="text" name="gpu" id="eGPU" value={this.state.GPU} onChange={(value)=> this.setState({GPU:value.target.value})}/>
              </FormGroup>
          </Col>
          <Col xs="3">
              <FormGroup>
                  <Label for="eRam">RAM</Label>
                  <Input type="text" name="ram" id="eRam" value={this.state.RAM} onChange={(value)=> this.setState({RAM:value.target.value})}/>
              </FormGroup>
          </Col>
          <Col xs="4">
              <FormGroup>
                  <Label for="eRom">ROM</Label>
                  <Input type="text" name="rom" id="eRom" value={this.state.ROM} onChange={(value)=> this.setState({ROM:value.target.value})}/>
              </FormGroup>
          </Col>
          <Col xs="4">
              <FormGroup>
                  <Label for="eTheNho">Thẻ nhớ ngoài</Label>
                  <Input type="text" name="thenho" id="eTheNho" value={this.state.TheNhoNgoai} onChange={(value)=> this.setState({TheNhoNgoai:value.target.value})}/>
              </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs="3">
              <FormGroup>
                  <Label for="eMdd">Mạng di động</Label>
                  <Input type="text" name="mdd" id="eMdd" value={this.state.MangDIDong} onChange={(value)=> this.setState({MangDIDong:value.target.value})}/>
              </FormGroup>
          </Col>
           <Col xs="3">
              <FormGroup>
                  <Label for="eSim">SIM</Label>
                  <Input type="text" name="sim" id="eSim" value={this.state.SIM} onChange={(value)=> this.setState({SIM:value.target.value})}/>
              </FormGroup>
          </Col>
          <Col xs="3">
              <FormGroup>
                  <Label for="eWifi">WIFI</Label>
                  <Input type="text" name="wifi" id="eWifi" value={this.state.WIFI} onChange={(value)=> this.setState({WIFI:value.target.value})}/>
              </FormGroup>
          </Col>
          <Col xs="4">
              <FormGroup>
                  <Label for="eGps">GPS</Label>
                  <Input type="text" name="gps" id="eGps" value={this.state.GPS} onChange={(value)=> this.setState({GPS:value.target.value})}/>
              </FormGroup>
          </Col>
          <Col xs="4">
              <FormGroup>
                  <Label for="eBlue">Bluetooth</Label>
                  <Input type="text" name="blue" id="eBlue" value={this.state.Bluetooth} onChange={(value)=> this.setState({Bluetooth:value.target.value})}/>
              </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
              <FormGroup>
                  <Label for="eKn">Kết nối</Label>
                  <Input type="text" name="kn" id="eKn" value={this.state.KetNoi} onChange={(value)=> this.setState({KetNoi:value.target.value})}/>
              </FormGroup>
          </Col>
           <Col xs="3">
              <FormGroup>
                  <Label for="eJtn">Jack Tai Nghe</Label>
                  <Input type="text" name="jtn" id="eJtn" value={this.state.JackTaiNghe} onChange={(value)=> this.setState({JackTaiNghe:value.target.value})}/>
              </FormGroup>
          </Col>
          <Col xs="3">
              <FormGroup>
                  <Label for="eKnk">Kết nối khác</Label>
                  <Input type="text" name="knk" id="eKnk" value={this.state.KetNoiKhac} onChange={(value)=> this.setState({KetNoiKhac:value.target.value})}/>
              </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs="3">
              <FormGroup>
                  <Label for="eTK">Thiết kế</Label>
                  <Input type="text" name="tk" id="eTK" value={this.state.ThietKe} onChange={(value)=> this.setState({ThietKe:value.target.value})}/>
              </FormGroup>
          </Col>
           <Col xs="3">
              <FormGroup>
                  <Label for="eCL">Chất liệu</Label>
                  <Input type="text" name="cl" id="eCL" value={this.state.ChatLieu} onChange={(value)=> this.setState({ChatLieu:value.target.value})}/>
              </FormGroup>
          </Col>
          <Col xs="3">
              <FormGroup>
                  <Label for="eKT">Kích thước</Label>
                  <Input type="text" name="kt" id="eKT" value={this.state.KichThuoc} onChange={(value)=> this.setState({KichThuoc:value.target.value})}/>
              </FormGroup>
          </Col>
          <Col xs="4">
              <FormGroup>
                  <Label for="eTL">Trọng Lượng</Label>
                  <Input type="text" name="tl" id="eTL" value={this.state.TrongLuong} onChange={(value)=> this.setState({TrongLuong:value.target.value})}/>
              </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs="3">
              <FormGroup>
                  <Label for="eDLP">Dung lượng pin</Label>
                  <Input type="text" name="dlp" id="eDLP" value={this.state.DungLuongPin} onChange={(value)=> this.setState({DungLuongPin:value.target.value})}/>
              </FormGroup>
          </Col>
           <Col xs="3">
              <FormGroup>
                  <Label for="eLP">Loại pin</Label>
                  <Input type="text" name="lp" id="eLP" value={this.state.LoaiPin} onChange={(value)=> this.setState({LoaiPin:value.target.value})}/>
              </FormGroup>
          </Col>
          <Col xs="3">
              <FormGroup>
                  <Label for="eCNP">Công nghệ pin</Label>
                  <Input type="text" name="cnp" id="eCNP" value={this.state.CongNghePin} onChange={(value)=> this.setState({CongNghePin:value.target.value})}/>
              </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs="3">
              <FormGroup>
                  <Label for="eBM">Bảo mật</Label>
                  <Input type="text" name="bm" id="eBM" value={this.state.BaoMat} onChange={(value)=> this.setState({BaoMat:value.target.value})}/>
              </FormGroup>
          </Col>
           <Col xs="3">
              <FormGroup>
                  <Label for="eTNDB">TÍnh năng đặc biệt</Label>
                  <Input type="text" name="tndb" id="eTNDB" value={this.state.TinhNangDacBiet} onChange={(value)=> this.setState({TinhNangDacBiet:value.target.value})}/>
              </FormGroup>
          </Col>
          <Col xs="3">
              <FormGroup>
                  <Label for="eGA">Ghi âm</Label>
                  <Input type="text" name="ga" id="eGA" value={this.state.GhiAm} onChange={(value)=> this.setState({GhiAm:value.target.value})}/>
              </FormGroup>
          </Col>
          </Row>
          <Row>
          <Col xs="3">
              <FormGroup>
                  <Label for="eRaio">Radio</Label>
                  <Input type="text" name="radio" id="eRaio" value={this.state.Radio} onChange={(value)=> this.setState({Radio:value.target.value})}/>
              </FormGroup>
          </Col>
          <Col xs="3">
              <FormGroup>
                  <Label for="eXP">Xem phim</Label>
                  <Input type="text" name="xp" id="eXP" value={this.state.XemPhim} onChange={(value)=> this.setState({XemPhim:value.target.value})}/>
              </FormGroup>
          </Col>
          <Col xs="3">
              <FormGroup>
                  <Label for="eNN">Nghe nhạc</Label>
                  <Input type="text" name="nn" id="eNN" value={this.state.NgheNhac} onChange={(value)=> this.setState({NgheNhac:value.target.value})}/>
              </FormGroup>
          </Col>
        </Row>
        <div>Thông tin khác</div>
        <Row>
          <Col xs="3">
              <FormGroup>
                  <Label for="eTDPH">Thời điểm phát hành</Label>
                  <Input type="text" name="tdph" id="eTDPH" value={this.state.ThoiDIemPhatHanh} onChange={(value)=> this.setState({ThoiDIemPhatHanh:value.target.value})}/>
              </FormGroup>
          </Col>
          
        </Row>
        <Button color="info" onClick={()=>this.sendSave()}>Create</Button>
      </Form> 
        
      </div>
    )
  }
  
 onSubmit = () => {
    this.props.history.push('/listsanpham');    
  }

  sendSave() {

        const baseUrl = "http://localhost:5000/dienthoai/create";
        
        const datapost = {
           MaDienThoai : this.state.campmaDienthoai,
           TenDienThoai : this.state.campTendienthoai,
           Hang : this.state.campHang,
           SoLuong : this.state.campSoluong,
           GiaBan  : this.state.campGiaban,
           GiaKhuyenMai: this.state.campGiakhuyenmai
        }

        const chdatapost = {
          MaDienThoai:  this.state.campmaDienthoai,
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

        const chUrl = "http://localhost:5000/cauhinh/create";
        axios.post(chUrl, chdatapost)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          
        axios.post(baseUrl,datapost)
          .then(response=>{
             if (1==1) {
                Swal.fire(
                'Thêm thành công',
                '',
                'success'
                  )
                this.onSubmit();
                }
              else {
               alert(response.data.message)
              }
          }).catch(error=>{
             alert("Error 34 "+error)
          })

        const data = new FormData()
        for(var x = 0; x<this.state.selectedFile.length; x++) {
             data.append('file', this.state.selectedFile[x])
             console.log(this.state.selectedFile[x].name)
             axios.post("http://localhost:5000/hadienthoai/create",{
              MaDT: this.state.campmaDienthoai,
              DuongDan: this.state.selectedFile[x].name
             })

        }
        axios.post("http://localhost:5000/uploadimage", data, { 
          onUploadProgress: ProgressEvent => {
         this.setState({
           loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
               })
           },
          })
          .then(res => { // then print response status
          })

    }


}

export default FormCreateSanPham;