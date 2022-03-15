
import fs from 'fs'
import path from 'path'

export default function displayFile(name) {
  const dirPath = path.resolve(__dirname, '../' + name)
  const arr = []
  arr.push('')
  const filearr = fs.readdirSync(dirPath)
  filearr.map((file) => {
    if (file.split('.')[1] == 'md') {
      return
    }
    arr.push({
      title: file.split('.')[1],
      collapsable: true,
      children: handleChildren(dirPath, file),
    })
  })
  return arr
}
function handleChildren(dirPath, file) {
  let arr = [`${file}/`]
  const filedir = path.join(dirPath, file)
  const filearr = fs.readdirSync(filedir)
  filearr.map((item: string) => {
    const filenameArr = item.split('.')[2]
    if (!filenameArr) return
    arr.push(`${file}/${item}`)
  })
  return arr
}