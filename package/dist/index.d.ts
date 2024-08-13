declare const get: (page?: number, pageSize?: number) => any;
declare const sort: (key: keyof any, order?: "asc" | "desc") => void;
declare const filter: (key: keyof any, value: any) => any[];
declare const search: (key: keyof any, query: string) => any[];
export { get, sort, filter, search };
//# sourceMappingURL=index.d.ts.map