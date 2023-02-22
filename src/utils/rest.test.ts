import { post } from './rest';

describe('rest', () => {
  const response = { test: 100 };

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        text: () => Promise.resolve(JSON.stringify(response)),
      }),
    ) as jest.Mock;
  });

  it('post', async () => {
    const result = await post('some url', {
      some: 'data',
    });
    expect(result).toEqual(response);
  });
});
