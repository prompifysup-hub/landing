/* Image used by the sections (Tailark wrote them for Next.js): renders a plain <img>. */
import * as React from 'react'

type ImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
    src: string | { src: string }
    fill?: boolean
    priority?: boolean
    quality?: number
    placeholder?: string
    blurDataURL?: string
    unoptimized?: boolean
}

export default function Image({ src, fill, priority, quality: _q, placeholder: _ph, blurDataURL: _b, unoptimized: _u, style, ...props }: ImageProps) {
    const url = typeof src === 'string' ? src : src.src
    const fillStyle: React.CSSProperties = fill ? { position: 'absolute', inset: 0, width: '100%', height: '100%' } : {}
    return <img src={url} loading={priority ? 'eager' : 'lazy'} decoding="async" style={{ ...fillStyle, ...style }} {...props} />
}
