import React from 'react';
import {  Button, Row, Col, Form, FormGroup, Label, Input ,Progress} from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
class FormCreatePhuKien extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        maPhuKien: "",
        loaiPhuKien:"",
        tenPhuKien:"",
        soLuong:"",
        giaBan:"",
        giaKhuyenMai:"",
        hang:"",
        thongtin:"",
        selectedFile: null,
        loaded:0,
      }
  }

  onChangeHandler=event=>{
        this.setState({
          selectedFile: event.target.files
        })
      }

  render(){
    return(
      <div>
      <Form>
        <Row>
          <Col xs="4">
                <FormGroup>
                    <Label for="eMa">Mã phụ kiện</Label>
                    <Input type="text" name="ma" id="eMa" value={this.state.maPhuKien} onChange={(value) => this.setState({maPhuKien:value.target.value})}/>
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
                  <Label for="eHang">Tên phụ kiện</Label>
                  <Input type="text" name="hang" id="eHang" value={this.state.tenPhuKien} onChange={(value) => this.setState({tenPhuKien:value.target.value})} />
              </FormGroup>
          </Col>
          <Col xs="4">
                <FormGroup>
                    <Label for="eSum">Số lượng</Label>
                    <Input type="text" id="eSum" value={this.state.soLuong} onChange={(value)=> this.setState({soLuong:value.target.value})}/>
                </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
              <FormGroup>
                  <Label for="eGia">Giá bán</Label>
                  <Input type="text" name="gia" id="eGia" value={this.state.giaBan} onChange={(value)=> this.setState({giaBan:value.target.value})}/>
              </FormGroup>
          </Col>
           <Col xs="4">
              <FormGroup>
                  <Label for="eGiakm">Giá khuyến mãi</Label>
                  <Input type="text" name="giakm" id="eGiakm" value={this.state.giaKhuyenMai} onChange={(value)=> this.setState({giaKhuyenMai:value.target.value})}/>
              </FormGroup>
          </Col>
        </Row>
          <Row>
          <Col xs="4">
              <FormGroup>
                  <Label for="eHang">Hãng</Label>
                  <Input type="text" name="hang" id="eHang" value={this.state.hang} onChange={(value)=> this.setState({hang:value.target.value})}/>
              </FormGroup>
          </Col>
           <Col xs="4">
              <FormGroup>
                  <Label for="eThongtin">Thông tin</Label>
                  <Input type="textarea" name="tt" id="eThongtin" value={this.state.thongtin} onChange={(value)=> this.setState({thongtin:value.target.value})}/>
              </FormGroup>
          </Col>
        </Row>
        <h3>Image Upload</h3>
      <input type="file" name="file" multiple onChange={this.onChangeHandler} />
      <div class="form-group">
         <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>
      </div>
        <Button color="info" onClick={()=>this.sendSave()}>Create</Button>
      </Form> 
      </div>
    )
  }

 onSubmit = () => {
    this.props.history.push('/listphukien');    
  }

   sendSave(){


        const baseUrl = "http://localhost:5000/phukien/create";

        const datapost = {
           MaPhuKien : this.state.maPhuKien,
           LoaiPhuKien : this.state.loaiPhuKien,
           TenPhuKien : this.state.tenPhuKien,
           SoLuong : this.state.soLuong,
           GiaBan  : this.state.giaBan,
           GiaKhuyenMai : this.state.giaKhuyenMai,
           Hang: this.state.hang,
           ThongTin: this.state.thongtin
        }

       axios.post(baseUrl,datapost)
          .then(response=>{
             if (1==1) {
                Swal.fire(
                'Thêm thành công',
                '',
                'success'
                  )
                this.onSubmit();
                }
              else {
               alert(response.data.message)
              }
          }).catch(error=>{
             alert("Error 34 "+error)
          })

      const data = new FormData()
        for(var x = 0; x<this.state.selectedFile.length; x++) {
             data.append('file', this.state.selectedFile[x])
             console.log(this.state.selectedFile[x].name)
             axios.post("http://localhost:5000/haphukien/create",{
              MaDT: this.state.campmaDienthoai,
              DuongDan: this.state.selectedFile[x].name
             })

        }
        axios.post("http://localhost:5000/uploadpk", data, { 
          onUploadProgress: ProgressEvent => {
         this.setState({
           loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
               })
           },
          })
          .then(res => { // then print response status
          })


    }
}

export default FormCreatePhuKien;