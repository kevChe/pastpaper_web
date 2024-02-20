import fsPromises from 'fs/promises'
import path from 'path'

export async function getLocalData() {
    const filePath = path.join(process.cwd(), 'app/lib/output_ict.json');
    const jsonData = await fsPromises.readFile(filePath);
    const data = JSON.parse(jsonData);

    return data;
}