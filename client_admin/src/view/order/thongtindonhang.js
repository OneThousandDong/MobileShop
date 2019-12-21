import React from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import {FaPlus, FaTrash, FaWhmcs} from "react-icons/fa";

class ThongTinDonHang extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listSanpham:[],
      MADonHang: "",
      DiaChi: "",
      HoTen: "",
      SoDienThoai: "",
      Email: "",
      GhiChu: "",
      Tongtien: "",
    }
  }

  componentDidMount(){
    let orderID = this.props.match.params.odID;
    const url = "http://localhost:5000/donhang/list/"+orderID;
      axios.get(url)
      .then(res=>{
      if (res.data) {
        const data = res.data[0]
        this.setState({
          MADonHang: data.MADonHang,
          DiaChi: data.DiaChi,
          HoTen: data.HoTen,
          SoDienThoai: data.SoDienThoai,
          Email: data.Email,
          GhiChu: data.GhiChu,
          Tongtien: data.Tongtien
        })
        console.log(data)
      }
      else {
        alert("Error web service")
      }
    })
    .catch(error=>{
      alert("Error server "+error)
    })

    let chitiet = this.props.match.params.odID;
       const urlct = "http://localhost:5000/chitietdonhang/list/"+chitiet;
      axios.get(urlct)
      .then(res=>{
      if (res.data) {
        const data = res.data
        this.setState({listSanpham:data})
      }
      else {
        alert("Error web service")
      }
    })
    .catch(error=>{
      alert("Error server "+error)
    })
  }



  render(){
    return(
      <div>
        <h3>Thông tin chi tiết đơn hàng</h3>
        <ul>
          <li>Mã đơn hàng {this.state.MADonHang}
          </li>
          <li>Tên khách hàng {this.state.HoTen}
          </li>
          <li>Địa chỉ {this.state.DiaChi}
          </li>
          <li>Số điện thoại {this.state.SoDienThoai}
          </li>
          <li>Email  {this.state.Email}
          </li>
          <li>Ghi chú {this.state.GhiChu}
          </li>
        </ul>
        {this.loadFillData()}
        Tổng tiền đơn hàng  {this.state.Tongtien} VNĐ

      </div>
      )
    }

    loadFillData(){

    return this.state.listSanpham.map((data)=>{
      if(data.LoaiSanPham === "Điện thoại"){
      return(
        <ul key={data.LoaiSanPham}>
          <li>{data.LoaiSanPham}</li>
          <li>{data.TenDienThoai}</li>
          <li>Giá bán: {data.GiaBan} VNĐ</li>
          <li>Số lượng mua: {data.SoLuong}</li>
        </ul>
      )
    }else{
        return(
        <ul key={data.LoaiSanPham}>
          <li>{data.LoaiSanPham}</li>
          <li>{data.TenPhuKien}</li>
          <li>Số lượng mua: {data.SoLuong}</li>
        </ul>
      )
      }
    })
  }


  onDelete(MADonHang){
        Swal.fire({
          title: 'Mày chắc chắn xóa?',
          text: 'Whats up men',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Tao chắc chắn',
          cancelButtonText: 'Tao không muốn xóa nữa'
        }).then((result) => {
          if (result.value) {
            this.sendDelete(MADonHang);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Không xóa nữa',
              'OH MY GOD',
              'error'
            )
          }
        })
    }
    sendDelete(MADonHang)
        {
        
          // url de backend
          const baseUrl = `http://localhost:5000/dienthoai/delete/${MADonHang}`;   // parameter data post
          // network
          axios.delete(baseUrl)
          .then(response =>{
            if (response.data) {
              Swal.fire(
                'Đã xóa',
                'OK',
                'success'
              )
              this.loadSanpham()
            }
          })
          .catch ( error => {
            alert("Error 325 ")
          })
        }
}


export default ThongTinDonHang;