import React from 'react';
import BlogPostsCard from '../../components/BlogPostsCard';
import blogPostImage from '../../assets/images/blogpost_one.png';

const RecentBlogs = (props) => {
  return (
    <div className="mx-40 py-16 flex flex-col justify-center items-center">
      <div className="text-6xl pb-16">
        <h1 className="text-black">Recent Activities</h1>
      </div>
      <div>
        <BlogPostsCard
          image={blogPostImage}
          title="Hello Marikina 2022"
          date="September 20, 2023"
          description="Dolore labore laborum consequat incididunt deserunt. Amet pariatur excepteur veniam nulla."
        />
      </div>
    </div>
  )
}

export default RecentBlogs