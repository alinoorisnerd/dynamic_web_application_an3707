// receive data as a prop here and map through them
import ImageItem from './ImageItem'

const ImageList = (props) => {
  const {images} = props
  console.log(images)

  const renderedImages = images.map((img) => (
    <ImageItem image={img} key={img.id} />
  ))

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {renderedImages}
    </div>
  )
}

export default ImageList
