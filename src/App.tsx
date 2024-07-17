import React from "react";

import RoutesConfig from "routes";

import { AppContextProvider } from "context";

import "./styles/global.scss";

function App() {
    return (
        <AppContextProvider>
            <RoutesConfig />
        </AppContextProvider>
    );
}

export default App;
