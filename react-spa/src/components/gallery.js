import './../styles/gallery.css';
import images from './../assets/images';

const clickHandler = (image, description) => {
    alert(`image number ${image} was clicked, ${description}`)
}

const Gallery = () => {
    return (
        <div id="gallery-container">
            {images.map((image, index) => (
                <div key={index} class="gallery-photos">
                    <img src={image} alt="xmass" id="xmass"
                        onClick={() => clickHandler(index, 'lorem ipsum')} />
                </div>
            ))}
        </div>
    )
}

export default Gallery;