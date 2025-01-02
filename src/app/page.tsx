import { Container } from "./components/Container";
import { FileUploadArea } from "./components/FileUploadArea";
import { MainBoard } from "./components/MainBoard";
import { ResultArea } from "./components/ResultArea";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-[320px_1fr] h-full gap-4">
        <Sidebar />
        <MainBoard>
          <FileUploadArea />

          <ResultArea language="eng" duration="1m 20s" wordsQuantity="1400" />
        </MainBoard>
      </div>
    </Container>
  );
}
