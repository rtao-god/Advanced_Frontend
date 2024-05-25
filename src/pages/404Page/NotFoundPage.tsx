import { useBackOnPrevPage } from '@/shared/lib/hooks/'

import cls from './NotFoundPage.module.sass'
import classNames from '@/shared/lib/helpers/classNames'
import Text from '@/shared/ui/Text/Text'
import { MOBILE } from '@/shared/utils'
import Btn from '@/shared/ui/Btn/Btn'

interface NotFoundPageProps {
  className?: string
}

export default function NotFoundPage({ className }: NotFoundPageProps) {
  const backOnPrevPage = useBackOnPrevPage

  return (
    <div className={classNames(cls.Not_found_page, {}, [className || ''])}>
      <div className={cls.container}>
        <Text type="h2" fz={`${MOBILE ? '17px' : '24px'}`} position="center">
          Страница не найдена
        </Text>
        <Text type="p" fz={`${MOBILE ? '14px' : '16px'}`} color="#B1B2B4" position="center">
          Неправильно набран адрес
          <br /> или такой страницы не существует
        </Text>
      </div>
      <Btn color="#0064FA" onClick={backOnPrevPage}>
        Вернуться
      </Btn>
    </div>
  )
}
