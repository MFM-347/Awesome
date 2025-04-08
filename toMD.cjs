"use strict";
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

async function toMD() {
  try {
    const response = await fetch('http://localhost:3000/api/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const md = data.map((item, index) => {
      const isGhUrl = item.url.includes('https://github.com');
      const showGhLink = item.foss && item.osLink && !isGhUrl;

      return `
### ${item.id}. ${item.name}
**ID:** [i${item.id}](https://a347.vercel.app/search/?q=id:${item.id})<br>
**FOSS:** ${item.foss ? 'Yes' : 'No'}${item.foss ? ` | [Source Code](${item.osLink})` : ''}<br>
**Type:** ${item.type}<br>
**Tags:** ${item.tags.join(', ')}<br>
**Description:** ${item.description}<br>
[Website Link](${item.url})${showGhLink ? ` | [GitHub Link](${item.osLink})` : ''}
`;
    }).join('');
    console.log(md);
  } catch (error) {
    console.error('Error generating markdown file:', error);
  }
}

toMD();
