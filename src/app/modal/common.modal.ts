export interface ParamMap {
  has(name: string): boolean;
  get(name: string): string;
  getAll(name: string): string[];
  readonly keys: string[];
}
