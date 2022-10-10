import { Button, Card, Form, Input} from "antd"
import { useNavigate } from "react-router-dom"
import logo from '../../../assets/logo.png'
import {request} from "../../../request/Request"
import './SignIn.css'


const SignIn = () => {
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const onFinish = (values)=>{
        request.post('user/signIn',{
            user_name:values.username,
            password:values.password
        }).then(()=>{
            navigate('/')
        })
    }

    return (
        <div>
            <Card className="sign-in-card" >
                <div className="sign-in-logo">
                    <img src={logo} alt="logo" />
                </div>
                <Form form={form} name="login_form" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} autoComplete="off" onFinish={onFinish} >

                    <Form.Item label="Kullanıcı adı" name="username" rules={[{ required: true, message: "Kullanıcı adı gir.." }]} >
                        <Input autoFocus placeholder="Kullanıcı Adı.." />

                    </Form.Item>
                    <Form.Item label="Kullanıcı Parola" name="password" rules={[{ required: true, message: "Şifrenizi giriniz.." }, { min: 8, message: "Parola 8 karakter olmalıdır.." }]} >
                        <Input.Password placeholder="*****"/>

                    </Form.Item>


                    <Form.Item wrapperCol={{offset:8,span:16}}>
                        <Button type="primary" htmlType="submit" className="w-full">
                            Giriş Yap
                        </Button>
                    </Form.Item>
                    <Form.Item wrapperCol={{offset:8,span:16}}>
                        <Button type="link"  className="w-full" onClick={()=>{navigate('/auth/sign-up')}}>
                            Kayıt Ol
                        </Button>
                    </Form.Item>
                </Form>


            </Card>
        </div>
    )
}

export default SignIn