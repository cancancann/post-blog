import { Layout } from "antd";
import './AuthLayout.css'

const AuthLayout=(props)=>{
    return(
        <Layout className="auth-layout">
            {props.children}
        </Layout>
    )
}

export default AuthLayout