import { Container, ToolsGrid } from "@/components";
import { PageHeader } from "@/components/page-header";

export default function ToolsPage() {
    return (
        <Container className="py-10">
            <PageHeader
                badge=" Rəqəmsal Alətlər"
                title="Alətlər Mərkəzi"
                desc=" Karyeranı qurmaq üçün bütün rəqəmsal platformalar bir yerdə"
                textCenter={true}
            />
            <ToolsGrid />
        </Container>
    );
}
