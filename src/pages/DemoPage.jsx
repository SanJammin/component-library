import Badge from "../components/Badge/Badge";
import Card from "../components/Card/Card";

export default function DemoPage() {
    return (
        <div>
            <Card title={"Zero Setup"} icon={"⚡"} cta={"Learn More"}>
                Explains how users can drop in components without configuring a design system.
                <Badge variant={"primary"} size={"md"}>New</Badge>
            </Card>
            <Card title={"Theming Built-In"} icon={"🎨"} cta={"Try It"}>
                Describes dark/light mode support via context and simple toggles.
                <Badge variant={"default"} size={"sm"}>Beta</Badge>
            </Card>
            <Card title={"Composable by Design"} icon={"🧩"} cta={"Explore Components"}>
                Explains how LaunchKit components work independently but also in harmony.
            </Card>
        </div>
    )
}