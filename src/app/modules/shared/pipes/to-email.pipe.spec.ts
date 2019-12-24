import { ToEmailPipe } from './to-email.pipe';

describe('ToEmailPipe', () => {
  it('create an instance', () => {
    const pipe = new ToEmailPipe();
    expect(pipe).toBeTruthy();
  });
});
