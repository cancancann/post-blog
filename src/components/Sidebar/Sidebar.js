
import { Menu, Layout } from "antd"
import { Link, useLocation } from "react-router-dom"
import './Sidebar.css'

const Sidebar = () => {
    const location = useLocation()
    return (
        <Layout.Sider className="side-bar">
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
                <Menu.Item key='/'>
                    <Link to="/">Ana Sayfa</Link>
                </Menu.Item>
                <Menu.Item key="/post/create-post">
                    <Link to="/post/create-post">Post oluştur</Link>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    )

}

export default Sidebar