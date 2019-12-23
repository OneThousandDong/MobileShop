import React from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import './dienthoai.css';
import { IconContext } from "react-icons";
import {FaPlus, FaTrash, FaCog, FaWpforms,FaWhmcs, FaSearch} from "react-icons/fa";

class ShowListSanPham extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products:[],
      filterText: ""
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
        this.setState({products:data})
      }
      else {
        alert("Error web service")
      }
    })
    .catch(error=>{
      alert("Error server "+error)
    })

    }

  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
 

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var products = this.state.products.slice();
    var newProducts = products.map(function(product) {

      for (var key in product) {

        if (key == item.name && product.id == item.id) {
          product[key] = item.value;
        }
      }
          return product;
    });
    this.setState({products:newProducts});
  };

  render(){
    return(
      <div>
      <div className="top">
        <Link to="/createsanpham" className="btn btn-primary"><FaPlus />Thêm sản phẩm</Link>
      </div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)}  products={this.state.products} filterText={this.state.filterText}/>
        {/*<Table hover>
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
        </Table>*/}
      </div>
      )
    }

  // loadFillData(){

  //   return this.state.products.map((data)=>{
  //     return(
  //       <tr key={data.MaDienThoai}>
  //         <td>{data.MaDienThoai}</td>
  //         <td>{data.TenDienThoai}</td>
  //         <td>{data.Hang}</td>
  //         <td>{data.SoLuong}</td>
  //         <td>{data.GiaBan}</td>
  //         <td>{data.GiaKhuyenMai}</td>
  //         <td>
  //           <Link to={"/editsanpham/"+data.MaDienThoai} className="btn btn-primary"><FaCog /></Link> 
  //           <Button color="danger" onClick={()=>this.onDelete(data.MaDienThoai)}><FaTrash /></Button>
  //            <Link to={"/dienthoai/cauhinh/"+data.MaDienThoai} className="btn btn-primary"><FaWpforms/> </Link>
  //         </td>
  //       </tr>
  //     )
  //   })
  // }

  // onDelete(MaDienThoai){
  //       Swal.fire({
  //         title: 'Mày chắc chắn xóa?',
  //         text: 'Whats up men',
  //         icon: 'warning',
  //         showCancelButton: true,
  //         confirmButtonText: 'Tao chắc chắn',
  //         cancelButtonText: 'Tao không muốn xóa nữa'
  //       }).then((result) => {
  //         if (result.value) {
  //           this.sendDelete(MaDienThoai);
  //         } else if (result.dismiss === Swal.DismissReason.cancel) {
  //           Swal.fire(
  //             'Không xóa nữa',
  //             'OH MY GOD',
  //             'error'
  //           )
  //         }
  //       })
  //   }
  // sendDelete(MaDienThoai)
  //       {
        
  //         // url de backend
  //         const baseUrl = `http://localhost:5000/dienthoai/delete/${MaDienThoai}`;   // parameter data post
  //         const cauhinhUrl = `http://localhost:5000/cauhinh/delete/${MaDienThoai}`;
  //         const haUrl = `http://localhost:5000/hadienthoai/deleteall/${MaDienThoai}`;
  //         // network
  //         axios.delete(cauhinhUrl)
  //         .then(response =>{
            
  //         })
  //         .catch ( error => {
  //           alert("Error ")
  //         })

  //         axios.delete(haUrl)
  //         .then(response =>{
            
  //         })
  //         .catch ( error => {
  //           alert("Error 325 ")
  //         })
        
  //         axios.delete(baseUrl)
  //         .then(response =>{
  //           if (response.data) {
  //             Swal.fire(
  //               'Đã xóa',
  //               'OK',
  //               'success'
  //             )
  //             this.loadSanpham()
  //           }
  //         })
  //         .catch ( error => {
  //           alert("Error 325 ")
  //         })
  //       }
}

class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div className="sear">
        <IconContext.Provider value={{ color: "#6666ff",size: "2em", className: "global-class-name" }}>
          <FaSearch />
       </IconContext.Provider>
        <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

class ProductTable extends React.Component {

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var filterText = this.props.filterText.charAt(0).toUpperCase() + this.props.filterText.slice(1);;
    console.log(filterText);
    var product = this.props.products.map(function(product) {
      if (product.TenDienThoai.indexOf(filterText) === -1) {
        return;
      }
      return (<ProductRow key={product.MaDienThoai} onProductTableUpdate={onProductTableUpdate} product={product}/>)
    });

    return (
        <Table hover>
            <col style={{width:"5%"}} />
            <col style={{width:"20%"}} />
            <col style={{width:"10%"}} />
            <col style={{width:"5%"}} />
            <col style={{width:"10%"}} />
            <col style={{width:"10%"}} />
            <col style={{width:"1%"}} />
          <thead>
            <tr>
              <th>Mã</th>
              <th>Tên điện thoại</th>
              <th>Hãng</th>
              <th>Số lượng</th>
              <th>Giá bán</th>
              <th>Giá khuyến mãi</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {product}
          </tbody>
        </Table>
    )
  }
}

class ProductRow extends React.Component {
  
  render() {

    return (
      <tr className="eachRow">
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          "type": "name",
          value: this.props.product.MaDienThoai,
          id: this.props.product.MaDienThoai
        }}/>
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "ten",
          value: this.props.product.TenDienThoai,
          id: this.props.product.MaDienThoai
        }}/>
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "hang",
          value: this.props.product.Hang,
          id: this.props.product.MaDienThoai
        }}/>
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "soluong",
          value: this.props.product.SoLuong,
          id: this.props.product.MaDienThoai
        }}/>
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "gia",
          value: this.props.product.GiaBan,
          id: this.props.product.MaDienThoai
        }}/>
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "giakm",
          value: this.props.product.GiaKhuyenMai,
          id: this.props.product.MaDienThoai
        }}/>
        <td className="lasttd">
        <ul>
            <Link to={"/editsanpham/"+this.props.product.MaDienThoai} className="btn btn-primary"><FaWhmcs /></Link> 
            <Button color="danger" onClick={()=>this.onDelete()}><FaTrash /></Button> </ul>
            <Link to={"/dienthoai/cauhinh/"+this.props.product.MaDienThoai} className="btn btn-primary"><FaWpforms/> </Link>
          </td>
      </tr>
    );

  }
    onDelete(){
        Swal.fire({
          title: 'Bạn chắc chắn muốn xóa?',
          text: '',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'OK',
          cancelButtonText: 'Không'
        }).then((result) => {
          if (result.value) {
            this.sendDelete();
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              '',
              '',
              'error'
            )
          }
        })
    }
    sendDelete()
        {
        
          // url de backend
          const baseUrl = `http://localhost:5000/dienthoai/delete/${this.props.product.MaDienThoai}`;   // parameter data post
          const cauhinhUrl = `http://localhost:5000/cauhinh/delete/${this.props.product.MaDienThoai}`;
          const haUrl = `http://localhost:5000/hadienthoai/deleteall/${this.props.product.MaDienThoai}`;
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
              window.location.reload();
            }
          })
          .catch ( error => {
            alert("Error DT ")
          })
        } 

}
class EditableCell extends React.Component {

  render() {
    return (
      <td>
        {this.props.cellData.value}
      </td>
    );

  }

}
export default ShowListSanPham;