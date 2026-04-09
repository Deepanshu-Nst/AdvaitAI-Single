import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Insight = defineDocumentType(() => ({
  name: 'Insight',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: { type: 'string', required: true },
    category: { type: 'string', required: true },
    readTime: { type: 'string', required: true },
    coverImage: { type: 'string', required: false },
    excerpt: { type: 'string', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (insight) => `/insights/${insight._raw.flattenedPath}` },
    slug: { type: 'string', resolve: (insight) => insight._raw.flattenedPath },
  },
}))

export default makeSource({
  contentDirPath: 'content/insights',
  documentTypes: [Insight],
})
