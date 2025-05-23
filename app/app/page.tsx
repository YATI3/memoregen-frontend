export default function HomePage() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#fff8dc', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>🧠 Bienvenue sur MemoRegen</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
        Une application intelligente pour aider les personnes âgées à stimuler leur mémoire,
        raviver leurs souvenirs et rester connectées à leurs proches.
      </p>
      <a href="/" style={{
        display: 'inline-block',
        marginTop: '2rem',
        padding: '1rem 2rem',
        backgroundColor: '#facc15',
        borderRadius: '1rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'black'
      }}>
        Accéder à l'application
      </a>
    </main>
  );
}
