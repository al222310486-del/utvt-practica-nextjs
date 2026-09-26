import { blogSections } from "../data/blog-sections";
import BlogCard from "../components/utils/BlogCard";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fafafa', color: '#123044', fontFamily: 'sans-serif' }}>
      
      {/* Sub-menú secundario (El que marcaste en amarillo) */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '1rem 3rem', 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #e5e7eb',
        fontSize: '0.875rem'
      }}>
        <div style={{ color: '#005b36', fontWeight: 700, letterSpacing: '0.1em' }}>
          UTVT / BLOG ITIID
        </div>
        <div style={{ display: 'flex', gap: '2rem', color: '#4b5563' }}>
          <Link href="/blog/actualidad-tecnologica" style={{ textDecoration: 'none', color: 'inherit' }}>Actualidad</Link>
          <Link href="/blog/areas-de-formacion" style={{ textDecoration: 'none', color: 'inherit' }}>Áreas</Link>
          <Link href="/blog/historias-que-inspiran" style={{ textDecoration: 'none', color: 'inherit' }}>Historias</Link>
        </div>
      </nav>

      {/* Contenido principal del Blog */}
      <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '4rem 2rem' }}>
        
        {/* Encabezado del Blog */}
        <header style={{ marginBottom: '5rem', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
          <div style={{ flex: '1.2', minWidth: '300px' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#005b36', marginBottom: '1rem' }}>
              Blog Académico
            </p>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, color: '#022c22', margin: 0 }}>
              Ingeniería en Tecnologías de la Información e Innovación Digital
            </h1>
          </div>
          <div style={{ flex: '0.8', minWidth: '250px', borderLeft: '3px solid #005b36', paddingLeft: '1.5rem' }}>
            <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
              Conocimiento, creatividad y tecnología para diseñar soluciones que mejoran la forma en que vivimos, aprendemos y trabajamos.
            </p>
          </div>
        </header>

        {/* Sección de Tarjetas */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>Explora el blog</h2>
            <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Aprende. Crea. Innova.</span>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {blogSections.map((section) => (
              <BlogCard key={section.id} section={section} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}