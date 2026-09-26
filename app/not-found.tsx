export default function NotFound() {
  return (
    <main style={{
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f7f3',
      padding: '3rem 1.5rem',
      color: '#123044',
      fontFamily: 'sans-serif',
      minHeight: 'calc(100vh - 90px)'
    }}>
      <section style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1152px',
        gap: '4rem',
        margin: '0 auto'
      }}>
        
        {/* Columna Izquierda: Textos y Botones */}
        <div style={{ maxWidth: '36rem', flex: 1 }}>
          <p style={{ fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#177e89', margin: 0 }}>
            Error de navegación
          </p>
          <h1 style={{ marginTop: '1.25rem', fontSize: '3.75rem', fontWeight: 600, lineHeight: 0.98, letterSpacing: '-0.025em', margin: 0 }}>
            Página no encontrada
          </h1>
          <p style={{ marginTop: '1.75rem', maxWidth: '32rem', fontSize: '1.125rem', lineHeight: '2rem', color: 'rgba(18, 48, 68, 0.75)', margin: 0 }}>
            La dirección que buscas no está disponible o pudo haber cambiado. Regresa al inicio para continuar explorando.
          </p>
          
          <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                borderRadius: '0.375rem',
                backgroundColor: '#123044',
                padding: '0.75rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'white',
                textDecoration: 'none'
              }}
            >
              Ir al inicio
            </Link>
            <a 
              href="/blog" 
              style={{ 
                fontSize: '0.875rem', 
                fontWeight: 'bold', 
                color: '#177e89', 
                textDecoration: 'underline', 
                textDecorationThickness: '2px', 
                textUnderlineOffset: '4px' 
              }}
            >
              Ver el blog
            </a>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta 404 */}
        <div style={{
          position: 'relative',
          minHeight: '20rem',
          flex: 1,
          overflow: 'hidden',
          borderRadius: '0.375rem',
          backgroundColor: '#177e89',
          padding: '2.5rem',
          color: 'white',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
        }}>
          {/* Círculo decorativo amarillo */}
          <span 
            style={{
              position: 'absolute',
              top: '-3.5rem',
              right: '-3.5rem',
              height: '13rem',
              width: '13rem',
              borderRadius: '50%',
              border: '28px solid #d9ef3c',
              boxSizing: 'border-box'
            }} 
            aria-hidden="true" 
          />

          {/* Cuadrícula de puntos */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.5rem',
            opacity: 0.9
          }} aria-hidden="true">
            {[...Array(9)].map((_, index) => (
              <span key={index} style={{ height: '0.75rem', width: '0.75rem', borderRadius: '50%', backgroundColor: 'white', display: 'block' }} />
            ))}
          </div>

          {/* Contenido interior de la tarjeta */}
          <div style={{ position: 'relative', display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'space-between', zIndex: 1 }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#d9ef3c' }}>UTVT</span>
            <div style={{ marginTop: '3rem' }}>
              <p style={{ fontSize: '5rem', fontWeight: 600, lineHeight: 1, letterSpacing: '-0.025em', margin: 0 }}>404</p>
              <p style={{ marginTop: '1rem', maxWidth: '20rem', fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.25, margin: 0 }}>
                Sigamos creando soluciones desde el lugar correcto.
              </p>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}