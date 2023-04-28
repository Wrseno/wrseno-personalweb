import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment/moment";
import { MdDateRange } from "react-icons/md";

const BlogCard = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.fields.slug}`}>
      <span className='dark:hover:text-slate-500 hover:text-slate-700 duration-300 hover:ease-linear'>
        <Image
          unoptimized
          height={300}
          width={500}
          src={blog.image.fields.file.url}
          className='rounded-md hover:scale-105 hover:rounded-md duration-300'
          alt={blog.title}
          placeholder='blur'
          blurDataURL={blog.image.fields.file.url}
        />
        <h1 className='text-2xl font-bold'>{blog.title}</h1>
        <span className='flex items-center gap-2 mt-2'>
          <Image
            unoptimized
            src={blog.fields.author.fields.photo.fields.file.url}
            alt={blog.fields.author.fields.name}
            width={20}
            height={20}
            placeholder='blur'
            className='bg-red-600 rounded-full'
            blurDataURL={blog.fields.author.fields.photo.fields.file.url}
          />
          <p>{blog.fields.author.fields.name}</p>
        </span>
        <p className='flex items-center gap-2'>
          <MdDateRange />
          {moment(blog.createdAt).format("MMM DD, YYYY")}
        </p>
        {/* <div className="flex gap-2">
        {blog.blogCategories.map((category, index) => (
            <span className="text-xs border-2 border-slate-700 p-2 px-4 text-gradient font-semibold rounded-md mt-4" key={index}>
              {category.name}
            </span>
        ))}
        </div> */}
      </span>
    </Link>
  );
};

export default BlogCard;
