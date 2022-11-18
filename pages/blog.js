import React from "react";
import Layout from "../layout";
import { getBlogs } from "../services"
import BlogCard from "../components/BlogCard";

const Blog = ({ blogs }) => {

    console.log(blogs);

  return (
    <Layout pageTitle="Blog">
        {blogs.map((blog, index) => (<BlogCard blog={blog.node} key={index}/>))}
    </Layout>
  )
}

export default Blog;

export async function getStaticProps() {
    const blogs = await getBlogs();

    return {
        props: { blogs },
    };
}