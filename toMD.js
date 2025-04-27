import { data } from './app/data/index.ts'

function toMD() {
  const md = data
    .map((item) => {
      const isGithubUrl = item.url.includes('https://github.com')
      const hasSeparateGhLink = item.foss && item.osLink && !isGithubUrl

      const fossInfo = item.foss ? `Yes | [Source Code](${item.osLink})` : 'No'

      const ghLink = hasSeparateGhLink ? ` | [GitHub Link](${item.osLink})` : ''

      return `
### ${item.id}. ${item.name}

**ID:** [i${item.id}](https://a347.vercel.app/search/?q=id:${item.id})
**FOSS:** ${fossInfo}
**Type:** ${item.type}
**Tags:** ${item.tags.join(', ')}
**Description:** ${item.description}
[Website Link](${item.url})${ghLink}
`
    })
    .join('\n')

  console.log(md)
}

toMD()
