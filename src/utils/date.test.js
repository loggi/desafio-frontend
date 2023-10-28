import { formatDate } from './date';

describe('utils/date.js', () => {
  it.each([
    ['31/12/2022', 1672531200],
    ['18/03/2023', 1679126400],
    ['30/01/2023', 1675104000],
    ['01/01/2022', 1641019200]
  ])('deve formatar uma data para o formato %s', (format, value) => {
    expect(formatDate(value)).toBe(format);
  });
});
