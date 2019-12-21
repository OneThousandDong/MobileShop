import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import { FaShoppingCart, FaUserAlt, FaHome, FaMobileAlt, FaHeadphonesAlt,FaUsers, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Row, Col ,Button} from 'reactstrap';

import Order from '../order/list';
import EditOrder from '../order/edit';
import Chitiet from '../order/chitiet';
import ThongTinDonHang from '../order/thongtindonhang'

import FormCreateSanPham from '../dienthoai/form';
import ShowListSanPham from '../dienthoai/list';
import EditSanPham from '../dienthoai/edit';

import ShowList from '../user/list';
import Edit from '../user/edit';

import ShowListPhuKien from '../phukien/list';
import EditPhuKien from '../phukien/edit';
import CreatePhuKien from '../phukien/form';
import HinhAnhPhuKien from '../phukien/imagepk';

import ShowListNhanVien from '../nhanvien/list';
import CreateNhanVien from '../nhanvien/form';
import EditNhanVien from '../nhanvien/edit';

import Upload from '../dienthoai/image';
import Cauhinh from '../cauhinh/list';
import './verticalmenu.css';

import Login from '../login/login.js';

class VerticalMenu extends React.Component{
  constructor(props) {
   super(props);
 }
  logout(){
      this.props.history.push('/login');
   }
  render(){
  return (
  <Router>      
        <div className="wrapper">
           <div className="sidebar">
              <h2>Dashboard</h2>
              <ul>
                  <li><Link to="/listsanpham" style={{ textDecoration: 'none'}}><FaHome /> Home</Link></li>
                  <li><Link to="/listsanpham" style={{ textDecoration: 'none'}}><FaMobileAlt /> Điện Thoại</Link></li>
                  <li><Link to="/listphukien" style={{ textDecoration: 'none'}}><FaHeadphonesAlt /> Phụ Kiện</Link></li>
                  <li><Link to="/listuser" style={{ textDecoration: 'none'}}><FaUsers /> Khách Hàng</Link></li>
                  <li><Link to="/listnhanvien" style={{ textDecoration: 'none'}}><FaUserAlt /> Nhân Viên</Link></li>
                  <li><Link to="/order" style={{ textDecoration: 'none'}}><FaShoppingCart /> Đơn hàng</Link></li>
                  <button onClick={()=>this.logout()}><FaSignOutAlt /> Đăng xuất</button>
                  
              </ul>
          </div>
          <div className="main_content">
            <div className="menutop">
                <div>
                  
                </div>
            </div>
            <div className="contentbottom">
            </div>
            <div className="content">
              <Route  path="/listuser" component={ShowList} />
              <Route  path="/user/edit/:employeeID" component={Edit} />

              <Route  path="/order" component={Order} />
              <Route  path="/editorder/:orderID" component={EditOrder} />
              <Route  path="/orderdetail/chitietdonhang/:orderDTID" component={Chitiet} />
              <Route  path="/orderdetail/thongtin/:odID" component={ThongTinDonHang} />

              <Route  path="/upload" component={Upload} />
              

              <Route  path="/listsanpham" component={ShowListSanPham} />
              <Route  path="/createsanpham" component={FormCreateSanPham} />
              <Route  path="/editsanpham/:sanphamID" component={EditSanPham} />

              <Route  path="/listphukien" component={ShowListPhuKien} />
              <Route  path="/phukien/createphukien" component={CreatePhuKien} />
              <Route  path="/phukien/editphukien/:phukienID" component={EditPhuKien} />
              <Route  path="/phukien/hinhanh/:haphukienID" component={HinhAnhPhuKien} />

              <Route  path="/listnhanvien" component={ShowListNhanVien} />
              <Route  path="/nhanvien/themnhanvien" component={CreateNhanVien} />
              <Route  path="/nhanvien/suanhanvien/:nguoidungID" component={EditNhanVien} />

              <Route  path="/dienthoai/cauhinh/:cauhinhID" component={Cauhinh} />

             
              </div>
          </div>
        </div>

  
        <div>
          {/*<img src={process.env.PUBLIC_URL + "favicon.ico"}
                alt="photo"
                width="300px" */}
        </div>
  </Router>
)
}
}     

export default VerticalMenu;




