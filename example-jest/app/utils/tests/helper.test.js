/**
 * Helper injectors
 */

import { formatCurrency, changeAlias, returnArr } from '../helper';

describe('helper', () => {
  describe('format currency', () => {
    it('format currency correctly', () => {
      expect(formatCurrency(100000)).toBe('100,000 VND');
    });
  });

  describe('not format currency', () => {
    it('format currency not correctly', () => {
      expect(formatCurrency(100000)).not.toBe('100.000 VND');
    });
  });

  describe('change alias', () => {
    it('change alias correctly', () => {
      expect(changeAlias('Hệ thống gợi ý')).toEqual('Hệ thống gợi ý');
    });
  });

  describe('change not alias', () => {
    it('change alias not correctly', () => {
      expect(changeAlias('Hệ thống gợi ý')).not.toEqual('he thong goi ý');
    });
  });

  describe('check array', () => {
    it('check array correctly', () => {
      expect(returnArr()).toContain(1);
      expect(new Set(returnArr())).toContain(2);
    });
  });
});
