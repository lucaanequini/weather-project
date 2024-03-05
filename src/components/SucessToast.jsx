import React from "react";

const SuccessToast = (props) => {
    return (
        <div className={`text-white fixed bg-gray-500 top-4 p-4 rounded-md ${props.toastIsOpen ? '' : 'hidden'}`}>
            <div className="flex gap-5 justify-between items-center">
                <p>{props.text}</p>
                <button onClick={() => props.setToastIsOpen(false)} className="text-white hover:text-gray-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SuccessToast;
