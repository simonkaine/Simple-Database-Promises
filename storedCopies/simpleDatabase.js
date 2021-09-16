import path from 'path';
import shortid from 'shortid';

export class SimpleDb {
  constructor(destinatian) {
    // constructor forms basic initialization
    const idFileName = `${shortid.generate()}.txt`;
    this.newFile = path.join(destinatian, idFileName);
  }
  // method that saves object
  // ..get 
  // ..getAll
  const savedObject = idFileName.save();
}




