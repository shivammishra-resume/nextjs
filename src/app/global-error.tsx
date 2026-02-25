"use client";  // Error boundaries must be client components

// import "./globals.css";

export default function GlobalError() {
    return (
        <div className="">
            <h2 className="">Something went wrong!</h2>
            <button
            onClick={() => {
                window.location.reload();
            }}
            className=""
            >
                Refresh
            </button>
        </div>
    );
}