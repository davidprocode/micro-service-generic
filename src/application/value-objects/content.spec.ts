import { Content } from './content';

describe('Notification Content', () => {
  it('Should be able to create a new content', () => {
    expect(() => new Content('Valid Content!')).toBeTruthy();
  });

  it('Should not be able to create a new content with less than 5 characters', () => {
    expect(() => new Content('a'.repeat(4))).toThrowError('Length Error');
  });

  it('Should not be able to create a new content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrowError('Length Error');
  });
});
