import React from 'react';
import Image from 'next/image';

const BlogCard = ({ blog }) => {
  return (
    <div className="py-32">
        <Image width="200" height="200" src={blog.image.url} alt={blog.title} />
        <h1>{blog.title}</h1>
        <p>{blog.excerpt}</p>
    </div>
  )
}

export default BlogCard;