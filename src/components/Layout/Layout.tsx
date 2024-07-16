import React, { ReactNode } from "react";

import Footer from "components/Footer";
import Navbar from "components/Navbar";

import "./styles.scss";

interface ILayoutProps {
    children: ReactNode;
}

const Layout = (props: ILayoutProps) => {
    return (
        <div className="page-layout">
            <Navbar />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;