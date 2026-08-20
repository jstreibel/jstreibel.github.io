import { useEffect } from 'react';

export default function LinksPage() {
  useEffect(() => {
    document.title = 'Links | João Streibel';
  }, []);

  return <>
    <h1>Links</h1>
    <p>Paul Graham - <a href="https://paulgraham.com" target="_blank" rel="noopener noreferrer">paulgraham.com</a></p>
    <p>Andrej Karpathy - <a href="https://karpathy.ai/" target="_blank" rel="noopener noreferrer">karpathy.ai</a></p>
  </>
}
