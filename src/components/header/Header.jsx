import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center px-2 pt-6 border-b-2 pb-2 max-w-7xl mx-auto'>
            <h1 className='text-4xl text-[#3b21d1cc] font-bold'>Dev Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;