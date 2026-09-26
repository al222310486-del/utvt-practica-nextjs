import Image from "next/image";

export default function Home() {
  return (
    <div style={{ display: 'flex', flex: 1, backgroundColor: '#fafafa', fontFamily: 'sans-serif', minHeight: 'calc(100vh - 90px)' }}>
      <main style={{ 
        display: 'flex', 
        flexDirection: 'row', /* Esto fuerza las dos columnas */
        width: '100%', 
        maxWidth: '1152px', /* max-w-6xl */
        margin: '0 auto', 
        alignItems: 'center', 
        gap: '4rem', /* gap-16 */
        padding: '5rem 4rem' /* py-20 px-16 */
      }}>
        
        {/* Columna Izquierda: Textos */}
        <section style={{ flex: 1 }}>
          <p style={{ marginBottom: '1.25rem', fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '0.16em', color: '#047857' }}>
            UTVT
          </p>
          <h1 style={{ maxWidth: '36rem', fontSize: '3rem', fontWeight: 'bold', letterSpacing: '-0.025em', color: '#022c22', lineHeight: 1.1, margin: 0 }}>
            Ingeniería en Tecnologías de la Información e Innovación Digital
          </h1>
          <p style={{ marginTop: '1.5rem', maxWidth: '32rem', fontSize: '1rem', lineHeight: '1.75rem', color: '#52525b' }}>
            Fórmate para crear soluciones digitales, desarrollar software y liderar la innovación tecnológica que impulsa a las organizaciones y a la sociedad.
          </p>
        </section>

        {/* Columna Derecha: Imagen */}
        <div style={{ 
          flex: 1, 
          overflow: 'hidden', 
          borderRadius: '0.5rem', 
          backgroundColor: '#022c22', 
          boxShadow: '0 20px 25px -5px rgba(2, 44, 34, 0.15)' 
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85"
            alt="Circuito electrónico que representa la innovación tecnológica"
            style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
          />
        </div>
        
      </main>
    </div>
  );
}