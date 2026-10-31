// an individual image with a div wrapped around for styling purposes
// receives an individual image as props
const ImageItem = (props) => {
  const {image} = props
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="w-full h-64 object-cover rounded"
      />
      <p className="mt-1 text-sm text-gray-600">
        Photo by{' '}
        <a
          href={image.user.links.html}
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-gray-900"
        >
          {image.user.name}
        </a>
      </p>
    </div>
  )
}

export default ImageItem
