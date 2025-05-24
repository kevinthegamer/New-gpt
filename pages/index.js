import { useState } from 'react';

export default function Home() {
  const [story, setStory] = useState('');
  const [verdict, setVerdict] = useState('');
  const [loading, setLoading] = useState(false);

  async function getVerdict() {
    setLoading(true);
    setVerdict('');
    const res = await fetch('/api/verdict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ story })
    });
    const data = await res.json();
    setVerdict(data.verdict);
    setLoading(false);
  }

  return (
    <div style={{ padding: 30, fontFamily: 'Arial, sans-serif' }}>
      <h1>AITA GPT</h1>
      <p>Submit your story. Let AI be the judge.</p>
      <textarea
        value={story}
        onChange={(e) => setStory(e.target.value)}
        placeholder="Describe your drama..."
        rows={6}
        style={{ width: '100%', padding: 10 }}
      />
      <br />
      <button onClick={getVerdict} disabled={loading || !story}>
        {loading ? 'Judging...' : 'Submit'}
      </button>
      {verdict && (
        <div style={{ marginTop: 20, background: '#f9f9f9', padding: 15 }}>
          <strong>Verdict:</strong>
          <p>{verdict}</p>
        </div>
      )}
    </div>
  );
}
