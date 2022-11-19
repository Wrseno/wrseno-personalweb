import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment/moment";
import { MdDateRange } from "react-icons/md";

const BlogCard = ({ blog }) => {
  return (
      <Link href={`/blog/${blog.slug}`}>   
        <a className="lg:p-4">       
          <Image 
            unoptimized
              height={300} 
                width={500}
                  src={blog.image.url} 
                  className="rounded-md"
                alt={blog.title} 
              placeholder="blur"
            blurDataURL={blog.image.url}
          />
          <h1 className="text-2xl font-bold">{blog.title}</h1>
          <p>{blog.excerpt}</p>
          <span className="flex items-center gap-2 mt-2">
            <Image
              unoptimized
                src={blog.author.photo.url}
                  alt={blog.author.name}
                    width={20}
                    height={20}
                  placeholder="blur"
                className="bg-red-600 rounded-full"
              blurDataURL={blog.author.photo.url}
            />
            <p>{blog.author.name}</p>
          </span>
          <p className="flex items-center gap-2"><MdDateRange/>{ moment(blog.createdAt).format('MMM DD, YYYY') }</p>
          <div className="flex gap-2">
          {blog.blogCategories.map((category, index) => (
              <span className="border-2 border-slate-700 p-2 px-4 text-gradient font-semibold rounded-md mt-4" key={index}>
                {category.name}
              </span>
          ))}
          </div>
        </a>   
      </Link>
  )
}

export default BlogCard;