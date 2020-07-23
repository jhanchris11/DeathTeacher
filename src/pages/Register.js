import React, { useState } from "react";
import logo from '../img/bot.jpg';
import { Form, Input, Button, Checkbox, notification  } from 'antd';
import { useHistory } from 'react-router-dom'
import { insertUser } from "../services/userService";
import { Link } from "react-router-dom";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 10 }
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 10 }
};

const Register = () => {
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const onFinish = async values => {
    setLoading(true);
    await insertUser(values);
    setLoading(false);
    openNotification('Registrado satisfactoriamente');
    history.push("/");
  };

  const openNotification = (message,description) => {
    const args = {
      message: message,
      description: description,
      duration: 0,
    };
    notification.success(args);
  };

    return (
        <div className="container">
        <div style={{float: 'left'}}>
        </div>
        <img id="user_pic" src={logo} />
        <div className="register_box">
          <form style={{marginLeft: 500}} onFinish={onFinish}>
            <h2 class="text-white font-italic" style={{textAlign: "center"}}>Registrarse</h2>
            <br>
            </br>
            <div className="input_box">
              <div>
                <input type="text" className="input" className="form-control" name="names" rules ={[
                  { required: true, message: "Por favor ingrese su nombre!" }
                ]} placeholder="Nombre" autoFocus></input>
              </div>
                <br>
                </br>
            </div>
          <div className="input_box">
            <div>
              <input type="text" className="input" className="form-control" name="firstname" rules={[
                  { required: true, message: "Por favor ingrese su Apellido Paterno!" }
                ]}  placeholder="Apellido Paterno"></input>
            </div>
            <br>
            </br>
          </div>
          <div className="input_box">
            <div>
              <input type="text" className="input" className="form-control" name="secondname" rules={[
                  { required: true, message: "Por favor ingrese su Apellido Materno!" }
                ]} placeholder="Apellido Materno">
                </input>
            </div>
            <br>
            </br>
          </div>
          <div className="input_box">
            <div>
              <input type="password" className="input" className="form-control" name="password" required={[
                  {
                    required: true,
                    message: "Por favor ingrese su contraseña!"
                  }
                ]} placeholder="Contraseña"></input>
            </div>
          </div>
          <a href="" className="forget">
          </a>
          <br>
          </br>
          <div className="input_box">
            <div>
              <input className="input" className="form-control" name="email" rules={[
                  { type: "email", message: "No es valido el email!" },
                  { required: true, message: "Por favor ingrese su email!" }
                ]} placeholder="E-mail"></input>
            </div>
            <br>
            </br>
          </div>
          <input loading={isLoading} type="submit" className="btn" value="Registrar" name=""></input>
        </form>
      </div>
    </div>
  );
  }
  
  export default Register;
  