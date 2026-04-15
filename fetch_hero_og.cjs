const https = require('https');

const urls = [
  "https://www.youtube.com/watch?v=pT7bQAd4hD0"
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const titleMatch = data.match(/<meta[^>]*property="og:title"[^>]*content="([^"]+)"/i) || data.match(/<title>([^<]+)<\/title>/i);
        const descMatch = data.match(/<meta[^>]*property="og:description"[^>]*content="([^"]+)"/i) || data.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/i);
        const imgMatch = data.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/i);
        
        resolve({
          url,
          title: titleMatch ? titleMatch[1] : 'Urano Inteligência & Tecnologia',
          desc: descMatch ? descMatch[1] : 'Transformamos espaços físicos em experiências digitais imersivas.',
          img: imgMatch ? imgMatch[1] : 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2000&auto=format&fit=crop'
        });
      });
    }).on('error', reject);
  });
}

Promise.all(urls.map(fetchUrl)).then(results => console.log(JSON.stringify(results, null, 2)));
