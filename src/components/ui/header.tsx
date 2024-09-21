import GitHub from '../icons/github';
import X from '../icons/x';

export default function Header() {
    return (
        <header className="flex justify-center top-0 w-full p-8 pr-16 fixed mx-2">
            <a href="https://x.com/metafam" className='w-[3rem] h-[3rem]'><X className="fill-[#60dcc1] hover:fill-white"/></a>
            <a href="https://github.com/MetaFam" className='w-[3rem] h-[3rem]'><GitHub className="fill-[#60dcc1] hover:fill-white"/></a>
        </header>
    );
};