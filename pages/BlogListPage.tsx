import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { blogData, BlogPost } from '../data/blogData';

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="group block bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="relative">
        <img src={post.featuredImage} alt={post.title} className="w-full h-56 object-cover" />
        <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-semibold px-3 py-1 rounded-full">{post.category}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-brand-primary transition-colors">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{post.summary}</p>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          <span>By {post.author}</span> &bull; <span>{post.date}</span>
        </div>
      </div>
    </Link>
  );
};

const BlogListPage: React.FC = () => {
  return (
    <div className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200">Articles & Insights</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
              Stay informed with our latest articles on women's health, pregnancy, and wellness.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BlogListPage;