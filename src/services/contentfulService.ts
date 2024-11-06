import { createClient } from 'contentful';

import { INewsPost, IImage } from 'types/INewsPost';

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

export const fetchNewsPosts = async (): Promise<INewsPost[]> => {
    try {
        const response = await client.getEntries({
            content_type: 'news'
        });
        return response.items.map(item => ({
            id: item.sys.id,
            title: getStringField(item.fields.title),
            date: getStringField(item.fields.date),
            body: item.fields.body,
            image: processImageField(item.fields.image),
        }));
    } catch (error) {
        console.error('Error fetching news posts:', error);
        return [];
    }
};