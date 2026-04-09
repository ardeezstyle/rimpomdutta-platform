export type Chapter = {
	title: string;
	author: string;
	content: ChapterBlock[];
}
export type ChapterBlock = QAItem | ExtractItem;
export const QuestionType = {
  QA: 'qa',
  EXTRACT: 'extract',
} as const;

export type QuestionType = typeof QuestionType[keyof typeof QuestionType];

export type QAItem = {
	type: typeof QuestionType.QA;
	id: number;
	question: string;
	answer: string;
}
export type ExtractItem = {
	type: typeof QuestionType.EXTRACT;
	id: number;
	title: string;
	questions: ExtractQuestion[];
}
export type ExtractQuestion = {
	id: string;
	question: string;
	answer: string;
}