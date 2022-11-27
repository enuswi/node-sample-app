// テスト用サンプルコード（テスト対象）
export function sum (...a: number[]): number {
  let total = 0
  for (const n of a) total += n
  return total
}
