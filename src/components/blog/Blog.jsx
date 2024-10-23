import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog, handleAddToBookmark, handleReadingTime}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    // console.log(blog);
    return (
        <div className='mb-20'>
            <img width={1200} className='rounded-xl' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-5 mt-8 mb-8'>
                <img width={50} height={10} src={author_img} alt="" />
                <div>
                    <h3 className='text-2xl'>{author}</h3>
                    <p className='text-slate-500'>{posted_date}</p>
                </div>
                </div>
                <div className='flex gap-2 text-slate-500'>
                <p>{reading_time} min read</p>
                <button className='text-xl' onClick={() => handleAddToBookmark(blog)}><FaRegBookmark /></button>
                </div>
            </div>
            <div>
            <h2 className='text-4xl font-bold space-x-2'>{title}</h2>
            </div>
            <div className='mt-5'>
                {
                    hashtags.map((hash, idx) => <span className='mr-3 text-slate-500' key={idx}><a href="">{hash}</a></span>)
                }
            </div>
            <div className='mt-5'>
                <button onClick={() => handleReadingTime(reading_time)} className='text-[#2c189c] font-bold border-2 p-2 rounded-lg hover:bg-[#2c189c] hover:text-white'>Mark as read</button>
            </div>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired,
}
export default Blog;
