import {getUTCNow} from "../../src/utils/date";

describe('getUTC', () =>{
  it('should get a valid date', () => {
    const result = getUTCNow();
    expect(result).not.toBeNull();
  })
})