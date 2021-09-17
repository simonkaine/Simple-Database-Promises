import { writeFile } from 'fs/promises';
import path from 'path';
// import { parse } from 'path/posix';
import shortid from 'shortid';

export class SimpleDb {
  constructor(destinatian) {
    // constructor forms basic initialization
    this.copiedStores = destinatian;
  }
  // method that saves object
  // save takes in an object. generate Id. assign id to object Id..
  // create JSON file name with object id.
  // create path by joining location with the file name
  // stringify object
  // return written file of the path that is stringified.

  save(obj) {
    const fileId = shortid.generate();
    obj.id = fileId;
    const fileName = `${obj.id}.json`;
    const filePath = path.join(this.copiedStores, fileName);
    const stringified = JSON.stringify(obj);
    return writeFile(filePath, stringified);
  }
  // get() {
  //   const parsedObject = JSON.parse(stringified);
  //   return parsedObject;
  // }
  // ..get 
  // ..getAll
  // const savedObject = idFileName.save();
}




