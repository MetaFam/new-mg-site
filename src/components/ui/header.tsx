import GitHub from '../icons/github';
import X from '../icons/x';

export default function Header() {
    return (
        <header className="flex justify-center top-0 w-full mr-2 fixed bg-opacity-30 bg-purple-800 z-10">
            <a href="https://x.com/metafam" className='w-[3rem] h-[3rem]'><X className="fill-[#60dcc1] hover:fill-white m-1"/></a>
            <a href="https://github.com/MetaFam" className='w-[3rem] h-[3rem]'><GitHub className="fill-[#60dcc1] hover:fill-white m-1"/></a>
        </header>
    );
};