const { formatDate } = require('../../client/utils/helpers');

test('formats date correctly', () => {
  expect(formatDate('2025-05-16')).toBe('5/16/2025');
});
