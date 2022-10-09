
import { Menu, Layout } from "antd"
import { Link } from "react-router-dom"
import './Sidebar.css'

const Sidebar = () => {

    return (
        <Layout.Sider className="side-bar">
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']}>
                <Menu.Item key='/'>
                    {/* <Link to="/">Ana Sayfa</Link> */}
                    Ana sayfa
                </Menu.Item>
                <Menu.Item key="/post/create-post">
                    {/* <Link to="/post/create-post">Post oluştur</Link> */}
                    Post oluştur
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    )

}

export default Sidebar