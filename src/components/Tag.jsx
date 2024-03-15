import React from 'react';

function Tag(props) {
    const { children } = props;

    return (
        <a href="/" className="border-zinc-900 border-[2px] text-[0.8vw] rounded-full w-[7vw] flex items-center justify-center px-[1vw] py-[0.3vw] transition-colors duration-1000  hover:bg-zinc-900 hover:text-zinc-100">
            {children}
        </a>
    );
}

export default Tag;
