export function isEquals(a: unknown, b: unknown): boolean {
  if (typeof a !== typeof b) {
    return false;
  }

  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }

  if (typeof a === "object" && typeof b === "object") {
    if (a === null || b === null) {
      return a === b;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
      return false;
    }

    return keysA.every((key) => isEquals((a as any)[key], (b as any)[key]));
  }

  return a === b;
}
