import { BlogPostPageProps, BlogPost } from "../../types/blog";
import { blogPosts } from "../../data/blog-posts";
import BlogPostContent from "../../components/utils/BlogPostContent";

export default async function BlogPostPagePage({ params }: BlogPostPagePageProps) {
  const { slug } = await params;
  
  const post: BlogPost = blogPosts[slug] || {
    // Reemplaza los guiones (-) por espacios y capitaliza las palabras
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase()),
    paragraphs: [
      "Este es un contenido generado por defecto porque la publicación solicitada aún no tiene un texto oficial asignado.",
      "Vuelve pronto para leer la información completa sobre este tema."
    ]
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <BlogPostContent post={post} />
    </main>
  );
}