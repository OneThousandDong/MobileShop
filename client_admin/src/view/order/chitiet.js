import React from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import {FaPlus, FaTrash, FaWhmcs} from "react-icons/fa";

class ChitietOrder extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listSanpham:[]
    }
  }

  componentDidMount(){
    let chitiet = this.props.match.params.orderDTID;
       const url = "http://localhost:5000/chitietdonhang/list/"+chitiet;
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
              <th>Loại sản phẩm</th>
              <th>Màu sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Giá sản phẩm</th>
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
      if(data.LoaiSanPham === "Điện thoại"){
      return(
        <tr key={data.MADonHang}>
          <td>{data.MADonHang}</td>
          <td>{data.LoaiSanPham}</td>
          <td>{data.Mau}</td>
          <td>{data.TenDienThoai}</td>
          <td>{data.GiaBan}</td>
          <td>
            {/*<Link to={"/editorder/"+data.MADonHang} className="btn btn-primary"><FaWhmcs /></Link> */}
            <Button color="danger" onClick={()=>this.onDelete(data.MADonHang)}><FaTrash /></Button>
             {/*<Link to={"/order/chitietdonhang/"+data.MADonHang} className="btn btn-primary">Chi tiết</Link>*/}
          </td>
        </tr>
      )
    }else{
        return(
        <tr key={data.MADonHang}>
          <td>{data.MADonHang}</td>
          <td>{data.LoaiSanPham}</td>
          <td>{data.Mau}</td>
          <td>{data.TenPhuKien}</td>
          <td>{data.GiaBan}</td>
          <td>
            {/*<Link to={"/editorder/"+data.MADonHang} className="btn btn-primary"><FaWhmcs /></Link> */}
            <Button color="danger" onClick={()=>this.onDelete(data.MADonHang)}><FaTrash /></Button>
             {/*<Link to={"/order/chitietdonhang/"+data.MADonHang} className="btn btn-primary">Chi tiết</Link>*/}
          </td>
        </tr>
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


export default ChitietOrder;