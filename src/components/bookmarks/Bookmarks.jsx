import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks }) => {
    console.log(bookmarks);
    return (
        <div className="md:1/3 max-h-fit mt-4  p-3 border-slate-300 md:min-w-[410px] rounded-lg bg-[#2c189c3b]">
            <h3 className="text-2xl font-bold p-5">Bookmarked Blogs: {bookmarks.length}</h3>
            <div className="md:w-[390px] mx-auto">
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
}

export default Bookmarks;