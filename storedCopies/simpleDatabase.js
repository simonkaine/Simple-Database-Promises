import path from 'path';
import shortid from 'shortid';

export class SimpleDb {
  constructor(destinatian) {
    const idFileName = `${shortid.generate()}.txt`;
    this.newFile = path.join(destinatian, idFileName);
  }
}

export class GetObjectClass {
  constructor(destinatian) {
    const idFileName = `${shortid.generate()}.txt`;
    this.newFile = path.join(destinatian, idFileName);
  }
}

export class SaverClass {
  constructor(destinatian) {
    const idFileName = `${shortid.generate()}.txt`;
    this.newFile = path.join(destinatian, idFileName);
  }
}


