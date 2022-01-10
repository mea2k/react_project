import PropTypes from 'prop-types'

const PhotoPreview = ({ photo, handleDel }) => {

    return (
        <div className="photo-thumbnail">
            <span className="photo-close-image-icon"
                aria-hidden="true"
                onClick={(e) => handleDel(photo.id)}>
                &times;
            </span>
            <img src={photo.url} title={photo.name} />
        </div>
    )
};


PhotoPreview.propTypes = {
    photo: PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string
    }),
    handleDel: PropTypes.func
};

PhotoPreview.defaultProps = {
    handleDel: null
};


export default PhotoPreview;