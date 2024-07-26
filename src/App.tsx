import React, { useEffect } from "react";

import AOS from 'aos';

import RoutesConfig from "routes";

import { AppContextProvider } from "context";

import "./styles/global.scss";

import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <AppContextProvider>
            <RoutesConfig />
        </AppContextProvider>
    );
}

export default App;
