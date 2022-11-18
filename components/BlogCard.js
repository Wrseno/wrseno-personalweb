import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment/moment";
import { MdDateRange } from "react-icons/md";

const BlogCard = ({ blog }) => {
  return (
      <Link href={`/blogs/${blog.slug}`}>   
        <a className="my-4 p-4">       
          <Image 
            unoptimized
              height={170} 
                width={300}
                  src={blog.image.url} 
                  className="rounded-md"
                alt={blog.title} 
              placeholder="blur"
            blurDataURL={blog.image.url}
          />
          <h1 className="text-2xl font-semibold">{blog.title}</h1>
          <span className="flex items-center gap-2 mt-2">
            <Image
              unoptimized
                src={blog.author.photo.url}
                  alt={blog.author.name}
                    width={20}
                  height={20}
                placeholder="blur"
              blurDataURL={blog.author.photo.url}
            />
            <p>{blog.author.name}</p>
          </span>
          <p className="flex items-center gap-2"><MdDateRange/>{ moment(blog.createdAt).format('DD MMM, YYYY') }</p>
        </a>   
      </Link>
  )
}

export default BlogCard;