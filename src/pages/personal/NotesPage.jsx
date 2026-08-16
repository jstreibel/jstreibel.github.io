import { useEffect } from 'react';

export default function NotesPage() {
  useEffect(() => {
    document.title = 'Notes | João Streibel';
  }, []);

  return <h1>Notes</h1>
}
