import path from 'path';
import shortid from 'shortid';

export class simpleDb {
  constructor(destintian) {
    const idFileName = `${shortid.generate()}.txt`;
    this.newFile = path.join(destintian, idFileName);
  }

}
