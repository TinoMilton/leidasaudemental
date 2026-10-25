import React from 'react';

interface ParseContentOptions {
  /** Called before every `## ` heading with its 1-based ordinal; a returned element is inserted before the heading. */
  beforeH2?: (ordinal: number, key: string) => React.ReactElement | null;
}

// Simple markdown-like parser
export function parseContent(content: string, { beforeH2 }: ParseContentOptions = {}) {
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let h2Count = 0;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Empty line
    if (!line.trim()) {
      i++;
      continue;
    }

    // H2
    if (line.startsWith('## ')) {
      const text = line.replace('## ', '');
      const slug = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      h2Count++;
      const before = beforeH2?.(h2Count, `before-h2-${h2Count}`);
      if (before) elements.push(before);
      elements.push(
        <h2 key={i} id={slug} className="text-2xl font-bold text-[#1F2937] mt-10 mb-4 scroll-mt-24">
          {text}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith('### ')) {
      const text = line.replace('### ', '');
      const slug = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      elements.push(
        <h3 key={i} id={slug} className="text-xl font-bold text-[#1F2937] mt-8 mb-3 scroll-mt-24">
          {text}
        </h3>
      );
      i++;
      continue;
    }

    // H4
    if (line.startsWith('#### ')) {
      elements.push(
        <h4 key={i} className="text-lg font-semibold text-[#1F2937] mt-6 mb-2">
          {line.replace('#### ', '')}
        </h4>
      );
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} className="border-l-4 border-[#4A7C59] pl-4 py-2 my-6 bg-[#F5F7F5] rounded-r-lg">
          <p className="text-[#4A7C59] font-medium italic">{line.replace('> ', '')}</p>
        </blockquote>
      );
      i++;
      continue;
    }

    // Unordered list
    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].replace('- ', ''));
        i++;
      }
      elements.push(
        <ul key={i} className="list-disc list-inside space-y-2 my-4 text-[#374151]">
          {items.map((item, idx) => (
            <li key={idx} className="ml-4" dangerouslySetInnerHTML={{ 
              __html: item.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') 
            }} />
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\./.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\./.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s*/, ''));
        i++;
      }
      elements.push(
        <ol key={i} className="list-decimal list-inside space-y-2 my-4 text-[#374151]">
          {items.map((item, idx) => (
            <li key={idx} className="ml-4" dangerouslySetInnerHTML={{ 
              __html: item.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') 
            }} />
          ))}
        </ol>
      );
      continue;
    }

    // Table
    if (line.includes('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].includes('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      
      if (tableLines.length >= 2) {
        const headers = tableLines[0].split('|').map(h => h.trim()).filter(Boolean);
        const rows = tableLines.slice(2).map(row => 
          row.split('|').map(cell => cell.trim()).filter(Boolean)
        ).filter(row => row.length > 0);

        elements.push(
          <div key={i} className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#4A7C59] text-white">
                  {headers.map((header, idx) => (
                    <th key={idx} className="px-4 py-3 text-left font-semibold">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-[#F5F7F5]'}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="px-4 py-3 text-[#374151] border-b border-[#E8F5E9]">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Regular paragraph
    const formattedText = line
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#1F2937]">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
    
    elements.push(
      <p key={i} className="text-[#374151] leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formattedText }} />
    );
    i++;
  }

  return elements;
}
