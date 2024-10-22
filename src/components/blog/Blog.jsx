import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    console.log(blog);
    return (
        <div className='mb-16'>
            <img width={1200} className='rounded-xl' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-5 mt-5 mb-5'>
                <img width={50} height={20} src={author_img} alt="" />
                <div>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div className='flex gap-2'>
                <p>{reading_time} min read</p>
                <button><img width="30" height="20" src="https://img.icons8.com/ios/50/bookmark-ribbon--v1.png" alt="bookmark-ribbon--v1"/></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}
export default Blog;
