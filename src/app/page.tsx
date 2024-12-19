import { Container } from "./components/Container";
import { FileUploadArea } from "./components/FileUploadArea";
import { MainBoard } from "./components/MainBoard";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-[320px_1fr] h-full gap-4">
        <Sidebar />
        <MainBoard>
          <FileUploadArea />
        </MainBoard>
      </div>
    </Container>
  );
}
