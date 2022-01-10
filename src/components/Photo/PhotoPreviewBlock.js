import PropTypes from 'prop-types'

import DelIcon from '../public/DelIcon';
import EditIcon from '../public/EditIcon'
import PhotoPreview from './PhotoPreview';

const PhotoPreviewBlock = ({ items, handleDel }) => {

    return (
        <div className="photo-preview-container">
            {items.map((v) => <PhotoPreview key={v.id} photo={v} handleDel={handleDel} />)}
        </div>
    )
};


PhotoPreviewBlock.propTypes = {
    items: PropTypes.array,        
    handleDel: PropTypes.func
};

PhotoPreviewBlock.defaultProps = {
    items: [],
    handleDel: null
};


export default PhotoPreviewBlock;