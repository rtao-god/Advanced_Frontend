import AboutPage from '@/pages/AboutPage/AboutPage'
import MainPage from '@/pages/MainPage/MainPage'
import RegisterPage from '@/pages/RegisterPage/RegisterPage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  REGISTER = 'register'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.REGISTER]: '/register',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [RegisterPage.REGISTER]: {
    path: RoutePath.register,
    element: <RegisterPage />,
  },
}
