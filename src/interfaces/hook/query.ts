export interface IMutationArgs<IArg, IReturn> {
  key?: string[];
  callback: (arg: IArg) => Promise<IReturn>;
}

export interface IQueryArgs<IArg, IReturn> {
  key: string[];
  callback: (arg: any) => Promise<IReturn>;
}

export interface IMutationResponse<IArg = unknown, IReturn = unknown> {
  mutate: unknown;
  status: string;
}
export interface IQueryResponse<IReturn = unknown> {
  data?: IReturn;
  status: string;
}
