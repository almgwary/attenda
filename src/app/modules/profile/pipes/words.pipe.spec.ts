import { WordsPipe } from './words.pipe';

describe('WordsPipe', () => {
  it('create an instance', () => {
    const pipe = new WordsPipe();
    expect(pipe).toBeTruthy();
  });
});
