/* Link used by the sections (Tailark wrote them for Next.js): renders a plain <a>. */
import * as React from 'react'

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string | { pathname?: string }
    prefetch?: boolean
    replace?: boolean
    scroll?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link({ href, prefetch: _p, replace: _r, scroll: _s, ...props }, ref) {
    const url = typeof href === 'string' ? href : (href.pathname ?? '#')
    return <a ref={ref} href={url} {...props} />
})

export default Link
