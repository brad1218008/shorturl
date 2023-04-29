import {logger} from "../../src/utils/logger";

describe('logger', () => {
  it('should not be null setting', () => {
    expect(logger).not.toBeNull();
  })
})