import PropTypes from "prop-types";

const Reading = ({readingTime}) => {
    return (
        <div className="mt-16 border-2 border-[#6047ecbd] rounded-lg bg-gray-100 p-4">
            <h3 className="text-[#5e43f5fb] text-2xl font-bold">Spent time on read: {readingTime} minuets</h3>
        </div>
    );
};

Reading.propTypes = {
    readingTime: PropTypes.string,
}

export default Reading;