import { useEffect } from 'react';

export default function BlankPage() {
  useEffect(() => {
    document.title = 'João Streibel';
  }, []);

  return null;
}
