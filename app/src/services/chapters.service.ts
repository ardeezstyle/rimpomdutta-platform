import { Chapters } from "../model/chapters.enum";

export class ChaptersService {
    
    constructor() {}

    getChapter(chapter: Chapters) {
        return import(`../assets/chapters/${chapter}`);
    }
}