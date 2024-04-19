declare module '*.sass' {
  interface IClassNames {
    [className: string]: string
  }
  const className: IClassNames
  export = className
}
