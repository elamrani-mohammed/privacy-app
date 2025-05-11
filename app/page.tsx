
export default function Home() {
  return (
    <main
      style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}
    >
      <h1>Welcome to Our App SMART HOME</h1>
      <p>This is a demo site for our app&apos;s policies.</p>
      <nav style={{ marginTop: "2rem" }}>
        <a href="/privacy" style={{ marginRight: "1rem" }}>
          Privacy Policy
        </a>
        <a href="/delete">Request Account Deletion</a>
      </nav>
    </main>
  );
}

