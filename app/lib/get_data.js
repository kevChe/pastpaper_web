import fsPromises from 'fs/promises'
import path from 'path'

export async function getLocalData(subject) {
    const filePath = path.join(process.cwd(), `app/lib/output_${subject}.json`);
    try{

        const jsonData = await fsPromises.readFile(filePath);
        const data = JSON.parse(jsonData);
        return data;
    } catch(error) {
        return {}
    }

}