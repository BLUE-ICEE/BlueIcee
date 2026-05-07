export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: 'rgba(255,255,255,0.15)',
          padding: '60px',
          borderRadius: '40px',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.2)',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '80px',
            fontWeight: '900',
            marginBottom: '20px',
          }}
        >
          Blue Icee
        </h1>

        <p
          style={{
            fontSize: '24px',
          }}
        >
          Your icy social arcade world ✨
        </p>
      </div>
    </main>
  )
}
