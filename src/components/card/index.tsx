import type { ReactNode } from 'react'
import {
  CardContent,
  CardHeader,
  CardMedia,
  Card as MuiCard,
  type CardProps as MuiCardProps,
  Typography
} from '@mui/material'

type CardVariant = 'elevation' | 'outlined'

export interface CardProps extends Omit<MuiCardProps, 'content'> {
  /**
   * The title of the card
   */
  title?: string
  /**
   * The subheader of the card
   */
  subheader?: string
  /**
   * The content of the card
   */
  content?: ReactNode
  /**
   * The URL of the image to display at the top of the card
   */
  image?: string
  /**
   * The alt text for the image
   */
  imageAlt?: string
  /**
   * The height of the image in pixels
   * @default 140
   */
  imageHeight?: number
  /**
   * The variant of the card
   * @default 'elevation'
   */
  variant?: CardVariant
}

/**
 * A customizable Card component built with Material-UI.
 * Supports title, subheader, content, and an optional image.
 */
const CommonCard = ({
  title,
  subheader,
  content,
  image,
  imageAlt = 'Card image',
  imageHeight = 140,
  variant = 'elevation',
  children,
  ...props
}: CardProps) => {
  return (
    <MuiCard variant={variant} {...props}>
      {image && <CardMedia component='img' height={imageHeight} image={image} alt={imageAlt} />}
      {(title || subheader) && (
        <CardHeader
          title={title}
          subheader={subheader}
          titleTypographyProps={{
            variant: 'h6',
            component: 'h2'
          }}
        />
      )}
      <CardContent>
        {content && (
          <Typography variant='body2' color='text.secondary'>
            {content}
          </Typography>
        )}
        {children}
      </CardContent>
    </MuiCard>
  )
}

export default CommonCard
