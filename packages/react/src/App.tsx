import { Button } from './button';

export default function App() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Component Lab</h1>
      <Button onClick={() => alert('Clicked!')}>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button disabled>Disabled</Button>
    </main>
  );
}