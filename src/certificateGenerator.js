const sharp = require('sharp');
    
 const addName = async ( name, username) => {
  const svgText = `
  <svg width="2000" height="1100">
    <style>
      .title { fill: bleck; font-size: 100px}
    </style>
    <text x="49%" y="47%" text-anchor="middle" class="title">${name}</text>
   
  </svg>`

  const svgBuffer = await Buffer.from(svgText);

 await sharp (`${__dirname}./image/dataChange/data.png`)
  .composite([{input: svgBuffer}])
  .toFile(`${__dirname}./image/certificate/${username}.png`)
}

const addDate = async (text1) => {
const svgText = `<svg width="2900" height="2100">
<style>
  .title { fill: #404e58; font-size: 75px}
</style>
<text x="51.1%" y="70.50%" text-anchor="middle" class="title">${text1}</text>

</svg>`
const  svgBuffer = await Buffer.from(svgText)
await sharp (`${__dirname}./image/img.png`)

.composite([{input: svgBuffer}])
.toFile(`${__dirname}./image/dataChange/data.png`)

img = "./image/data.png"

}
 
module.exports = {addDate, addName} 
// addDate('c 23 по 25 Февряль 2023 года' )  
// addName("Архиев", "Магомед", "Хадидович", "@HeIIoW0RID" ) 

  