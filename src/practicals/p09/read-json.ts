import * as fs from 'node:fs/promises';

export async function readJson(fileName: string): Promise<unknow[]>{
    try{
        const fileContent = await fs.readFile(fileName, 'utf-8');
        const carts = JSON.parse(fileContent);
        return carts;
    }
    catch(error){
        if(error instanceof SyntaxError){
            console.error("Invalis JSON format");
        }
        else{
            console.error("Invalid file")
        }
        return[];
    }
}
readJson("users.json")