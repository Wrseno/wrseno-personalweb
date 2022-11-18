import React from "react";
import Layout from "../layout";
import { getBlogs } from "../services"
import BlogCard from "../components/BlogCard";

const Blog = ({ blogs }) => {

    console.log(blogs);

  return (
    <Layout pageTitle="Blog">
      <main className="md:pt-32 pt-24">
        <section className="container lg:px-36">
          <div className="flex flex-wrap relative">
            <h1 className='w-full text-3xl font-bold text-center'>Blog</h1>
                <div className='w-16 h-1.5 rounded-full bg-primary absolute lg:left-96 lg:top-12 left-24 top-10'></div>
                <div className="my-12 w-1/2 mx-auto">
                  <input type="search" placeholder="Search Blog" className="border-2 border-slate-500 w-full p-2 rounded-md"/>
                </div>
          </div>
        </section>
        <section className="container lg:px-36 grid w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (<BlogCard blog={blog.node} key={index}/>))}
          </div>
        </section>
      </main>
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