
import fs from 'fs'
import path from 'path'

export default function displayFile(name) {
  const dirPath = path.resolve(__dirname, '../' + name)
  const arr = []
  const filearr = fs.readdirSync(dirPath)
  filearr.map((file) => {
    const dp = path.join(dirPath,file)
    const isdir = fs.statSync(dp).isDirectory()
    if (file.split('.')[0] == 'README') {
      arr.unshift('')
      return
    }else if(!isdir){
      arr.push(file)
    }else{
    arr.push({
      title: file.split('.')[1],
      collapsable: true,
      children: handleChildren(dirPath, file),
    })
  }
  })
  return arr
}
function handleChildren(dirPath, file) {
  let arr = []
  const filedir = path.join(dirPath, file)
  const filearr = fs.readdirSync(filedir)
  filearr.map((item: string) => {
    const filenameArr = item.split('.')[2]
    if (!filenameArr) return
    arr.push(`${file}/${item}`)
  })
  return arr
}