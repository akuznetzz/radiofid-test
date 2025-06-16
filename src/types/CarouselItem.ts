export interface FormField {
  type: 'text' | 'textarea'
  label: string
  value: string
  rules?: ((v: string) => boolean | string)[]
  required?: boolean
  cols?: number
}

export interface ICarouselItem {
  type: 'text' | 'image' | 'form' | 'video'
  content: string
  alt?: string
  aspectRatio?: number
  poster?: string
  fields?: FormField[]
  valid?: boolean
}

export class CarouselItem implements ICarouselItem {
  type: 'text' | 'image' | 'form' | 'video'
  content: string
  alt?: string
  aspectRatio?: number
  poster?: string
  fields?: FormField[]
  valid?: boolean

  constructor(options: ICarouselItem) {
    this.type = options.type
    this.content = options.content
    this.alt = options.alt
    this.aspectRatio = options.aspectRatio
    this.poster = options.poster
    this.fields = options.fields
    this.valid = options.valid
  }

  static createText(content: string): CarouselItem {
    return new CarouselItem({
      type: 'text',
      content
    })
  }

  static createImage(content: string, alt?: string, aspectRatio?: number): CarouselItem {
    return new CarouselItem({
      type: 'image',
      content,
      alt,
      aspectRatio
    })
  }

  static createForm(fields: FormField[]): CarouselItem {
    return new CarouselItem({
      type: 'form',
      content: '',
      fields
    })
  }

  static createVideo(content: string, poster?: string): CarouselItem {
    return new CarouselItem({
      type: 'video',
      content,
      poster
    })
  }
} 