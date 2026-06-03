import {
    Container,
    PersonnelHeader,
    PersonnelImportance,
    PersonnelIntro,
    PersonnelSkills,
} from "@/components";

export default function PersonnelIndexPage() {
    return (
        <Container className="py-10">
            <PersonnelHeader />
            <PersonnelIntro />
            <PersonnelSkills />
            <PersonnelImportance />
        </Container>
    );
}
