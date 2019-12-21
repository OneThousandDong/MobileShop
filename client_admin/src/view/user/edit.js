import React from 'react';
import {  Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
// const baseUrl = "http://192.168.0.105:5000";

class EditKhachHang extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        dataSanpham:[],
        MaNguoiDung: "",
        TenNguoiDung:"",
        TenDangNhap:"",
        Email:"",
        SDT:"",
        Password:"",
        Level:""
      }
    }

    componentDidMount(){
    let ndId = this.props.match.params.employeeID;
    const url = "http://localhost:5000/nguoidung/list/"+ndId;
    axios.get(url)
    .then(res => {
        if (res.data) {
          const data = res.data[0];
          this.setState({
            dataSanpham: data,
           MaNguoiDung : data.MaNguoiDung,
           TenNguoiDung : data.TenNguoiDung,
           TenDangNhap : data.TenDangNhap,
           Email : data.Email,
           SDT  : data.SDT,
           Password: data.Password,
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

  render(){
    // let userId = this.props.match.params.id;
    return(
      <div>
      <Form>
        <Row>
          <Col xs="4">
                <FormGroup>
                    <Label for="eName">Mã nhân viên</Label>
                    <Input type="text" name="name" id="eName" value={this.state.MaNguoiDung} onChange={(value) => this.setState({MaNguoiDung:value.target.value})} disabled/>
                </FormGroup>
          </Col>
          <Col xs="4">
                <FormGroup>
                    <Label for="eName">Tên nhân viên</Label>
                    <Input type="text" name="name" id="eName" value={this.state.TenNguoiDung} onChange={(value) => this.setState({TenNguoiDung:value.target.value})}/>
                </FormGroup>
          </Col>
          
        </Row>
        <Row>
          <Col xs="4">
            <FormGroup>
                  <Label for="eEmail">Tên đăng nhập</Label>
                  <Input type="text" name="email" id="eEmail" value={this.state.TenDangNhap} onChange={(value)=> this.setState({TenDangNhap:value.target.value})} />
              </FormGroup>
          </Col>
          <Col xs="4">
            <FormGroup>
                  <Label for="eEmail">Email</Label>
                  <Input type="email" name="email" id="eEmail" value={this.state.Email} onChange={(value)=> this.setState({Email:value.target.value})} />
              </FormGroup>
          </Col>
        </Row>
        <Row>
          
          <Col xs="4">
                <FormGroup>
                    <Label for="ePhone">Phone</Label>
                    <Input type="text" id="ePhone" value={this.state.SDT} onChange={(value)=> this.setState({SDT:value.target.value})}/>
                </FormGroup>
          </Col>
          <Col xs="4">
              <FormGroup>
                  <Label for="eAddress">Mật khẩu</Label>
                  <Input type="text" name="address" id="eAddress" value={this.state.Password} onChange={(value)=> this.setState({Password:value.target.value})}/>
              </FormGroup>
          </Col>
        </Row>
        <Button color="info" onClick={()=>this.sendUpdate()}>Update</Button>
      </Form> 
      </div>
    )
  }

   onSubmit = () => {
    this.props.history.push('/listnhanvien');    
  }

  sendUpdate(){
  
     
  
      const baseUrl = `http://localhost:5000/nguoidung/update/${this.state.MaNguoiDung}`;

      const datapost = {
       
           MaNguoiDung : this.state.MaNguoiDung,
           TenNguoiDung : this.state.TenNguoiDung,
           TenDangNhap : this.state.TenDangNhap,
           Email : this.state.Email,
           SDT  : this.state.SDT,
           Password : this.state.Password,
           Level : 1
      }

      axios.put(baseUrl,datapost)
      .then(response=>{
        if (1==1) {
          // alert("Sửa thành công")
          Swal.fire(
          'Sửa thành công',
          '',
          'success'
            )
          this.onSubmit();
        }
        else {
          alert("Error")
        }
      }).catch(error=>{
        alert("Error 34 "+error)
      })
  }
}

export default EditKhachHang;