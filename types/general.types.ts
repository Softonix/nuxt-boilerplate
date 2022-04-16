export type TIndexedObject<T = any> = {
  [key: string]: T
}

export enum EComponentType {
  INFO = 'info',
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  ERROR = 'error'
}

export enum EComponentSize {
  DEFAULT = 'default',
  LARGE = 'large',
  SMALL = 'small'
}
