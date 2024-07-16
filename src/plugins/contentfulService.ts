import { createClient } from 'contentful';

const client = createClient({
    space: '1fmg420j3339',
    accessToken: 'h_istZ5KMgT4Oa5wnhrjCshbqVevMgYtlbgrNqiKhaQ',
    host: "cdn.contentful.com"
});

export const fetchBlogPosts = async () => {
    const response = await client.getEntries({
        content_type: 'blog'
    });
    return response.items;
};