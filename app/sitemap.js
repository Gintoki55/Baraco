export async function GET() {
  const siteUrl = 'https://barkhad-group.com'; // ضع اسم الدومين هنا

  // صفحات الموقع الثابتة التي تريد إضافتها في السايت ماب
  const staticPages = [
    '',
    '/about',
    '/services',
    '/contact',
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (page) => `
      <url>
        <loc>${siteUrl}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
