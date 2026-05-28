const fs = require('fs');
const path = require('path');

// Simple parser using regular expressions to extract clean content from HTML
function cleanHTML(html) {
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  let content = mainMatch ? mainMatch[1] : html;

  content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');

  const sections = [];
  const sectionRegex = /<section[^>]*>([\s\S]*?)<\/section>/gi;
  let match;
  while ((match = sectionRegex.exec(content)) !== null) {
    sections.push(match[1]);
  }

  if (sections.length === 0) {
    sections.push(content);
  }

  return sections.map((sec, idx) => {
    const headings = [];
    const hRegex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
    let hMatch;
    while ((hMatch = hRegex.exec(sec)) !== null) {
      headings.push(`H${hMatch[1]}: ${stripTags(hMatch[2])}`);
    }

    const lists = [];
    const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let liMatch;
    while ((liMatch = liRegex.exec(sec)) !== null) {
      lists.push(stripTags(liMatch[1]).trim());
    }

    const paragraphs = [];
    const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
    let pMatch;
    while ((pMatch = pRegex.exec(sec)) !== null) {
      paragraphs.push(stripTags(pMatch[1]).trim());
    }

    const spans = [];
    const spanRegex = /<span[^>]*>([\s\S]*?)<\/span>/gi;
    let spanMatch;
    while ((spanMatch = spanRegex.exec(sec)) !== null) {
      const text = stripTags(spanMatch[1]).trim();
      if (text.length > 3 && !spans.includes(text)) {
        spans.push(text);
      }
    }

    return {
      sectionIndex: idx,
      headings: headings,
      paragraphs: paragraphs.filter(p => p.length > 5),
      lists: lists.filter(l => l.length > 2),
      spans: spans.filter(s => s.length > 5 && s.length < 200)
    };
  });
}

function stripTags(htmlStr) {
  return htmlStr
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#x3D;/g, '=')
    .replace(/\s+/g, ' ')
    .trim();
}

const rawPath = "C:\\Users\\Yug\\.gemini\\antigravity-ide\\brain\\b6999176-4757-459e-9576-81e18cd43e05\\scratch\\raw_pages.json";
if (!fs.existsSync(rawPath)) {
  console.error("raw_pages.json does not exist at " + rawPath);
  process.exit(1);
}

const rawData = JSON.parse(fs.readFileSync(rawPath, 'utf8'));
const parsedData = {};

let markdownOutput = "# Parsed Content from icewebsolutions.com\n\n";

for (const [slug, html] of Object.entries(rawData)) {
  const sections = cleanHTML(html);
  parsedData[slug] = sections;

  markdownOutput += `## Service: ${slug}\n\n`;
  sections.forEach((sec, sIdx) => {
    markdownOutput += `### Section ${sIdx + 1}\n`;
    if (sec.headings.length > 0) {
      markdownOutput += `* **Headings:**\n`;
      sec.headings.forEach(h => {
        markdownOutput += `  - ${h}\n`;
      });
    }
    if (sec.paragraphs.length > 0) {
      markdownOutput += `* **Paragraphs:**\n`;
      sec.paragraphs.forEach(p => {
        markdownOutput += `  - ${p}\n`;
      });
    }
    if (sec.lists.length > 0) {
      markdownOutput += `* **List Items:**\n`;
      sec.lists.forEach(l => {
        markdownOutput += `  - ${l}\n`;
      });
    }
    if (sec.spans.length > 0 && sec.lists.length === 0) {
      markdownOutput += `* **Text Badges/Spans:**\n`;
      sec.spans.forEach(s => {
        markdownOutput += `  - ${s}\n`;
      });
    }
    markdownOutput += "\n";
  });
  markdownOutput += "---\n\n";
}

const outPath = "C:\\Users\\Yug\\.gemini\\antigravity-ide\\brain\\b6999176-4757-459e-9576-81e18cd43e05\\scratch\\parsed_content.md";
fs.writeFileSync(outPath, markdownOutput);
console.log("Parsed content saved to " + outPath);
