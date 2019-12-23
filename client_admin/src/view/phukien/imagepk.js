import React from 'react';
import {  Button, Row, Col, Form, FormGroup, Label, Input, Progress } from 'reactstrap';
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
          title: 'Bạn chắc chắn muốn xóa?',
          text: '',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.value) {
            this.sendDelete(i);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'OK',
              '',
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

            onChangeHandler=event=>{
        this.setState({
          selectedFile: event.target.files
        })
      }

    onClickHandler = () =>{
        const data = new FormData()
        if(this.state.selectedFile == null){
            alert('Bạn chưa chọn ảnh')
        }
        else{
         for(var x = 0; x<this.state.selectedFile.length; x++) {
             data.append('file', this.state.selectedFile[x])
             console.log(this.state.selectedFile[x].name)
             axios.post("http://localhost:5000/haphukien/create",{
              MaPhuKien: this.state.MaPhuKien,
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
        setTimeout(
            function() {
                window.location.reload();
            }
            .bind(this),
            1000
        );
    }

  render(){
    // let userId = this.props.match.params.id;
    return(
      <div className="listch">
      <center className="intro">Hình ảnh phụ kiện: {this.state.TenPhuKien}</center>
      <center><div>{this.imageLoad()}</div></center>
      <center style={{paddingTop: "20px"}}>
      <h3>Image Upload</h3>
          <input type="file" name="file" multiple onChange={this.onChangeHandler} />
          <Button type="button" onClick={this.onClickHandler}>Upload</Button>
          <div class="form-group">
            <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>
          </div>
        </center>  
      </div>
    )
  }

}

export default HinhAnhPhuKien;