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
            <col style={{width:"3%"}} />
            <col style={{width:"5%"}} />
            <col style={{width:"10%"}} />
            <col style={{width:"8%"}} />
            <col style={{width:"5%"}} />
            <col style={{width:"5%"}} />
            <col style={{width:"7%"}} />
            <col style={{width:"25%"}} />
            <col style={{width:"1%"}} />


          <thead>
            <tr>
              <th>Mã</th>
              <th>Loại</th>
              <th>Tên</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Giá KM</th>
              <th>Hãng</th>
              <th>Thông tin</th>
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
        <tr key={data.MaPhuKien}>
          <td>{data.MaPhuKien}</td>
          <td>{data.LoaiPhuKien}</td>
          <td>{data.TenPhuKien}</td>
          <td>{data.SoLuong}</td>
          <td>{data.GiaBan}</td>
          <td>{data.GiaKhuyenMai}</td>
          <td>{data.Hang}</td>
          <td>{data.ThongTin}</td>
          <td className="lasttd"><ul>
            <Link to={"/phukien/editphukien/"+data.MaPhuKien} className="btn btn-primary"><FaWhmcs /></Link> 
            <Button color="danger" onClick={()=>this.onDelete(data.MaPhuKien)}><FaTrash /></Button> </ul>
            <Link to={"/phukien/hinhanh/"+data.MaPhuKien} className="btn btn-primary"><FaWpforms/></Link>
          </td>
        </tr>
      )
    })
  }

  onDelete(MaPhuKien){
        Swal.fire({
          title: 'Bạn chắc chắc muốn xóa?',
          text: '',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Tao chắc chắn',
          cancelButtonText: 'Tao không muốn xóa nữa'
        }).then((result) => {
          if (result.value) {
            this.sendDelete(MaPhuKien);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'OK',
              '',
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

          const ImageUrl = `http://localhost:5000/haphukien/deleteall/${MaPhuKien}`;
          axios.delete(ImageUrl)
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