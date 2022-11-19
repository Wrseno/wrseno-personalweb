import React from "react";
import Layout from "../../layout";
import { getBlogs, getBlogDetails } from "../../services";
import Image from "next/image";
import { MdDateRange } from "react-icons/md";
import moment from "moment/moment";
import { RichText } from "@graphcms/rich-text-react-renderer";

const BlogDetails = ({ blog }) => {
  return (
    <Layout pageTitle="Blog">
        <main className="md:pt-32 pt-24">
          <section className="container mx-auto max-w-screen-lg">
            <div>
              <Image
                src={blog.image.url}
                  width={1000}
                    height={500}
                      alt={blog.title}
                    unoptimized
                  placeholder="blur"
                  className="rounded-lg"
                blurDataURL={blog.image.url}
              />
              <h1 className="md:text-4xl text-2xl font-bold my-4">{blog.title}</h1>
              <div className="md:flex gap-2">
                <span className="flex gap-2">
                  <Image
                    src={blog.author.photo.url}
                      width={30}
                        height={20}
                          alt={blog.author.name}
                        unoptimized
                      placeholder="blur"
                    blurDataURL={blog.author.photo.url}
                    className="bg-red-600 rounded-full"
                  />
                  <p>{blog.author.name}</p>
                </span>
                <p className="flex items-center gap-2"><MdDateRange/>{ moment(blog.createdAt).format('MMM DD, YYYY') }</p>
              </div>
              <div className="py-8">
                    <React.Fragment>
                      <RichText content={blog.content.raw}/>
                    </React.Fragment>
              </div>
            </div>
          </section>
        </main>
    </Layout>
  )
}

export default BlogDetails;


export async function getStaticProps({ params }) {
  const data = await getBlogDetails(params.slug);

  return {
    props: {
      blog: data[0],
    }
  }
}

export async function getStaticPaths() {
  const blogs = await getBlogs();
  return {
    paths: blogs.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}