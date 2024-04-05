const fs = require('fs');
const path = require('path');
const marked = require('marked');

// 定位到当前工作目录下的'pages'子目录
const targetDirectory = path.join(process.cwd(), 'pages');

// 创建一个数组来存储所有转换后的HTML字符串
const htmlStrings = [];

fs.readdir(targetDirectory, (err, files) => {
    if (err) {
        console.error("无法读取目录: ", err);
        return;
    }

    // 过滤出.md文件
    const mdFiles = files.filter(file => path.extname(file).toLowerCase() === '.md');

    // 初始化一个计数器来跟踪已处理的文件数量
    let filesProcessed = 0;

    mdFiles.forEach(file => {
        const filePath = path.join(targetDirectory, file);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error("无法读取文件: ", err);
                return;
            }

            // 使用marked将Markdown转换为HTML
            const html = marked.parse(data);
            // 将转换后的HTML字符串添加到数组中
            htmlStrings.push(html);

            // 更新已处理的文件计数器
            filesProcessed++;

            // 检查是否所有文件都已处理完毕
            if (filesProcessed === mdFiles.length) {
                // 在这里，所有的HTML字符串都已经保存在htmlStrings数组中
                // 你可以在这里进行后续处理，例如输出到控制台
                console.log(htmlStrings); // 输出所有转换后的HTML字符串
                // 或者进行其他形式的处理
            }
        });
    });
});
