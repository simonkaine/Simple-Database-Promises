import { rm, mkdir } from 'fs/promises';
import { SimpleDb } from '../storedCopies/simpleDatabase';


describe('simple databse', () => {
  const copiedStores = '../storedCopies';
  // beforeEach method that forces remove of Directory and makes new one upon each test.
  // test checks for saved object id
  // create object to hold properties that have no id yet
  // save and get an object (one test that saves then gets)
  // when calling can just simpledb.get() + simpleDb.save() etc..
  
  beforeEach(() => {
    return rm(copiedStores, { force: true, recursive: true }).then(() => {
      return mkdir(copiedStores);
    });
  });

  it('test if saved object has id', () => {
    const instanceOfObject = new SimpleDb(copiedStores);
    const simonKaine = { name: 'simon', age: 33 };

    return instanceOfObject.save(simonKaine).then(() => {
      expect(simonKaine.id).toEqual(expect.any(String));});
  });

  it.only('save and get an object', () => {
    const instanceOfObject = new SimpleDb(copiedStores);
    const simonKaine = { name: 'simon', age: 33 };
    
    return instanceOfObject.save(simonKaine)
      .then(() => {
        return instanceOfObject.get(simonKaine.id);
      })
      .then((booger) => {
        expect(booger).toEqual(simonKaine);
      });
  });
  
  it('should return null if no object was returned', () => {
    const instanceOfObject = new SimpleDb(copiedStores);

    return instanceOfObject.get().then((booger) => {
      expect(booger).toBeNull();
    });
  }); 
}); 


