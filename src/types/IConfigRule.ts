export interface IUse {
  loader: string;
  options: string[];
}

export interface IConfigRule {
  test: string;
  exclude?: string;
  type?: string;
  use: IUse[];
}
