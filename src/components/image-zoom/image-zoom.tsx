import { ImgHTMLAttributes, memo, CSSProperties } from 'react'
import { Container } from './image-zoom.styled'

export type ImageZoomProps = ImgHTMLAttributes<HTMLImageElement> & {
  constainerStyle?: CSSProperties
}

function ImageZoom({ constainerStyle, ...rest }: ImageZoomProps) {
  return (
    <Container style={constainerStyle}>
      <ImageZoom {...rest} />
    </Container>
  )
}

export default memo(ImageZoom)
