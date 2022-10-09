import Home from "../views/Home/Home";
import Post from "../views/Post/Post";
import PostCreate from "../views/Post/PostCreate/PostCreate";
import Auth from "../views/Auth/Auth";
import SignIn from "../views/Auth/SignIn/SignIn";
import SignUp from "../views/Auth/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import React from "react";


export const AppRoutes = [
    {
        component: <Home />,
        path: '/',
        protect: true
    },
    {
        component: <Post />,
        path: '/post',
        protect: true,
        children: [{
            component: <PostCreate />,
            path: 'create-post',
            protect: true
        }]
    },
    {
        component: <Auth />,
        path: '/auth',
        protect: false,
        children: [{
            component: <SignIn />,
            path: 'sign-in',
            protect: false
        },
        {
            component: <SignUp />,
            path: 'sign-up',
            protect: false
        }]
    }


]

const AppRouter = () => {
    const renderComponent = (item) => {
        return <>{item.component}</>
    }

    return (
        <>

            <Routes>
                {AppRoutes.map((item) => {
                    return (
                        <React.Fragment key={item.path}>
                            {item.children ? <>
                                <Route path={item.path} key={item.path} element={renderComponent(item)}>
                                    {item.children.map((subItem) => {
                                        return (
                                            <Route path={subItem.path} key={subItem.path} element={renderComponent(subItem)} />
                                        )
                                    })}
                                </Route>
                            </> : <Route path={item.path} key={item.path} element={renderComponent(item)} />}
                        </React.Fragment>
                    )
                })}
            </Routes>

        </>
    )
}
export default AppRouter