import { describe, it, expect } from 'vitest';
import { parseContent } from './markdown';

const content = [
  'Intro paragraph.',
  '## One',
  'Body one.',
  '## Two',
  'Body two.',
  '### Sub',
  '## Three',
  'Body three.',
].join('\n');

function Marker() {
  return null;
}

describe('parseContent', () => {
  it('renders the same elements as before when no hook is given', () => {
    const types = parseContent(content).map((el) => el.type);
    expect(types).toEqual(['p', 'h2', 'p', 'h2', 'p', 'h3', 'h2', 'p']);
  });

  it('calls beforeH2 with 1-based ordinals and inserts its result before the heading', () => {
    const seen: number[] = [];
    const elements = parseContent(content, {
      beforeH2: (ordinal, key) => {
        seen.push(ordinal);
        return ordinal === 3 ? <Marker key={key} /> : null;
      },
    });

    expect(seen).toEqual([1, 2, 3]);
    expect(elements.map((el) => el.type)).toEqual(['p', 'h2', 'p', 'h2', 'p', 'h3', Marker, 'h2', 'p']);
  });

  it('ignores ordinals beyond the number of h2 headings', () => {
    const elements = parseContent(content, {
      beforeH2: (ordinal, key) => (ordinal === 6 ? <Marker key={key} /> : null),
    });
    expect(elements.some((el) => el.type === Marker)).toBe(false);
  });
});
