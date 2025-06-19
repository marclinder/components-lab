import { Button } from '../button';
import './_demo_layout.css';

export function ButtonDemo() {
    return (
        <>
            <section className="demo">
                <h2 className="title">Button Variants</h2>

                <p className="description">
                    Use different button variants to express hierarchy and intent across your interface. Primary buttons highlight key actions, secondary buttons offer alternatives, and ghost buttons provide minimal styling for low-emphasis actions.
                </p>

                <div className="demo-row">
                    <Button variant="primary" action={() => window.alert('Click')}>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="primary" size='sm'>
                        <img width="20" src="/svg/circle.svg" alt="Circle icon" />
                        Button Icon
                    </Button>
                    <Button variant="primary" size='sm'>
                        <img width="20" src="/svg/circle.svg" alt="Circle icon" />
                    </Button>
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
                    <Button size="xl">Extra Large</Button>
                </div>
            </section>
            <section className="demo">
                <h2 className="title">Custom Class Examples</h2>
                <p className="description">
                    You can pass custom classes to adjust layout, spacing, or transitions as needed.
                </p>
                <div className="demo-row">
                    <Button className="pt-space-4">With top padding</Button>
                    <Button size="sm" className="btn-bg-funky">Funky Button</Button>
                </div>
            </section>
        </>
    );
}