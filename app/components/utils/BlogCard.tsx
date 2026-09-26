import { BlogSection } from "../../types/blog";
import Link from "next/link";

export default function BlogCard({ section }: { section: BlogSection }) {
  return (
    <article style={{ 
      flex: 1, 
      minWidth: '280px', 
      backgroundColor: 'white', 
      padding: '2rem', 
      borderRadius: '0.5rem', 
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1rem',
      border: '1px solid #e5e7eb'
    }}>
      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#177e89' }}>
        {section.number}
      </span>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#123044', margin: 0 }}>
        {section.title}
      </h3>
      <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.5, margin: 0, flexGrow: 1 }}>
        {section.description}
      </p>
      <Link href={section.linkUrl} style={{ color: '#177e89', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', marginTop: '1rem' }}>
        {section.linkText}
      </Link>
    </article>
  );
}