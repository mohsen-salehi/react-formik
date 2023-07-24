import React from 'react';

function Layout({children}) {
    return (
        <main
            className="container mx-auto h-screen justify-center items-center border overflow-hidden overflow-y-scroll 2xl:max-w-7xl flex text-white flex-wrap">
            <h1 className="w-full text-center text-2xl lg:text-5xl font-extrabold">SignUp Form</h1>
            {children}
        </main>
    );
}

export default Layout;