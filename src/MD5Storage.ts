import * as fs from "fs";
import * as wlutil from "wlutil";

export class MD5Storage{
    private folder:string;

    /**
     * @param folder 存储路径
     */
    constructor(folder:string){
        this.folder = folder;
    }

   

    /**
     * 获得path文件的存储路径
     * @param path 
     */
    getPath(path:string ){
        let md5 = wlutil.md5(path);
        return `${this.folder}/${md5.substr(0,2)}/${md5}`;
    }

    /**
     * 用path的md5值，保存path指定文件到存储里
     * @param path 
     */
    save(path:string ){
        this.saveOther(path,path);
    }

    /**
     * 用path的md5值，保存file指定文件到存储里
     * @param path 
     * @param file 
     */
    saveOther(path:string ,file:string ){
        let md5Path = this.getPath(path);
        wlutil.createFolders(md5Path,true);
        fs.writeFileSync(md5Path,fs.readFileSync(file));
    }

    getValidPath(path:string){
        let md5path = this.getPath(path);
        if(fs.existsSync(md5path)){
            return md5path;
        }
        
    }

    /**
     * 读取path文件对应的md5文件，没有则返回undefined
     * @param path 
     */
    load(path:string){
        let md5path = this.getPath(path);
        if(!fs.existsSync(md5path)){
            return;
        }
        return fs.readFileSync(md5path);
    }
}