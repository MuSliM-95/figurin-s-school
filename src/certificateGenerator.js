const sharp = require('sharp');
const path = require('path')
const fs = require('fs')

let folderPath = fs.readdirSync("./image/dataChange").map(fileName => {
    return path.join(folderPath, fileName)
  })
console.log(folderPath);

let img = "./image/img.png"
const addName = async (name) => {
  const svgText = `
  <svg width="1600" height="1100">
    <style>
      .title { fill: bleck; font-size: 130px}
    </style>
    <text x="50%" y="45%" text-anchor="middle" class="title">${name}</text>
  </svg>`

  const svgBuffer = await Buffer.from(svgText);

 await sharp (__dirname + img)
  .composite([{input: svgBuffer}])
  .toFile(__dirname + "./certificate/certificate.png")
}

const addDate = async (date) => {
const svgText = `<svg width="1600" height="1100">
<style>
  .title { fill: bleck; font-size: 130px}
</style>
<text x="50%" y="45%" text-anchor="middle" class="title">${date}</text>
</svg>`
const  svgBuffer = await Buffer.from(svgText)
await sharp (__dirname + img)
 ``
.composite([{input: svgBuffer}])
 `./image/img${Math.floor(Math.random() * 1000)}.png`
.toFile(`${__dirname}./image/img${Math.floor(Math.random() * 1000)}.png`)

}

// addDate("--------------------")
// addName("Архиев Магомед Хадидович")
