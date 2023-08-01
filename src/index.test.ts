import { isEquals } from ".";

describe("测试用例", () => {
  test("类型不相等的情况", () => {
    expect(isEquals(1, "1")).toBe(false);
    expect(isEquals(true, "true")).toBe(false);
  });

  test("基本类型", () => {
    expect(isEquals(1, 2)).toBe(false);
    expect(isEquals(1, 1)).toBe(true);
    expect(isEquals(true, true)).toBe(true);
    expect(isEquals("1", "1")).toBe(true);
    expect(isEquals(null, null)).toBe(true);
    expect(isEquals(undefined, undefined)).toBe(true);
    expect(isEquals(undefined, null)).toBe(false);
    expect(isEquals(Symbol(1), Symbol(1))).toBe(false);
  });

  test("NaN", () => {
    expect(isEquals(NaN, NaN)).toBe(true);
  });

  test("-0 +0", () => {
    expect(isEquals(-0, +0)).toBe(true);
  });

  test("对象", () => {
    expect(isEquals({}, {})).toBe(true);
    expect(isEquals({ a: 1 }, { a: 1 })).toBe(true);
    expect(isEquals({ a: 1 }, { a: 2 })).toBe(false);
    expect(isEquals({ a: null }, { a: null })).toBe(true);
    expect(isEquals({ a: null }, { a: 1 })).toBe(false);
    expect(isEquals({ a: 1 }, { a: 1, b: 2 })).toBe(false);
    expect(isEquals({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
  });
});
