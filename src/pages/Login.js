import React, {useState} from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import logo from '../img/bot.jpg';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Components } from 'antd/lib/date-picker/generatePicker';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { verifyUser } from "../services/userService";

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const onFinish = async values => {
    setLoading(true);
    let response = await verifyUser(values);
    setLoading(false);

    if(response.data["isExists"]){
        openNotification('Autenticado satisfactoriamente','Bienvenido a DeathTeacherBot',response.data.isExists);
        history.push("/");
    }else{
        openNotification('Error al autenticar','Nada es seguro',response.data.isExists);
    } 
  };

  const openNotification = (message,description,isExists) => {
    const args = {
      message: message,
      description: description,
      duration: 0,
    };
    isExists ? notification.success(args) : notification.error(args);
  };
  return (
    <div className="container">
      <img id="user_pic" src={logo}/>
      <div style={{float: 'left'}}>
      </div>
      <div className="login_box" >
        <form action="/users" method="POST" onFinish={onFinish}>
          <h2 class="text-white font-italic" style={{textAlign: "center"}}>Bienvenido</h2>
          <br>
          </br>
          <div className="input_box">
            <div>
              <h5>
                <span className="fas fa-user"></span>
                Usuario
              </h5>
              <input type="text" className="input fas fa-user" className="form-control" name="usuario" required="" placeholder="" autoFocus></input>
          </div>
          <br>
          </br>
        </div>
        <div className="input_box">
          <div>
            <h5>
              <span className="fas fa-lock"></span>
              Contraseña
            </h5>
            <input type="Password" className="input" className="form-control" name="contraseña" required="" placeholder=""></input>
          </div>
        </div>
        <a href="" className="forget">
        <Link to='/register'>Regístrate Ahora!</Link>
        </a>
        <br>
        </br>
        <br>
        </br>
        <input loading={isLoading} type="submit" className="btn" value="Ingresar" name=""></input>
      </form>
    </div>
  </div>
);
}

export default Login;
