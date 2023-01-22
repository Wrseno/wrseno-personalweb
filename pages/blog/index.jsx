import React, { useState } from "react";
import Layout from "../../layout";
import { getBlogs } from "../../services"
import BlogCard from "../../components/BlogCard";
import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Blog = ({ blogs }) => {

  const [query, setQuery] = useState("");


  return (
    <Layout pageTitle="Blog">
      <main className="md:pt-32 pt-24">
        <section className="container mx-auto max-w-screen-lg">
          <div className="flex flex-wrap relative">
            <h1 className='w-full text-3xl font-bold text-center'>Blog</h1>
                <div className='w-16 h-1.5 rounded-full bg-primary absolute lg:left-96 lg:top-12 left-24 top-10'></div>
                <div className="lg:mt-24 mt-14 mb-8 px-6 w-full lg:w-8/12 mx-auto relative">
                  <SearchIcon width={25} height={25} className="absolute top-2.5 left-8 text-slate-500"/> 
                    <input 
                        type="search" 
                          placeholder="Search Blog . . ." 
                            className="border-2 text-slate-500 border-slate-500 bg-transparent
                          items-center text-center outline-none w-full p-2 px-4 rounded-lg"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
          </div>
        </section>
        <section className="container mx-auto max-w-screen-lg grid w-full">
          <div className="grid md:grid-cols-2 mx-auto gap-8">
            {
              blogs.filter((blog) => {
                if (query == "") {
                  return blog;
                } else if (blog.fields.title.toLowerCase().includes(query.toLowerCase())) {
                  return blog;
                }
                }).map((blog, index) => {
                  return (
                    <div key={index} className="my-4">
                      <Link href={`blog/${blog.fields.slug}`}>
                        <BlogCard blog={blog.fields} key={index}/>
                      </Link>
                    </div>
                  )
              })
            }
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Blog;

let client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {

  let data = await client.getEntries({
    content_type: 'post'
  })

  return {
    props: {
      blogs: data.items,
    }
  }
};