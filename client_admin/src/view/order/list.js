import React from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import '../dienthoai/dienthoai.css';
import {FaPlus, FaTrash, FaWhmcs,FaWpforms,FaBookmark} from "react-icons/fa";

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

        <Table hover>
           <col style={{width:"5%"}} />
            <col style={{width:"5%"}} />
            <col style={{width:"10%"}} />
            <col style={{width:"10%"}} />
            <col style={{width:"10%"}} />
            <col style={{width:"10%"}} />
            <col style={{width:"7%"}} />
            <col style={{width:"3%"}} />
          <thead>
            <tr>
              <th>Mã đơn</th>
              <th>Mã khách</th>
              <th>Ngày đặt</th>
              <th>Ngày chuyển</th>
              <th>Ngày nhận</th>
              <th>Trạng thái</th>
              <th>Tổng tiền</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {this.loadFillData()}
          </tbody>
        </Table>

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
          <td className="lasttd"><ul>
            <li><Link to={"/editorder/"+data.MADonHang} className="btn btn-primary"><FaWhmcs /></Link></li> 
            <li><Button color="danger" onClick={()=>this.onDelete(data.MADonHang)}><FaTrash /></Button></li>
            </ul>
            <ul>
            <li><Link to={"/orderdetail/chitietdonhang/"+data.MADonHang} className="btn btn-primary"><FaWpforms /></Link></li>
            <li><Link to={"/orderdetail/thongtin/"+data.MADonHang} className="btn btn-primary last"><FaBookmark /></Link></li>
            </ul>
          </td>
        </tr>
      )
    })
  }

  onDelete(MADonHang){
        Swal.fire({
          title: 'Bạn chắc chắc muốn xóa?',
          text: '',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.value) {
            this.sendDelete(MADonHang);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'OK',
              '',
              'error'
            )
          }
        })
    }

    sendDelete(MADonHang)
        {
          const chitietUrl = `http://localhost:5000/chitietdonhang/delete/${MADonHang}`;  
          axios.delete(chitietUrl)
          .then(response =>{
          })
          .catch ( error => {
            alert("Error 325 ")
          })

          // url  backend
          const baseUrl = `http://localhost:5000/donhang/delete/${MADonHang}`;   // parameter data post
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