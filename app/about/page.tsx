const learningAreas = [
  "Desarrollo de software",
  "Datos e inteligencia artificial",
  "Infraestructura y redes",
  "Experiencia digital",
];

function CircuitMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" style={{ height: '2.75rem', width: '2.75rem' }} aria-hidden="true">
      <path d="M10 12h18a6 6 0 0 1 6 6v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M38 36H20a6 6 0 0 1-6-6V18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="10" cy="12" r="4" fill="currentColor" />
      <circle cx="38" cy="36" r="4" fill="currentColor" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', overflow: 'hidden', backgroundColor: '#f5f7f3', color: '#123044', fontFamily: 'sans-serif' }}>
      <div style={{ margin: '0 auto', maxWidth: '80rem', padding: '0 2rem' }}>
        
        {/* Encabezado interno de la página About */}
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(18, 48, 68, 0.15)', padding: '1.25rem 0' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, textDecoration: 'none', color: 'inherit' }}>
            <span style={{ display: 'grid', placeItems: 'center', height: '2.5rem', width: '2.5rem', borderRadius: '0.375rem', backgroundColor: '#123044', color: '#d9ef3c' }}>
              <CircuitMark />
            </span>
            <span style={{ lineHeight: 1.2 }}>
              <span style={{ display: 'block', fontSize: '0.875rem' }}>UTVT</span>
              <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, color: 'rgba(18, 48, 68, 0.6)' }}>Tecnología que transforma</span>
            </span>
          </a>
          <a
            href="https://utvt.edomex.gob.mx/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderBottom: '2px solid #d9ef3c', paddingBottom: '0.25rem', fontSize: '0.875rem', fontWeight: 600, color: 'inherit', textDecoration: 'none' }}
          >
            Sitio institucional <span aria-hidden="true">↗</span>
          </a>
        </header>

        {/* Sección Hero */}
        <section style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '3rem', padding: '5rem 0', alignItems: 'center' }}>
          {/* Textos */}
          <div style={{ flex: '1.15', minWidth: '300px' }}>
            <p style={{ marginBottom: '1.5rem', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#177e89' }}>
              Universidad Tecnológica del Valle de Toluca
            </p>
            <h1 style={{ maxWidth: '48rem', fontSize: '4rem', fontWeight: 600, lineHeight: 1, letterSpacing: '-0.025em', color: '#123044', margin: 0 }}>
              Ingeniería en Tecnologías de la Información e Innovación Digital
            </h1>
            <p style={{ marginTop: '2rem', maxWidth: '42rem', fontSize: '1.125rem', lineHeight: 1.8, color: 'rgba(18, 48, 68, 0.75)' }}>
              Una formación para imaginar, diseñar y construir soluciones tecnológicas que respondan a los retos de las organizaciones y de la sociedad.
            </p>
            <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href="https://utvt.edomex.gob.mx/modelo-educativo"
                style={{ display: 'inline-flex', alignItems: 'center', borderRadius: '0.375rem', backgroundColor: '#123044', padding: '0.75rem 1.25rem', fontSize: '0.875rem', fontWeight: 600, color: 'white', textDecoration: 'none' }}
              >
                Conoce el modelo educativo
              </a>
              <a
                href="https://utvt.edomex.gob.mx/servicios-educativos"
                style={{ display: 'inline-flex', alignItems: 'center', borderRadius: '0.375rem', border: '1px solid rgba(18, 48, 68, 0.2)', padding: '0.75rem 1.25rem', fontSize: '0.875rem', fontWeight: 600, color: '#123044', textDecoration: 'none' }}
              >
                Servicios para estudiantes
              </a>
            </div>
          </div>

          {/* Tarjeta decorativa perfil profesional */}
          <div style={{ position: 'relative', minHeight: '20rem', flex: '0.85', minWidth: '300px', overflow: 'hidden', borderRadius: '0.375rem', backgroundColor: '#177e89', padding: '2.5rem', color: 'white' }}>
            <div style={{ position: 'absolute', top: '-3rem', right: '-3rem', height: '13rem', width: '13rem', borderRadius: '50%', border: '28px solid #d9ef3c', boxSizing: 'border-box' }} />
            <div style={{ position: 'absolute', bottom: '1.75rem', right: '2rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', opacity: 0.9 }}>
              {[...Array(9)].map((_, index) => (
                <span key={index} style={{ height: '0.75rem', width: '0.75rem', borderRadius: '50%', backgroundColor: 'white', display: 'block' }} />
              ))}
            </div>
            <div style={{ position: 'relative', display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'space-between', zIndex: 1 }}>
              <CircuitMark />
              <div style={{ marginTop: '4rem' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#d9ef3c', margin: 0 }}>Perfil profesional</p>
                <p style={{ marginTop: '0.75rem', maxWidth: '24rem', fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.25, margin: 0 }}>
                  Tecnología con visión estratégica, ética y creativa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Áreas de aprendizaje */}
        <section style={{ borderTop: '1px solid rgba(18, 48, 68, 0.15)', borderBottom: '1px solid rgba(18, 48, 68, 0.15)', padding: '4rem 0' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
            <div style={{ flex: '0.8', minWidth: '250px' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#177e89', margin: 0 }}>Lo que impulsa</p>
              <h2 style={{ marginTop: '0.75rem', fontSize: '1.875rem', fontWeight: 600, letterSpacing: '-0.025em', margin: 0 }}>Talento para la economía digital</h2>
            </div>
            <p style={{ flex: '1.2', minWidth: '300px', maxWidth: '42rem', fontSize: '1.125rem', lineHeight: 1.8, color: 'rgba(18, 48, 68, 0.75)', margin: 0 }}>
              La carrera integra conocimiento técnico y aprendizaje aplicado para participar en proyectos de transformación digital, desde la concepción de una idea hasta la entrega de productos y servicios tecnológicos.
            </p>
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1px', overflow: 'hidden', borderRadius: '0.375rem', backgroundColor: 'rgba(18, 48, 68, 0.15)' }}>
            {learningAreas.map((area, index) => (
              <article key={area} style={{ flex: '1 1 200px', backgroundColor: '#f5f7f3', padding: '1.5rem', boxSizing: 'border-box' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#177e89' }}>0{index + 1}</span>
                <h3 style={{ marginTop: '2rem', fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.025em', margin: 0 }}>{area}</h3>
              </article>
            ))}
          </div>
        </section>

        {/* Sección Final */}
        <section style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', padding: '5rem 0' }}>
          <div style={{ flex: 1, minWidth: '300px', borderRadius: '0.375rem', backgroundColor: '#123044', padding: '2.5rem', color: 'white' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#d9ef3c', margin: 0 }}>Aprendizaje aplicado</p>
            <h2 style={{ marginTop: '1rem', fontSize: '1.875rem', fontWeight: 600, letterSpacing: '-0.025em', margin: 0 }}>De la idea a la solución</h2>
            <p style={{ marginTop: '1.25rem', maxWidth: '32rem', lineHeight: 1.75, color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>
              Colabora, experimenta y desarrolla propuestas digitales que aporten valor en contextos reales.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '4px solid #d9ef3c', paddingLeft: '2rem' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.025em', margin: 0 }}>
              Una comunidad universitaria para aprender, crear y llevar más lejos cada proyecto.
            </p>
            <a href="https://utvt.edomex.gob.mx/" style={{ marginTop: '1.75rem', width: 'fit-content', fontSize: '0.875rem', fontWeight: 'bold', color: '#177e89', textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>
              Visitar Universidad Tecnológica del Valle de Toluca
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}