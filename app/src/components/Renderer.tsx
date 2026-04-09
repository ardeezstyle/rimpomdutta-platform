import { useState, useEffect } from "react";
import { Chapters } from "../model/chapters.enum";
import { ChaptersService } from "../services/chapters.service";
import { QuestionType, type Chapter, type ChapterBlock } from "../model/app.model";

function Renderer() {
  const [chapter, setChapter] = useState<Chapter | null>(null);

  useEffect(() => {
    const chaptersService = new ChaptersService();
    chaptersService.getChapter(Chapters.My_Mother_at_Sixty_Six_Kamala_Das).then((chapter) => {
      setChapter(chapter);
    });
  }, []);

  const RenderBlock = ({ block }: { block: ChapterBlock }) => {
    switch (block.type) {
      case QuestionType.QA:
        return (<>
          <div key={`qa-${block.id}`}>
            <p className="question">
              <em>{block.id}.</em> {block.question}
            </p>
            <p className="answer"><em>Answer:</em> {block.answer}</p>
          </div>
        </>)
      case QuestionType.EXTRACT:
        return (
          <section className="extractItem" key={`extract-${block.id}`}>
            <h2 className="extractTitle">{block.title}</h2>
            <ol className="extractList">
              {block.questions.map((q) => (
                <li key={q.id}>
                  <p className="question">
                    <em>{q.id}.</em> {q.question}
                  </p>
                  <p className="answer"><em>Answer:</em> {q.answer}</p>
                </li>
              ))}
            </ol>
          </section>
        )
    }
  }

  return <div className="reader">
    <h1>{chapter?.title}</h1>
    <p className="byline">{chapter?.author}</p>
    {chapter?.content.map((block) => (
      <RenderBlock key={block.id} block={block} />
    ))}
  </div>
}

export default Renderer
