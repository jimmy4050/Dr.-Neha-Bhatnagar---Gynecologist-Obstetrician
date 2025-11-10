import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { blogData } from '../data/blogData';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) return;

    // Store original values to restore on component unmount
    const originalTitle = document.title;
    const originalDescriptionTag = document.querySelector('meta[name="description"]');
    const originalKeywordsTag = document.querySelector('meta[name="keywords"]');
    const originalOgTitleTag = document.querySelector('meta[property="og:title"]');
    const originalOgDescriptionTag = document.querySelector('meta[property="og:description"]');
    const originalOgImageTag = document.querySelector('meta[property="og:image"]');
    const originalOgUrlTag = document.querySelector('meta[property="og:url"]');

    const originalDescription = originalDescriptionTag?.getAttribute('content');
    const originalKeywords = originalKeywordsTag?.getAttribute('content');
    const originalOgTitle = originalOgTitleTag?.getAttribute('content');
    const originalOgDescription = originalOgDescriptionTag?.getAttribute('content');
    const originalOgImage = originalOgImageTag?.getAttribute('content');
    const originalOgUrl = originalOgUrlTag?.getAttribute('content');

    // Set new meta tags for the current post
    document.title = `${post.title} | Dr. Neha Bhatnagar`;
    originalDescriptionTag?.setAttribute('content', post.summary);
    originalKeywordsTag?.setAttribute('content', `${post.tags.join(', ')}, Gynecologist in Vapi, Women's Health`);
    
    // Set OpenGraph tags for social sharing
    originalOgTitleTag?.setAttribute('content', post.title);
    originalOgDescriptionTag?.setAttribute('content', post.summary);
    originalOgImageTag?.setAttribute('content', post.featuredImage);
    originalOgUrlTag?.setAttribute('content', window.location.href);

    // Cleanup function to restore original meta tags
    return () => {
      document.title = originalTitle;
      if (originalDescription) originalDescriptionTag?.setAttribute('content', originalDescription);
      if (originalKeywords) originalKeywordsTag?.setAttribute('content', originalKeywords);
      if (originalOgTitle) originalOgTitleTag?.setAttribute('content', originalOgTitle);
      if (originalOgDescription) originalOgDescriptionTag?.setAttribute('content', originalOgDescription);
      if (originalOgImage) originalOgImageTag?.setAttribute('content', originalOgImage);
      if (originalOgUrl) originalOgUrlTag?.setAttribute('content', originalOgUrl);
    };
  }, [post]);


  if (!post) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Post not found</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4">Sorry, we couldn't find the article you're looking for.</p>
        <Link to="/blog" className="mt-8 inline-block bg-brand-primary text-white px-6 py-2 rounded-full">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <article>
              <header className="mb-8 text-center">
                <div className="mb-4">
                  <span className="text-brand-primary font-semibold">{post.category}</span>
                </div>
                <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-4">{post.title}</h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted by <span className="font-semibold text-gray-700 dark:text-gray-300">{post.author}</span> on {post.date}
                </p>
              </header>

              <img src={post.featuredImage} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg mb-12" />

              <div className="prose prose-lg max-w-none mx-auto text-gray-700 leading-relaxed dark:prose-invert">
                {post.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                          <span key={tag} className="bg-brand-blue dark:bg-blue-900/40 text-brand-secondary dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
                      ))}
                  </div>
              </div>
            </article>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BlogPostPage;