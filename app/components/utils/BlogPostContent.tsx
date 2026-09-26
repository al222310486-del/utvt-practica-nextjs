import { BlogPost } from "../../types/blog";

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <article style={{ margin: '0 auto', maxWidth: '48rem', padding: '3rem 1.5rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.025em', color: '#111827', lineHeight: 1.2 }}>
        {post.title}
      </h1>
      
      {post.paragraphs.map((paragraph, index) => (
        <p 
          key={index} 
          style={{ 
            fontSize: '1.125rem', 
            lineHeight: 1.8, 
            color: '#4b5563', 
            marginBottom: index === 0 ? '1.5rem' : '1rem' 
          }}
        >
          {paragraph}
        </p>
      ))}
    </article>
  );
}