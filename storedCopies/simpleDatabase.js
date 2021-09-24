import { readFile } from 'fs/promises';
import { writeFile, readdir } from 'fs/promises';
import path from 'path';
import shortid from 'shortid';

export class SimpleDb {
  constructor(destination) {
    // constructor forms basic initialization
    this.copiedStores = destination;
  }
  // method that saves object
  // save method takes in an object. generate Id & assign id to object Id..
  // create JSON file name with object id.
  // create path by joining location with the file name
  // stringify object
  // return written file of the path that is stringified.

  getPath(id){
    const fileName = `${id}.json`;
    const filePath = path.join(this.copiedStores, fileName);
    return filePath;
  }

  save(obj) {
    const fileId = shortid.generate();
    obj.id = fileId;
    // const fileName = `${obj.id}.json`;
    // const filePath = path.join(this.copiedStores, fileName);
    const filePath = this.getPath(obj.id);
    const stringified = JSON.stringify(obj);
    return writeFile(filePath, stringified);
  }

  get(id) {
    // Reads <== the contents of the JSON file with the corresponding ID
    // Deserializes to an object using JSON.parse
    const getPathById = this.getPath(id);
    
    return readFile(getPathById, 'utf-8').then(contentTxt => 
      JSON.parse(contentTxt)).catch((err) => {
      if (err.code === 'ENOENT') {
        return null;
      }
      throw err;
    });
  }
  // Returns an array of all the objects in the directory, 
  // deserialized from the corresponding files in the directory.
  getAll() {
    return readdir(this.copiedStores).then((files) => { 
      return files.map((file) => 
        path.basename(file, '.json')
      );
    })
      .then((family) => {
        return Promise.all(
          family.map((member) => {
            console.log('family member', member);
            return this.get(member);
          })
        );
      });
  }
}




