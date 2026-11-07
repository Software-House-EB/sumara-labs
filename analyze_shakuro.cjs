const fs = require('fs');

const html = fs.readFileSync('shakuro_dump.html', 'utf8');

// Find all section elements or main blocks
const sections = [...html.matchAll(/<(section|header|footer|nav|main|div[^>]*class=["'][^"']*(?:hero|header|footer|case|service|review|about|contact|work)[^"']*["'])[^>]*>/gi)]
  .map(m => m[0]);

console.log('Sections/Blocks count:', sections.length);
console.log('Sample blocks:\n', sections.slice(0, 25).join('\n'));

// Extract text content of h1, h2, h3, h4
const headings = [...html.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi)]
  .map(m => `${m[1].toUpperCase()}: ${m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')}`);

console.log('\n--- HEADINGS ---');
headings.forEach(h => console.log(h));

// Extract nav links
const links = [...html.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)]
  .map(m => ({ href: m[1], text: m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') }))
  .filter(l => l.text.length > 0 && l.text.length < 50);

console.log('\n--- NAVIGATION & BUTTON LINKS (sample) ---');
console.log(links.slice(0, 30));

