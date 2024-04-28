import { MemoryRouter } from 'react-router-dom'
import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import i18nForTests from '@/shared/config/i18n/i18nForTests'

export interface ComponentRenderPropsOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export default function ComponentRender(component: ReactNode, options: ComponentRenderPropsOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}