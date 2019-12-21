import React from 'react';
import {  Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import {FaPlus, FaTrash, FaCog, FaWpforms} from "react-icons/fa";

// const baseUrl = "http://192.168.0.105:5000";

class HinhAnhPhuKien extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        dataSanpham:[],
        TenPhuKien:"",
        MaPhuKien:"",
        DuongDan: [],
      }
    }

    componentDidMount(){
    let dtId = this.props.match.params.haphukienID;
    const urldt = "http://localhost:5000/phukien/haphukien/"+dtId;
    axios.get(urldt)
    .then(res => {
        if (res.data) {
          const data = res.data[0];
          const im = res.data;
         
          this.setState({
            dataSanpham: data,
            TenPhuKien: data.TenPhuKien,
            MaPhuKien: data.MaPhuKien,
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
    }

    imageLoad(){
        return this.state.DuongDan.map((i) => {
            let urlIm = "http://localhost:5000/accessories/"+i;
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
          const baseUrl = `http://localhost:5000/haphukien/delete/${i}`;   // parameter data post

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
      <center className="intro">Hình ảnh phụ kiện: {this.state.TenPhuKien}</center>
      <center><div>{this.imageLoad()}</div></center>
      </div>
    )
  }

}

export default HinhAnhPhuKien;