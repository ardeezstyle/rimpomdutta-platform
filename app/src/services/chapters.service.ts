import type { Chapter } from '../model/app.model'
import type { Chapters } from '../model/chapters.enum'

// Lazy loaders (Vite will code-split)
const chapterModules = import.meta.glob('../assets/chapters/*.json')

export class ChaptersService {
  async getChapter(chapter: Chapters): Promise<Chapter> {
    const key = `../assets/chapters/${chapter}`
    const loader = chapterModules[key] as undefined | (() => Promise<{ default: Chapter }>)

    if (!loader) {
      throw new Error(`Chapter not found: ${chapter}`)
    }

    const mod = await loader()
    return mod.default
  }
}