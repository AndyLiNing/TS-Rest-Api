export const isNonNullish = <T>(value: T | undefined | null): value is T => value !== undefined && value !== null;
