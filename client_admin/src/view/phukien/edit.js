import React from 'react';
import {  Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
// const baseUrl = "http://192.168.0.105:5000";

class EditPhuKien extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        dataSanpham:[],
        maPhuKien: "",
        loaiPhuKien:"",
        tenPhuKien:"",
        soLuong:"",
        giaBan:"",
        giaKhuyenMai:"",
        hang:"",
        thongtin:""
      }
    }

    componentDidMount(){
    let pkId = this.props.match.params.phukienID;
    const url = "http://localhost:5000/phukien/list/"+pkId;
    axios.get(url)
    .then(res => {
        if (res.data) {
          const data = res.data[0];
          this.setState({
            dataSanpham: data,
           maPhuKien : data.MaPhuKien,
           loaiPhuKien : data.LoaiPhuKien,
           tenPhuKien : data.TenPhuKien,
           soLuong : data.SoLuong,
           giaBan  : data.GiaBan,
           giaKhuyenMai: data.GiaKhuyenMai,
           hang: data.Hang,
           thongtin: data.ThongTin
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
    return(
      <Form>
        <Row>
          <Col xs="4">
                <FormGroup>
                    <Label for="eMa">Mã phụ kiện</Label>
                    <Input type="number" name="ma" id="eMa" value={this.state.maPhuKien} onChange={(value) => this.setState({maPhuKien:value.target.value})}/>
                </FormGroup>
          </Col>
          <Col xs="4">
              <FormGroup>
                  <Label for="eTen">Loại phụ kiện</Label>
                  <Input type="text" name="ten" id="eTen" value={this.state.loaiPhuKien} onChange={(value) => this.setState({loaiPhuKien:value.target.value})} />
              </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs="4">
              <FormGroup>
                  <Label for="eTenpk">Tên phụ kiện</Label>
                  <Input type="text" name="tenpk" id="eTenpk" value={this.state.tenPhuKien} onChange={(value) => this.setState({tenPhuKien:value.target.value})} />
              </FormGroup>
          </Col>
          <Col xs="4">
                <FormGroup>
                    <Label for="eSum">Số lượng</Label>
                    <Input type="number" id="eSum" value={this.state.soLuong} onChange={(value)=> this.setState({soLuong:value.target.value})}/>
                </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs="4">
              <FormGroup>
                  <Label for="eGia">Giá bán</Label>
                  <Input type="number" name="gia" id="eGia" value={this.state.giaBan} onChange={(value)=> this.setState({giaBan:value.target.value})}/>
              </FormGroup>
          </Col>
           <Col xs="4">
              <FormGroup>
                  <Label for="eGiakm">Giá khuyến mãi</Label>
                  <Input type="number" name="giakm" id="eGiakm" value={this.state.giaKhuyenMai || ''} onChange={(value)=> this.setState({giaKhuyenMai:value.target.value})}/>
              </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs="4">
              <FormGroup>
                  <Label for="eHang">Hãng</Label>
                  <Input type="text" name="hang" id="eHang" value={this.state.hang || ''} onChange={(value)=> this.setState({hang:value.target.value})}/>
              </FormGroup>
          </Col>
           <Col xs="4">
              <FormGroup>
                  <Label for="eThongtin">Thông tin</Label>
                  <Input type="textarea" name="tt" id="eThongtin" value={this.state.thongtin || ''} onChange={(value)=> this.setState({thongtin:value.target.value})}/>
              </FormGroup>
          </Col>
        </Row>
        <Button color="info" onClick={()=>this.sendUpdate()}>Update</Button>
      </Form> 
    )
  }

   onSubmit = () => {
    this.props.history.push('/listphukien');    
  }

  sendUpdate(){
  
     
  
      const baseUrl = `http://localhost:5000/phukien/update/${this.state.maPhuKien}`;

      const datapost = {
       
           LoaiPhuKien : this.state.loaiPhuKien,
           TenPhuKien : this.state.tenPhuKien,
           SoLuong : this.state.soLuong,
           GiaBan  : this.state.giaBan,
           GiaKhuyenMai: this.state.giaKhuyenMai,
           Hang: this.state.hang,
           ThongTin: this.state.thongtin
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

export default EditPhuKien;