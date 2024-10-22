import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center px-2 pt-6 border-b-2 pb-2 w-11/12 mx-auto'>
            <h1 className='text-4xl font-bold'>Dev Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;