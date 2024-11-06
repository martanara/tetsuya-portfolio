import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";

import { fetchNewsPosts } from "services/contentfulService";

import { INewsPost } from "types/INewsPost";

export const AppContext = createContext<any>(null);

interface IContextProps {
    children: ReactNode;
}

export const AppContextProvider = (props: IContextProps) => {
    const { children } = props;

    const [newsPosts, setNewsPosts] = useState<INewsPost[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            const _newsPosts = await fetchNewsPosts();
            setNewsPosts(_newsPosts);
        };
        getPosts();
    }, []);

    return (
        <AppContext.Provider
            value={{
                newsPosts,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): IProps => {
    const { newsPosts } = useContext(AppContext);

    return {
        newsPosts,
    };
};

interface IProps {
    newsPosts: INewsPost[];
}