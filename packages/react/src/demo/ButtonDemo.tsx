import { Button } from "../button";
import "./_demo_layout.css";
import * as Icon from "react-feather";

export function ButtonDemo() {
  return (
    <>
      <section className="demo">
        <h2 className="title">Button Variants</h2>

        <p className="description">
          Use different button variants to express hierarchy and intent across
          your interface. Primary buttons highlight key actions, secondary
          buttons offer alternatives, and ghost buttons provide minimal styling
          for low-emphasis actions.
        </p>

        <div className="demo-row">
          <Button variant="primary" action={() => window.alert("Click")}>
            Primary
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="link" className="align-self-center">
            Link
          </Button>
        </div>

        <h2>Disabled</h2>
        <div className="demo-row">
          <Button variant="primary" disabled>
            Primary
          </Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button variant="tertiary" disabled>
            Tertiary
          </Button>
          <Button variant="link" disabled className="align-self-center">
            Link
          </Button>
        </div>

        <h2>Sizes</h2>
        <div className="demo-row">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>

        <h2>Icon Buttons</h2>
        <div className="demo-row">
          <Button variant="primary">
            <Icon.Activity size={20} />
            Icon Button
          </Button>
          <Button variant="secondary">
            Icon Button
            <Icon.Check size={20} color="#12B76A" />
          </Button>
          <Button variant="tertiary">
            Icon Button
            <Icon.Send size={20} style={{ color: "currentColor" }} />
          </Button>
        </div>

        <h2>Icon Only</h2>
        <div className="demo-row">
          <Button variant="primary" size="sm" icon-only>
            <Icon.Airplay size={20} />
          </Button>
          <Button variant="primary" size="md" icon-only>
            <Icon.Anchor size={20} />
          </Button>
          <Button variant="primary" size="lg" icon-only>
            <Icon.Aperture size={20} />
          </Button>
          <Button variant="primary" size="xl" icon-only>
            <Icon.Archive size={20} />
          </Button>
          <Button variant="primary" size="xl" icon-only disabled>
            <Icon.Award size={20} />
          </Button>
        </div>
      </section>

      <section className="demo">
        <h2 className="title">Intent Variants</h2>
        <p className="description">
          Use semantic intents to convey status or purpose more clearly. Combine
          intents with any button variant to reinforce meaning.
        </p>
        <div className="demo-row">
          <Button variant="primary" intent="success">
            Success
          </Button>
          <Button variant="primary" intent="success">
            Success
          </Button>
          <Button variant="primary" intent="warning">
            Warning
          </Button>
          <Button variant="primary" intent="error">
            Error
          </Button>
          <Button variant="primary" intent="info">
            Info
          </Button>
        </div>

        <div className="demo-row">
          <Button variant="secondary" intent="success">
            Success
          </Button>
          <Button variant="secondary" intent="success">
            Success
          </Button>
          <Button variant="secondary" intent="warning">
            Warning
          </Button>
          <Button variant="secondary" intent="error">
            Error
          </Button>
          <Button variant="secondary" intent="info">
            Info
          </Button>
        </div>

        <div className="demo-row">
          <Button variant="primary" intent="success" disabled>
            Success
          </Button>
          <Button variant="secondary" intent="warning" disabled>
            Warning
          </Button>
          <Button variant="tertiary" intent="error" disabled>
            Error
          </Button>
          <Button variant="link" intent="info" disabled>
            Info
          </Button>
        </div>
      </section>

      <section className="demo">
        <h2 className="title">Custom Class Examples</h2>
        <p className="description">
          You can pass custom classes to adjust layout, spacing, or transitions
          as needed.
        </p>
        <div className="demo-row">
          <Button className="btn-shadow-funky">Custom Button</Button>
          <Button size="sm" className="btn-bg-funky">
            Custom Button
          </Button>
        </div>
      </section>
    </>
  );
}
