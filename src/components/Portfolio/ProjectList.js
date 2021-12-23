import PropTypes from 'prop-types'
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => (
    <div className="cards-container">
        {projects ? projects.map((v, key) => (
            <ProjectCard key={`pr_${key}`} {...v} />
        )
        ) : (
            <p>Список пуст</p>
        )}
    </div>
);


ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        img: PropTypes.string,
        category: PropTypes.string.isRequired
    }))
};

ProjectList.defaultProps = {
    projects: null
};



export default ProjectList;