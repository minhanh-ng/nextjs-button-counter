import Counter from "./Counter";

export default function Home() {
  return (
    <main className="home-section">
      <h1>Sales Counter</h1>

      <h2>Default Counter</h2>
      <Counter />

      <h2>Custom Counter</h2>
      <Counter initialCount={5} initialStep={2} />
    </main>
  )
}