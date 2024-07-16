import React, { useLayoutEffect } from "react";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Layout from "components/Layout/Layout";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import About from "pages/About";
import Bands from "pages/Bands";
import Blog from "pages/Blog";

interface RouterWrapperProps {
    children: JSX.Element;
}

const RouterWrapper = (props: RouterWrapperProps) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [location.pathname]);

    return props.children;
};

const RoutesConfig = () => {
    return (
        <BrowserRouter>
            <RouterWrapper>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout>
                                <Home />
                            </Layout>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <Layout>
                                <About />
                            </Layout>
                        }
                    />
                    <Route
                        path="/blog"
                        element={
                            <Layout>
                                <Blog />
                            </Layout>
                        }
                    />
                    <Route
                        path="/bands"
                        element={
                            <Layout>
                                <Bands />
                            </Layout>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <Layout>
                                <NotFound />
                            </Layout>
                        }
                    />
                </Routes>
            </RouterWrapper>
        </BrowserRouter>
    );
};

export default RoutesConfig;