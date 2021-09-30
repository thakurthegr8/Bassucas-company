import React from 'react';
import { routes } from './navApi';
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="fixed left-0 right-0 top-0 bg-white shadow">
            <div className="mx-auto container flex justify-between items-center py-4 px-2">
                <div className="flex justify-center items-center font-semibold">
                    <h1 className="text-xl sm:text-2xl ">{`Bassucas Company`}</h1>
                </div>
                <nav className="justify-center space-x-8 hidden md:flex-row">
                    {
                        routes.map(route => <Link href={route.url} key={Math.random()}><span className="cursor-pointer transition font-medium text-sm hover:border-b-2 border-black py-3 px-4">{route.page}</span></Link>)
                    }
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
