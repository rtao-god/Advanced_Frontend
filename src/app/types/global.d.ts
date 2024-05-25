declare module '*.sass' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.scss' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
