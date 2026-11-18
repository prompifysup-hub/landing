import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

/** Light / dark theme (class on <html>), following the visitor's system setting by default. */
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            {...props}>
            {children}
        </NextThemesProvider>
    )
}
