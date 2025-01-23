// @ts-expect-error generic fetcher function for SWR
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
