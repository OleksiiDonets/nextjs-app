import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

export const Slider= ({imageArr}:{imageArr: string[] | any[]}) => {
  const images = imageArr.map((item:string) =>({original: item}))
  return (
    <ImageGallery items={images}/>
  )
}