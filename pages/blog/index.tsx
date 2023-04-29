import { GetStaticProps, NextPage } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "../../services/contenfulConfig";
import { BlogPost } from "./type";
import Image from "next/image";

interface Props {
  blogPosts: BlogPost[];
}

const Blog = ({ blogPosts }: Props) => {
  return (
    <div>
      {blogPosts.map((blogPost) => (
        <div key={blogPost.slug}>
          <h2>{blogPost.title}</h2>
          <Image 
            src={blogPost.image.url}
            alt={blogPost.image.description}
          />
          <div>{documentToReactComponents(blogPost.content.json)}</div>
          <p>{blogPost.author}</p>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const entries = await client.getEntries<BlogPost>({ content_type: 'blogPost' });

  const blogPosts = entries.items.map((entry)=>{
    return {
      title: entry.fields.title,
      excerpt: entry.fields.excerpt,
      slug: entry.fields.slug,
      content: entry.fields.content,
      image: entry.fields.image,
      author: entry.fields.author,
    }
  });

  return {
    props: {
      blogPosts,
    },
    revalidate: 1,
  };
};

export default Blog;
