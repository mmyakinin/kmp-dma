import { Container, ToolsGrid, ToolsHeader } from "@/components";

export default function ToolsPage() {
    return (
        <Container className="py-10">
            <ToolsHeader />
            <ToolsGrid />
        </Container>
    );
}
