import { Content } from '../value-objects/content';
import { Notification } from './notification';

describe('Notification', () => {
  it('Should be able to create a new notification', () => {
    expect(
      () =>
        new Notification({
          recipientId: '0000-0000-0000-0000',
          category: 'Valid Category',
          content: new Content('Valid Content'),
          createdAt: new Date(),
        }),
    ).toBeTruthy();
  });
});
