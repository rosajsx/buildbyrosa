import type { Project } from '@/lib/projects'

export const liriaShop: Project = {
  slug: 'liria-shop',
  index: { pt: '002', en: '002' },
  title: 'Liria Shop',
  titleHtml: 'Liria <em>Shop</em>',
  tagline: {
    pt: 'Redesign completo de identidade e experiência para uma loja de moda — cada página reconstruída do zero na plataforma Tray.',
    en: 'Complete identity and experience redesign for a fashion store — every page rebuilt from scratch on the Tray platform.',
  },
  year: '2025',
  role: { pt: 'Dev Front-end', en: 'Front-end Dev' },
  platform: { pt: 'Web', en: 'Web' },
  tags: ['HTML', 'CSS', 'Tray'],
  headline: {
    pt: 'Do legado ao novo. Uma identidade que <em>finalmente representa.</em>',
    en: 'From legacy to new. An identity that <em>finally represents.</em>',
  },
  body: {
    pt: [
      'A Liria Shop tinha uma loja funcional — mas sua identidade visual não acompanhava o nível da marca nem do produto que vendia. Layout datado, hierarquia visual confusa e uma experiência que não fazia jus à curadoria de moda por trás dela.',
      'O projeto foi um redesign total na plataforma Tray: todas as páginas repensadas e reimplementadas a partir de uma nova identidade criada por uma designer dedicada. A implementação priorizou fidelidade absoluta ao layout — cada seção, cada detalhe, cada espaçamento.',
      'Com HTML e CSS como protagonistas — por restrição e por escolha —, o resultado foi um site limpo, rápido e visualmente coeso do início ao fim. Legado transformado em algo que a marca pode, finalmente, chamar de seu.',
    ],
    en: [
      'Liria Shop had a functional store — but its visual identity didn\'t match the brand\'s level or the quality of its products. Outdated layout, confusing visual hierarchy, and an experience that didn\'t do justice to the fashion curation behind it.',
      'The project was a full redesign on the Tray platform: every page rethought and reimplemented from a new identity created by a dedicated designer. The implementation prioritized absolute fidelity to the layout — every section, every detail, every spacing.',
      'With HTML and CSS as the protagonists — by constraint and by choice — the result was a clean, fast, and visually cohesive site from start to finish. Legacy transformed into something the brand can, finally, call its own.',
    ],
  },
  stats: [
    { label: { pt: 'cobertura do redesign', en: 'redesign coverage' }, value: '100%' },
    { label: { pt: 'stack principal', en: 'main stack' }, value: 'HTML + CSS' },
    { label: { pt: 'plataforma', en: 'platform' }, value: 'Tray' },
  ],
  live: 'https://www.liriashop.com.br/',
  cover: '/projects/liria-shop/cover.png',
  images: [
    '/projects/liria-shop/screenshot-1.png',
    '/projects/liria-shop/screenshot-2.png',
    '/projects/liria-shop/screenshot-3.png',
    '/projects/liria-shop/screenshot-4.png',
  ],
}
