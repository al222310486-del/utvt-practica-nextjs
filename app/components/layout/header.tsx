"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    // Arreglo para limpiar y optimizar la generación de enlaces
    const navLinks = [
        { label: "Mi carrera", href: "/" },
        { label: "Acerca de", href: "/about" },
        { label: "Blog", href: "/blog" },
    ];

    return (
        <header style={{ 
            display: 'flex', 
            width: '100%', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            borderBottom: '1px solid #e4e4e7', 
            paddingBottom: '1.25rem',
            paddingTop: '1rem',
            backgroundColor: '#ffffff',
            paddingLeft: '2rem',
            paddingRight: '2rem'
        }}>
            {/* Logotipo e inicio */}
            <Link
                href="/"
                style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    fontSize: '1.125rem', 
                    fontWeight: 600, 
                    color: '#18181b', 
                    textDecoration: 'none' 
                }}
                aria-label="UTVT, inicio"
            >
                <svg style={{ height: '2.5rem', width: '2.5rem' }} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                    <path d="M8 13H18L23 39L28 13H37L30 50H17L8 13Z" fill="#00843D" />
                    <path d="M26 13H37L42 37L47 13H57L49 50H36L32 31L28 50H18L26 13Z" fill="#005A32" />
                    <path d="M18 8H47" stroke="#00843D" strokeWidth="5" strokeLinecap="square" />
                </svg>
                <span>UTVT</span>
            </Link>

            {/* Menú de Navegación Dinámico */}
            <nav aria-label="Navegacion principal">
                <ul style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1.25rem', 
                    fontSize: '0.875rem', 
                    listStyle: 'none', 
                    margin: 0, 
                    padding: 0 
                }}>
                    {navLinks.map(({ label, href }) => {
                        // Lógica para determinar si el enlace actual está activo
                        const isActive = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

                        return (
                            <li key={href}>
                                <Link 
                                    href={href} 
                                    style={{ 
                                        textDecoration: 'none', 
                                        whiteSpace: 'nowrap',
                                        borderRadius: '0.375rem',
                                        padding: '0.25rem 0.5rem',
                                        transition: 'all 0.2s',
                                        // Aquí se aplican los colores equivalentes a Tailwind si está activo
                                        backgroundColor: isActive ? '#cffafe' : 'transparent', // bg-cyan-100
                                        color: isActive ? '#155e75' : '#52525b',               // text-cyan-800 o gris
                                        fontWeight: isActive ? 600 : 500
                                    }}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                    
                    {/* Enlace estático a Next.js */}
                    <li>
                        <a 
                            href="https://nextjs.org/docs/app/getting-started/project-structure" 
                            style={{ textDecoration: 'none', color: '#52525b', padding: '0.25rem 0.5rem', fontWeight: 500 }}
                        >
                            Next.js
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Enlace a GitHub */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <a
                    href="https://github.com/vercel/next.js/"
                    style={{ 
                        display: 'inline-flex', 
                        height: '2.25rem', 
                        width: '2.25rem', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: '#52525b', 
                        textDecoration: 'none' 
                    }}
                    aria-label="Repositorio de GitHub"
                >
                    <svg style={{ height: '1.25rem', width: '1.25rem' }} viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.578 2 12.23c0 4.522 2.865 8.352 6.839 9.707.5.094.682-.22.682-.49 0-.24-.009-.877-.014-1.722-2.782.617-3.369-1.373-3.369-1.373-.455-1.184-1.11-1.5-1.11-1.5-.908-.637.069-.624.069-.624 1.004.073 1.532 1.056 1.532 1.056.892 1.566 2.34 1.114 2.91.852.091-.665.349-1.114.635-1.37-2.22-.26-4.555-1.14-4.555-5.073 0-1.12.39-2.035 1.03-2.753-.104-.26-.446-1.308.098-2.726 0 0 .84-.276 2.75 1.051A9.284 9.284 0 0 1 12 6.13a9.27 9.27 0 0 1 2.504.35c1.91-1.327 2.748-1.051 2.748-1.051.546 1.418.203 2.466.1 2.726.64.718 1.028 1.633 1.028 2.753 0 3.943-2.34 4.81-4.568 5.066.359.32.679.95.679 1.915 0 1.383-.012 2.498-.012 2.837 0 .273.18.59.688.489C19.14 20.578 22 16.75 22 12.23 22 6.578 17.523 2 12 2Z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </header>
    );
}