import { ReactNode } from 'react'

type MenuType = {
    label: string
    destination: string
}
export const menuItem = [
    {
        label: `Home`,
        destination: `/home`,
    },
    {
        label: `Reading Book`,
        destination: `/reading`,
    },
    {
        label: `Writer`,
        destination: `/writer`,
    },
]