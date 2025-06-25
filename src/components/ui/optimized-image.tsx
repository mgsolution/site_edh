import { useState } from 'react'

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}

export function OptimizedImage({ src, alt, ...props }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setIsLoading(false)}
      style={{
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out'
      }}
      {...props}
    />
  )
}