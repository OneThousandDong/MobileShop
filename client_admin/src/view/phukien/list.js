import React from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import '../dienthoai/dienthoai.css';
import {FaPlus, FaTrash, FaWhmcs,FaWpforms} from "react-icons/fa";

class ShowListPhuKien extends React.Component{
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
      axios.get("http://localhost:5000/phukien/list")
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
          <Link to="/phukien/createphukien" className="btn btn-primary"><FaPlus />Thêm phụ kiện</Link>
        </div>
      
        <Table hover>
          <thead>
            <tr>
              <th>Mã</th>
              <th>Loại</th>
              <th>Tên</th>
              <th>SL</th>
              <th>Giá</th>
              <th>Giá KM</th>
              <th>Hãng</th>
              <th>Thông tin</th>
              <th>HĐ</th>
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
        <tr key={data.MaPhuKien}>
          <td>{data.MaPhuKien}</td>
          <td>{data.LoaiPhuKien}</td>
          <td>{data.TenPhuKien}</td>
          <td>{data.SoLuong}</td>
          <td>{data.GiaBan}</td>
          <td>{data.GiaKhuyenMai}</td>
          <td>{data.Hang}</td>
          <td>{data.ThongTin}</td>
          <td>
            <Link to={"/phukien/editphukien/"+data.MaPhuKien} className="btn btn-primary"><FaWhmcs /></Link> 
            <Button color="danger" onClick={()=>this.onDelete(data.MaPhuKien)}><FaTrash /></Button> 
            <Link to={"/phukien/hinhanh/"+data.MaPhuKien} className="btn btn-primary"><FaWpforms/> </Link>
          </td>
        </tr>
      )
    })
  }

  onDelete(MaPhuKien){
        Swal.fire({
          title: 'Mày chắc chắn xóa?',
          text: 'Whats up men',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Tao chắc chắn',
          cancelButtonText: 'Tao không muốn xóa nữa'
        }).then((result) => {
          if (result.value) {
            this.sendDelete(MaPhuKien);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Không xóa nữa',
              'OH MY GOD',
              'error'
            )
          }
        })
    }
    sendDelete(MaPhuKien)
        {
        
          // url de backend
          const baseUrl = `http://localhost:5000/phukien/delete/${MaPhuKien}`;   // parameter data post
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


export default ShowListPhuKien;