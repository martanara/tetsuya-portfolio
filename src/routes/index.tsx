import React, { useLayoutEffect } from "react";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Layout from "components/Layout/Layout";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import Music from "pages/Music";
import News from "pages/News";
import BandDetail from "pages/BandDetail";

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
                        path="/news"
                        element={
                            <Layout>
                                <News />
                            </Layout>
                        }
                    />
                    <Route
                        path="/music"
                        element={
                            <Layout>
                                <Music />
                            </Layout>
                        }
                    />
                    <Route
                        path="/music/:slug"
                        element={
                            <Layout>
                                <BandDetail />
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