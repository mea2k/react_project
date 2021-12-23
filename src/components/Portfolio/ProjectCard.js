import PropTypes from 'prop-types'

const ProjectCard = ({ name, img, category }) => (
    <div className="card">
        <div className="card-image">
            <img src={img} alt={name} />
        </div>
        <div className="card-content">
            <span className="card-title">
                {category}
            </span>
        </div>
    </div>
);



     
















ProjectCard.propTypes = {
    name: PropTypes.string,                 // название проекта,
    img: PropTypes.string,                  // URL к картинке проекта,
    category: PropTypes.string.isRequired,  // категория проекта
};

ProjectCard.defaultProps = {
    name: '',
    img: '/public/img/no-project.jpg',
    category: null
};



export default ProjectCard;