import { useHits } from './useHits';

export function HitCounter() {
  const hits = useHits();
  return hits;
}

