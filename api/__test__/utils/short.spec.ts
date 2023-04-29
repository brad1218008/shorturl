import {generateId} from "../../src/utils/short";

describe('generateId', () =>{
  it('should return a string which length is six', async () => {
    const result = await generateId();
    expect(result.length).toEqual(6);
  });

  it('should return a certain string length we define', async () => {
    const length = 10;
    const result = await generateId(length);
    expect(result.length).toEqual(length);
  });
})