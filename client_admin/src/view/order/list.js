import React from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import {FaPlus, FaTrash, FaWhmcs,FaWpforms} from "react-icons/fa";

class ListOrder extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listSanpham:[]
    }
  }

  componentDidMount(){
     this.loadSanpham();
  }

  loadSanpham(){
     const url = "http://localhost:5000/donhang/list";
      axios.get(url)
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
      <div className="top">
        <Link to="/createsanpham" className="btn btn-primary"><FaPlus />Thêm sản phẩm</Link>

      </div>
        <Table hover>
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Mã khách hàng</th>
              <th>Ngày đặt hàng</th>
              <th>Ngày chuyển hàng</th>
              <th>Ngày nhận hàng</th>
              <th>Trạng thái</th>
              <th>Tổng tiền</th>
              <th>Hành động</th>
              
            </tr>
          </thead>
          <tbody>
            {this.loadFillData()}
          </tbody>
        </Table>
        </div>
      )
    }

  loadFillData(){

    return this.state.listSanpham.map((data)=>{
      return(
        <tr key={data.MADonHang}>
          <td>{data.MADonHang}</td>
          <td>{data.MaKhachHang}</td>
          <td>{data.NgayDatHang}</td>
          <td>{data.NgayChuyenHang}</td>
          <td>{data.NgayNhanHang}</td>
          <td>{data.TrangThai}</td>
          <td>{data.Tongtien} VNĐ</td>
          <td>
            <Link to={"/editorder/"+data.MADonHang} className="btn btn-primary"><FaWhmcs /></Link> 
            <Button color="danger" onClick={()=>this.onDelete(data.MaDienThoai)}><FaTrash /></Button>
             <Link to={"/orderdetail/chitietdonhang/"+data.MADonHang} className="btn btn-primary"><FaWpforms /></Link>
             <Link to={"/orderdetail/thongtin/"+data.MADonHang} className="btn btn-primary"><FaWpforms /></Link>
          </td>
        </tr>
      )
    })
  }

  onDelete(MaDienThoai){
        Swal.fire({
          title: 'Mày chắc chắn xóa?',
          text: 'Whats up men',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Tao chắc chắn',
          cancelButtonText: 'Tao không muốn xóa nữa'
        }).then((result) => {
          if (result.value) {
            this.sendDelete(MaDienThoai);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Không xóa nữa',
              'OH MY GOD',
              'error'
            )
          }
        })
    }
    sendDelete(MaDienThoai)
        {
        
          // url de backend
          const baseUrl = `http://localhost:5000/dienthoai/delete/${MaDienThoai}`;   // parameter data post
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


export default ListOrder;