import { createClient } from 'contentful';
import { IBlogPost, IImage } from 'types/IBlogPost';

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN || '',
    host: "cdn.contentful.com"
});

const getStringField = (field: any): string => {
    return typeof field === 'string' ? field : '';
};

const processImageField = (imageField: any): IImage => {
    if (!imageField || !imageField.fields) return { title: '', url: '' };

    const title = getStringField(imageField.fields.title);
    const url = imageField.fields.file?.url ? `https:${imageField.fields.file.url}` : '';

    return { title, url };
};

export const fetchBlogPosts = async (): Promise<IBlogPost[]> => {
    try {
        const response = await client.getEntries({
            content_type: 'blog'
        });
        return response.items.map(item => ({
            id: item.sys.id,
            title: getStringField(item.fields.title),
            date: getStringField(item.fields.date),
            body: item.fields.body,
            image: processImageField(item.fields.image),
        }));
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
};