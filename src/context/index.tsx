import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";

import { fetchBlogPosts } from "services/contentfulService";

import { IBlogPost } from "interfaces";


export const AppContext = createContext<any>(null);

interface IContextProps {
    children: ReactNode;
}

export const AppContextProvider = (props: IContextProps) => {
    const { children } = props;

    const [posts, setPosts] = useState<IBlogPost[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            const blogPosts = await fetchBlogPosts();
            setPosts(blogPosts);
        };
        getPosts();
    }, []);

    return (
        <AppContext.Provider
            value={{
                posts,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): IProps => {
    const { posts } = useContext(AppContext);

    return {
        posts,
    };
};

interface IProps {
    posts: IBlogPost[];
}