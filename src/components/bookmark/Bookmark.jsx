import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="py-5 px-3 mt-3 bg-white rounded-lg">
            <h3 className="text-lg font-bold">{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.array.isRequired,
}

export default Bookmark;
