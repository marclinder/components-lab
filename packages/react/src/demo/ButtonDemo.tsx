import { Button } from '../button';
import './demo.css';

export function ButtonDemo() {
  return (
    <section className="demo">
      <h2>Button Variants</h2>

      <div className="demo-row">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <h2>Disabled</h2>
      <div className="demo-row">
        <Button variant="primary" disabled>Primary</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="ghost" disabled>Ghost</Button>
      </div>

      <h2>Sizes</h2>
      <div className="demo-row">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </section>
  );
}