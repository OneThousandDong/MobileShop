import React from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import './dienthoai.css';
import {FaPlus, FaTrash, FaCog, FaWpforms} from "react-icons/fa";

class ShowListSanPham extends React.Component{
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
      axios.get("http://localhost:5000/dienthoai/list")
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
        {/*<Link to="/upload" className="btn btn-primary"><FaPlus />Upload</Link>*/}

      </div>
        <Table hover>
          <thead>
            <tr>
              <th>Mã điện thoại</th>
              <th>Tên điện thoại</th>
              <th>Hãng</th>
              <th>Số lượng</th>
              <th>Giá bán</th>
              <th>Giá khuyến mãi</th>
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
        <tr key={data.MaDienThoai}>
          <td>{data.MaDienThoai}</td>
          <td>{data.TenDienThoai}</td>
          <td>{data.Hang}</td>
          <td>{data.SoLuong}</td>
          <td>{data.GiaBan}</td>
          <td>{data.GiaKhuyenMai}</td>
          <td>
            <Link to={"/editsanpham/"+data.MaDienThoai} className="btn btn-primary"><FaCog /></Link> 
            <Button color="danger" onClick={()=>this.onDelete(data.MaDienThoai)}><FaTrash /></Button>
             <Link to={"/dienthoai/cauhinh/"+data.MaDienThoai} className="btn btn-primary"><FaWpforms/> </Link>
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
          const cauhinhUrl = `http://localhost:5000/cauhinh/delete/${MaDienThoai}`;
          const haUrl = `http://localhost:5000/hadienthoai/delete/${MaDienThoai}`;
          // network
          axios.delete(cauhinhUrl)
          .then(response =>{
            
          })
          .catch ( error => {
            alert("Error 325 ")
          })

          axios.delete(haUrl)
          .then(response =>{
            
          })
          .catch ( error => {
            alert("Error 325 ")
          })
        
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


export default ShowListSanPham;