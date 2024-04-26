import { FC } from 'react'
import LoaderIcon from '../../../shared/icons/LoaderIcon'

import cls from './Loader.module.sass'

export const Loader: FC = () => {
  return <LoaderIcon className={cls.Loader} />
}
