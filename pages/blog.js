import React from "react";
import Layout from "../layout";
import { getBlogs } from "../services"
import BlogCard from "../components/BlogCard";
import { SearchIcon } from "@heroicons/react/solid";

const Blog = ({ blogs }) => {

  return (
    <Layout pageTitle="Blog">
      <main className="md:pt-32 pt-24">
        <section className="container lg:px-36">
          <div className="flex flex-wrap relative">
            <h1 className='w-full text-3xl font-bold text-center'>Blog</h1>
                <div className='w-16 h-1.5 rounded-full bg-primary absolute lg:left-96 lg:top-12 left-24 top-10'></div>
                <div className="lg:mt-24 mt-14 mb-8 px-6 w-full lg:w-8/12 mx-auto relative">
                  <SearchIcon width={25} height={25} className="absolute top-2.5 left-8 text-slate-500"/> 
                  <input type="search" placeholder="Search Blog . . ." className="border-2 text-slate-500 border-slate-500 bg-transparent items-center text-center outline-none w-full p-2 px-4 rounded-lg"/>
                </div>
          </div>
        </section>
        <section className="container mx-auto lg:px-36 grid w-full">
          <div className="grid lg:grid-cols-2 mx-auto">
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