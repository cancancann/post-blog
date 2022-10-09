import { Layout } from "antd";
import AppContent from "../../components/AppContent/AppContent";
import AppHeader from "../../components/AppHeader/AppHeader";
import Sidebar from "../../components/Sidebar/Sidebar";

const MainLayout = (props) => {
    return (
        <Layout>
            <Sidebar />
            <Layout >
                <AppHeader />
                <AppContent>
                    {props.children}
                </AppContent>
            </Layout>
        </Layout>
    )
}

export default MainLayout