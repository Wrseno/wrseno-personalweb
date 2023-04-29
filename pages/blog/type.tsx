import { Document } from '@contentful/rich-text-types';

export interface BlogPost {
    title: string;
    slug: string;
    excerpt: string;
    content: {
        json: Document;
    };
    image: {url: string; description: string};
    author: string;
}