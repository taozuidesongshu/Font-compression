const Fontmin = require('fontmin');
const fs=require('fs');



const srcPath = './fonts/SourceHanSansCN-Regular.ttf'; // 字体源文件
// const srcPath = './fonts/PingFang Regular.ttf'; // 字体源文件
const destPath = './build/';    // 输出路径
let text=''


fs.readFile('./CommonChineseCharacter/3500常用字.txt','utf-8',function(err,data){
  if(err){
    console.error(err);
  }
  else{
    text=data.replace(/\d/g,'')
    // console.log(data.replace(/\d/g,''));
    getfongsize()
  }
});

function getfongsize(){
  // 初始化

  let fontmin = new Fontmin()
  .src(srcPath)               // 输入配置
   .use(Fontmin.glyph({        // 字型提取插件
     text              // 所需文字
   }))
   .use(Fontmin.ttf2eot())     // eot 转换插件
   .use(Fontmin.ttf2woff())    // woff 转换插件
   .use(Fontmin.ttf2svg())     // svg 转换插件
   .use(Fontmin.css())         // css 生成插件
   .dest(destPath);            // 输出配置

  // 执行
  fontmin.run(function (err, files, stream) {

    if (err) {                  // 异常捕捉
      console.error(err);
    }

    console.log('done');        // 成功
    console.log(files);        // 成功
  });
}