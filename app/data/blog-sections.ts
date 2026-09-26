import { BlogSection } from '../types/blog';

export const blogSections: BlogSection[] = [
  {
    id: '1',
    number: '01',
    title: 'Actualidad tecnológica',
    description: 'Tendencias, herramientas y proyectos que están transformando el entorno digital.',
    linkText: 'Ver publicaciones →',
    linkUrl: '/blog/actualidad-tecnologica'
  },
  {
    id: '2',
    number: '02',
    title: 'Áreas de formación',
    description: 'Desarrollo de software, redes, datos, ciberseguridad e innovación aplicada.',
    linkText: 'Ver publicaciones →',
    linkUrl: '/blog/areas-de-formacion'
  },
  {
    id: '3',
    number: '03',
    title: 'Historias que inspiran',
    description: 'Experiencias y publicaciones destacadas de nuestra comunidad académica.',
    linkText: 'Ver publicaciones →',
    linkUrl: '/blog/historias-que-inspiran'
  }
];