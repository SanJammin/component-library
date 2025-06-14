import Badge from "../components/Badge/Badge";

export default function DemoPage() {
    return (
        <>
            <Badge variant={"default"} size={"sm"}>Beta</Badge>
            <Badge variant={"primary"} size={"md"}>New</Badge>
            <Badge variant={"danger"} size={"lg"}>Popular</Badge>
        </>
    )
}