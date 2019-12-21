import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback,
} from 'reactstrap';
import axios from 'axios'
import auth from "./auth.js";
import {withRouter ,Redirect} from 'react-router-dom';
import VerticalMenu from '../layout/verticalmenu.js';
import './login.css';


class Login extends Component {
  constructor(props) {
    super(props);

    let login = false

      this.state = {
      email: '',
      password: '',
      validate: {
        emailState: '',
      },
      login
    }
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
      if (emailRex.test(e.target.value)) {
        validate.emailState = 'has-success'
      } else {
        validate.emailState = 'has-danger'
      }
      this.setState({ validate })
    }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }

  submitForm(e) {
   
     e.preventDefault();
    //  console.log(`Email: ${ this.state.email }`)
    
    // if(this.state.email === 'quang@99.com'){
    //     this.setState({
    //       login : true
    //     })
    // }

   const user = {
      Email: this.state.email,
      Password: this.state.password
    }

    
    axios.post('http://localhost:5000/nguoidung/login', user)
    .then(response => {
      if(response.status === 200){
        // this.props.history.push("/listsanpham");
        auth.login(() => {
            this.props.history.push("/listsanpham");
          });
      };
    })
    .catch(err => {
      console.log(err)
    })
    // console.log(`Email: ${ this.state.email }`)
  }

  render() {
    const { email, password } = this.state;
    return (
      <Container className="App">
        <h2>Đăng nhập</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Tài khoản</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="abc@gmail.com"
                value={ email }
                valid={ this.state.validate.emailState === 'has-success' }
                invalid={ this.state.validate.emailState === 'has-danger' }
                onChange={ (e) => {
                            this.validateEmail(e)
                            this.handleChange(e)
                          } }
              />
            
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Mật khẩu</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={ password }
                onChange={ (e) => this.handleChange(e) }
            />
            </FormGroup>
          </Col>
          <Button color="primary"  onClick={ (e) => this.submitForm(e) }>Sign In</Button>
      </Form>
      </Container>
    );
  }
}

export default Login;