const fs=require("fs")

exports.readMarkdownFileSync=(path)=>{
    const markdownStr=fs.readFileSync(path,{encoding:"utf-8"});
    return markdownStr
};