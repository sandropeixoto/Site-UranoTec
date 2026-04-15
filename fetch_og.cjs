const https = require('https');

const urls = [
  "https://my.matterport.com/show/?m=gAyKQv25SbW",
  "https://my.matterport.com/show/?m=rJmuyLNPLyy",
  "https://my.matterport.com/show/?m=5fcFQbQQ6kV",
  "https://my.matterport.com/show/?m=vcQycyqev4K",
  "https://my.matterport.com/show/?m=xFJ43zUYq6U",
  "https://urano360.com.br/caixa-para/"
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
          title: titleMatch ? titleMatch[1] : 'Unknown Title',
          desc: descMatch ? descMatch[1] : '',
          img: imgMatch ? imgMatch[1] : 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'
        });
      });
    }).on('error', reject);
  });
}

Promise.all(urls.map(fetchUrl)).then(results => console.log(JSON.stringify(results, null, 2)));
