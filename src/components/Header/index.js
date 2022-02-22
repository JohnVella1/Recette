import PropTypes from 'prop-types';
import './style.scss';

const Header = ({title, thumbnail, difficulty, author}) => (
    <header className="header">
        <img
        src={thumbnail}
        alt={title}
        className="header-image"
        />
        <div className="header-content">
            <h1 className="header-title">{title}</h1>
            <p className="header-infos">
                {author} - {difficulty}
            </p>
        </div>
    </header>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default Header;