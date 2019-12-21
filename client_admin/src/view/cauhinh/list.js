import React from 'react';
import {  Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import './listcauhinh.css';
import {FaPlus, FaTrash, FaCog, FaWpforms} from "react-icons/fa";

// const baseUrl = "http://192.168.0.105:5000";

class EditCauhinh extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        dataSanpham:[],
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

        TenDienThoai:"",
        MaDienThoai:"",
        DuongDan: [],
      }
    }

    componentDidMount(){
    let dtId = this.props.match.params.cauhinhID;
    const urldt = "http://localhost:5000/dienthoai/hadienthoai/"+dtId;
    axios.get(urldt)
    .then(res => {
        if (res.data) {
          const data = res.data[0];
          const im = res.data;
         
          this.setState({
            dataSanpham: data,
            TenDienThoai: data.TenDienThoai,
            MaDienThoai: data.MaDienThoai,
            DuongDan: im.map((i)=>i.DuongDan)
          })
      
       }
       else {
          alert("Error web service");
        }
    })
    .catch(error=>{
      alert("Error server "+error);
    }) 


    let userId = this.props.match.params.cauhinhID;
    const url = "http://localhost:5000/cauhinh/list/"+userId;
    axios.get(url)
    .then(res => {
        if (res.data) {
          const data = res.data[0];
          this.setState({
            dataSanpham: data,
            CongNgheManHinh: data.CongNgheManHinh,
            DoPhanGiaiMH: data.DoPhanGiaiMH,
            DoRongMH: data.DoRongMH,
            MatKinh: data.MatKinh,
            DoPhanGiaiCamSau: data.DoPhanGiaiCamSau,
            QuayPhimCamSau: data.QuayPhimCamSau,
            DenFlashCamSau: data.DenFlashCamSau,
            NangCaoCamSau: data.NangCaoCamSau,
            DoPhanGiaiCamTruoc:data.DoPhanGiaiCamTruoc,
            VideoCall: data.VideoCall,
            ThongTinCamTruoc: data.ThongTinCamTruoc,
            HeDieuHanh: data.HeDieuHanh,
            Chipset: data.Chipset,
            CPU: data.CPU,
            GPU: data.GPU,
            RAM: data.RAM,
            ROM: data.ROM,
            TheNhoNgoai: data.TheNhoNgoai,
            MangDIDong: data.MangDIDong,
            SIM: data.SIM,
            WIFI: data.WIFI,
            GPS: data.GPS,
            Bluetooth: data.Bluetooth,
            KetNoi: data.KetNoi,
            JackTaiNghe: data.JackTaiNghe,
            KetNoiKhac: data.KetNoiKhac,
            ThietKe: data.ThietKe,
            ChatLieu: data.ChatLieu,
            KichThuoc: data.KichThuoc,
            TrongLuong: data.TrongLuong,
            DungLuongPin:data.DungLuongPin,
            LoaiPin: data.LoaiPin,
            CongNghePin: data.CongNghePin,
            BaoMat: data.BaoMat,
            TinhNangDacBiet: data.TinhNangDacBiet,
            GhiAm: data.GhiAm,
            Radio: data.Radio,
            XemPhim: data.XemPhim,
            NgheNhac: data.NgheNhac,
            ThoiDIemPhatHanh: data.ThoiDIemPhatHanh,
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
    }

    imageLoad(){
        return this.state.DuongDan.map((i) => {
            let urlIm = "http://localhost:5000/phones/"+i;
            return(
                <div key={i} className="wrap">
                    <img className="sizeimage" src={urlIm}/>
                    <Button color="danger" className="delete" onClick={()=>this.onDelete(i)}><FaTrash /></Button>
                </div>
            )
        })
    }
    onDelete(i){
        Swal.fire({
          title: 'Mày chắc chắn xóa?',
          text: 'Whats up men',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Tao chắc chắn',
          cancelButtonText: 'Tao không muốn xóa nữa'
        }).then((result) => {
          if (result.value) {
            this.sendDelete(i);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Không xóa nữa',
              'OH MY GOD',
              'error'
            )
          }
        })
    }
    sendDelete(i)
        {
        
          // url  backend
          const baseUrl = `http://localhost:5000/hadienthoai/delete/${i}`;   // parameter data post

          // network
          axios.delete(baseUrl)
          .then(response =>{
            if (response.data) {
              Swal.fire(
                'Đã xóa',
                'OK',
                'success'
              )
              window.location.reload();
            }
          })
          .catch ( error => {
            alert("Error 325 ")
          })
        }

  render(){
    // let userId = this.props.match.params.id;
    return(
      <div className="listch">
      <center className="intro">Thông số kỹ thuật chi tiết {this.state.TenDienThoai}</center>
      <center><div>{this.imageLoad()}</div></center>
      <ul>
        <li className="listhead">Màn hình</li>
        <li>
        <span>Công nghệ màn hình</span> {this.state.CongNgheManHinh}
        </li>
        <li>
        <span>Độ phân giải</span> {this.state.DoPhanGiaiMH}
        </li>
        <li>
        <span>Độ rộng màn hình</span> {this.state.DoRongMH}
        </li>
        <li>
        <span>Mặt kính cảm ứng</span> {this.state.MatKinh}
        </li>
    </ul>
    <ul>
        <li className="listhead">Camera sau</li>
        <li>
        <span>Độ phân giải</span> {this.state.DoPhanGiaiCamSau}
        </li>
        <li>
        <span>Quay phim </span> {this.state.QuayPhimCamSau}
        </li>
        <li>
        <span>Đèn flash</span> {this.state.DenFlashCamSau}
        </li>
        </ul>
    <ul>

        <li className="listhead">Camera trước</li>
        <li>
        <span>Độ phân giải cam trước</span> {this.state.DoPhanGiaiCamTruoc}
        </li>
        <li>
        <span>VideoCall</span> {this.state.VideoCall}
        </li>
    </ul>
    <ul>

        <li className="listhead">Hệ điều hành - CPU</li>
        <li>
        <span>Hệ điều hành</span> {this.state.HeDieuHanh}
        </li>
        <li>
        <span>Chipset</span> {this.state.Chipset}
        </li>

    </ul>
    <ul>
        <li className="listhead">Bộ nhớ & Lưu trữ</li>
        <li>
        <span>CPU</span> {this.state.CPU}
        </li>
        <li>
        <span>GPU</span> {this.state.GPU}
        </li>
        <li>
        <span>RAM</span> {this.state.RAM}
        </li>
        <li>
        <span>ROM</span> {this.state.ROM}
        </li>
        <li>
        <span>Thẻ nhớ ngoài</span> {this.state.TheNhoNgoai}
        </li>

    </ul>
    <ul>
        <li className="listhead">Kết nối</li>
        <li>
        <span>Mạng di động</span> {this.state.MangDIDong}
        </li>
        <li>
        <span>SIM</span> {this.state.SIM}
        </li>
        <li>
        <span>WIFI</span> {this.state.WIFI}
        </li>
        <li>
        <span>GPS</span> {this.state.GPS}
        </li>
        <li>
        <span>Bluetooth</span> {this.state.Bluetooth}
        </li>
        <li>
        <span>Kết nối</span> {this.state.KetNoi}
        </li>
        <li>
        <span>Jack Tai Nghe</span> {this.state.JackTaiNghe}
        </li>
        <li>
        <span>Kết nối khác</span> {this.state.KetNoiKhac}
        </li>

    </ul>
    <ul>
        <li className="listhead">Thiết kế & Trọng lượng</li>
        <li>
        <span>Thiết kế</span> {this.state.ThietKe}
        </li>
        <li>
        <span>Chất liệu</span> {this.state.ChatLieu}
        </li>
        <li>
        <span>Kích thước</span> {this.state.KichThuoc}
        </li>
        <li>
        <span>Trọng lượng</span> {this.state.TrongLuong}
        </li>

    </ul>
    <ul>
        <li className="listhead">Thông tin pin & Sạc</li>
        <li>
        <span>Dung lượng pin</span> {this.state.DungLuongPin}
        </li>
        <li>
        <span>Loại pin</span> {this.state.LoaiPin}
        </li>
        <li>
        <span>Công nghệ pin</span> {this.state.CongNghePin}
        </li>

    </ul>
    <ul>
        <li className="listhead">Tiện ích</li>
        <li>
       <span> Bảo mật</span> {this.state.BaoMat}
        </li>
        <li>
       <span> TÍnh năng đặc biệt</span> {this.state.TinhNangDacBiet}
        </li>
        <li>
       <span> Ghi âm</span> {this.state.GhiAm}
        </li>
        <li>
       <span> Radio</span> {this.state.Radio}
        </li>
        <li>
       <span> Xem phim</span> {this.state.XemPhim}
        </li>
        <li>
       <span> Nghe nhạc</span> {this.state.NgheNhac}
        </li>

    </ul>
    <ul>
        <li className="listhead">Thông tin khác</li>
        <li>
       <span> Thời điểm phát hành</span>{this.state.ThoiDIemPhatHanh}
        </li>
      


      </ul>
      </div>
    )
  }

}

export default EditCauhinh;