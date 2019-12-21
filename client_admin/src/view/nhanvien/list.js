import React from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import '../dienthoai/dienthoai.css';
import {FaPlus, FaTrash, FaWhmcs} from "react-icons/fa";

class ShowListNhanVien extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listEmployee:[]
    }
  }

  componentDidMount(){
     this.loadEmployee();
  }

  loadEmployee(){
      axios.get("http://localhost:5000/nguoidung/list")
      .then(res=>{
      if (res.data) {
        const data = res.data
        this.setState({listEmployee:data})
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
        <Link to="/nhanvien/themnhanvien" className="btn btn-primary"><FaPlus />Thêm nhân viên</Link>

      </div>
        <Table hover>
          <thead>
            <tr>
              <th>Mã nhân viên</th>
              <th>Tên nhân viên</th>
              <th>Tên đăng nhập</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Mật khẩu</th>
              {/*<th>Level</th>*/}
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

    return this.state.listEmployee.map((data)=>{
        if(data.Level === 2){
      return(
        <tr key={data.MaNguoiDung}>
          <td>{data.MaNguoiDung}</td>
          <td>{data.TenNguoiDung}</td>
          <td>{data.TenDangNhap}</td>
          <td>{data.Email}</td>
          <td>{data.SDT}</td>
          <td>{data.Password}</td>
          {/*<td>{data.Level}</td>*/}
          <td>
            <Link to={"/nhanvien/suanhanvien/"+data.MaNguoiDung} className="btn btn-primary"><FaWhmcs/></Link> 
          
            <Button color="danger" onClick={()=>this.onDelete(data.MaNguoiDung)}><FaTrash/></Button> 
          </td>
        </tr>
      )
      }
      
    })
  }

    onDelete(MaNguoiDung){
        Swal.fire({
          title: 'Are you sure?',
          text: 'Nguyen Huu Minh Quang',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
        }).then((result) => {
          if (result.value) {
            this.sendDelete(MaNguoiDung)
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelled',
              'OH MY GOD',
              'error'
            )
          }
        })
    }
    sendDelete(MaNguoiDung)
        {
           // url de backend
          const baseUrl = `http://localhost:5000/nguoidung/delete/${MaNguoiDung}`;   // parameter data post
          // network
          axios.delete(baseUrl)
          .then(response =>{
            if (response.data) {
              Swal.fire(
                'Đã xóa',
                'OK',
                'success'
              )
              this.loadEmployee()
            }
          })
          .catch ( error => {
            alert("Error 325 ")
          })
        }
}


export default ShowListNhanVien;