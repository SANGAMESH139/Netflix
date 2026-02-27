import React, { useState, useEffect } from "react";

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div
            className={`fixed top-0 p-5 w-full h-[60px] z-10 transition-all duration-500 ease-in ${show ? "bg-black" : "bg-transparent"
                }`}
        >
            <div className="flex justify-between items-center w-full">
                <img
                    className="fixed left-5 w-[80px] object-contain cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt="Netflix Logo"
                />

                <img
                    className="fixed right-5 w-[30px] cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="Netflix Avatar"
                />
            </div>
        </div>
    );
}

export default Nav;
