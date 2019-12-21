import React from 'react';
import {  Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

// const baseUrl = "http://192.168.0.105:5000";

class EditDonHang extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        dataSanpham:[],
        MADonHang: "",
        MaKhachHang:"",
        NgayDatHang:"",
        NgayChuyenHang:"",
        NgayNhanHang:"",
        TrangThai:"",
        Tongtien:""
      }
    }

    componentDidMount(){
    let userId = this.props.match.params.orderID;
    const url = "http://localhost:5000/donhang/list/"+userId;
    axios.get(url)
    .then(res => {
        if (res.data) {
          const data = res.data[0];
          this.setState({
            dataSanpham: data,
            MADonHang: data.MADonHang,
            MaKhachHang: data.MaKhachHang,
            NgayDatHang: data.NgayDatHang,
            NgayChuyenHang: data.NgayChuyenHang,
            NgayNhanHang: data.NgayNhanHang,
            TrangThai: data.TrangThai,
            Tongtien: data.Tongtien
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
          <Col xs="3">
                <FormGroup>
                    <Label for="eMa">Mã đơn hàng</Label>
                    <Input type="text" name="ma" id="eMa" value={this.state.MADonHang} onChange={(value) => this.setState({MADonHang:value.target.value})} disabled/>
                </FormGroup>
          </Col>
          <Col xs="3">
              <FormGroup>
                  <Label for="eTen">Mã khách hàng</Label>
                  <Input type="text" name="ten" id="eTen" value={this.state.MaKhachHang} onChange={(value) => this.setState({MaKhachHang:value.target.value})} disabled />
              </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
              <FormGroup>
                  <Label for="eHang">Ngày đặt hàng</Label>
                  <Input type="text" name="hang" id="eHang" value={this.state.NgayDatHang} onChange={(value) => this.setState({NgayDatHang:value.target.value})} />
              </FormGroup>
          </Col>
          <Col xs="3">
                <FormGroup>
                    <Label for="eSum">Ngày chuyển hàng</Label>
                    <Input type="text" id="eSum" value={this.state.NgayChuyenHang} onChange={(value)=> this.setState({NgayChuyenHang:value.target.value})}/>
                </FormGroup>
          </Col>
          <Col xs="3">
                <FormGroup>
                    <Label for="eSum">Ngày nhận hàng</Label>
                    <Input type="text" id="eSum" value={this.state.NgayNhanHang} onChange={(value)=> this.setState({NgayNhanHang:value.target.value})}/>
                </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
              <FormGroup>
                  <Label for="eGia">Trạng thái</Label>
                  <Input type="text" name="gia" id="eGia" value={this.state.TrangThai} onChange={(value)=> this.setState({TrangThai:value.target.value})}/>
              </FormGroup>
          </Col>
           <Col xs="4">
              <FormGroup>
                  <Label for="eGiakm">Tổng tiền</Label>
                  <Input type="text" name="giakm" id="eGiakm" value={this.state.Tongtien} onChange={(value)=> this.setState({Tongtien:value.target.value})}/>
              </FormGroup>
          </Col>
        </Row>
        <Button color="info" onClick={()=>this.sendUpdate()}>Update</Button>
      </Form> 
      </div>
    )
  }
   onSubmit = () => {
    this.props.history.push('/listsanpham');    
  }

  sendUpdate(){
    
      // url backend
      const baseUrl = `http://localhost:5000/dienthoai/update/${this.state.MADonHang}`;
      // parametros post
      const datapost = {
       
        NgayDatHang : this.state.NgayDatHang,
        NgayChuyenHang : this.state.NgayChuyenHang,
        TrangThai : this.state.TrangThai,
        NgayNhanHang  : this.state.NgayNhanHang,
        Tongtien: this.state.Tongtien
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

export default EditDonHang;