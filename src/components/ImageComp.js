// React
import { useEffect, useState } from "react"

// Next.js
import Image from "next/image"

// Funções
import { imageLoader } from "../functions/image"

const ImageComp = ({
  id,
  src,
  alt,
  width,
  category,
  height,
  classes,
  className,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      setLoaded(true)
    }
  }, [loaded])

  return (
    <div id={id}>
      <Image
        loader={() => imageLoader(src, width !== undefined ? width : 0)}
        src={src}
        alt={alt}
        width={width !== undefined ? width : 0}
        height={height !== undefined ? height : 0}
        className={`relative ${
          className !== undefined ? ` ${className}` : ``
        }${width === undefined ? ` w-max` : ``}${
          height === undefined ? ` h-max` : ``
        }`}
        {...props}
      />
    </div>
  )
}

export default ImageComp
