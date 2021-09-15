import { rm, mkdir } from 'fs/promises';
import { simpleDb } from '../storedCopies/simpleDatabase';


describe('simple databse', () => {
  const destination = './__tests__/dest/';
  // beforeEach method that forces remove of Directory and makes new one upon each test.
  // test checks for saved object id
  // create object to hold properties that have no id yet
  // save and get an object (one test that saves then gets)
  // 
  
  beforeEach(() => {
    return rm(destination, { force: true, recursive: true }).then(() => {
      return mkdir(destination);
    });
  });

  it('test if saved object has id', () => {
    const instanceOfObject = new simpleDb(destination);
    const simonKaine = { name: 'simon', age: 33 };

    return instanceOfObject.save(simonKaine).then(() => {
      expect(simonKaine.id).toEqual(expect.any(String));});
  });
});

