import GitHub from '../icons/github';

export default function Footer() {
    return (
        <footer className="flex justify-end bottom-0 w-full p-8 pr-16 fixed">
            <a className='w-[3rem] h-[3rem]'><GitHub className="fill-black hover:fill-white"/></a>
        </footer>
    );
};