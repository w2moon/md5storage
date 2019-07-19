# md5storage

计算文件的md5值，并存入指定目录，
并用md5当文件名，可以避免重复文件

一般用法

let store = new MD5Storage("tempFolderPath");

let myfile = "pathToFile";
let newfile = "对应myfile的转换后新文件";

let md5file = store.getValidPath(myfile);
if(md5file){
    //文件已经存在

    // 读取文件内容
    fs.readSync(md5file);
}
else{
    //文件不存在

    //保存新文件
    store.save(myfile,newfile);
}