export interface IBlogPost {
    id: string;
    title: string;
    body: any;
    date: string;
    image: IImage;
}

export interface IImage {
    title: string;
    url: string;
}