import React from "react";

export default function CartProducts({ children } : { children: React.ReactNode}) {
    return (
        <ul className="flex flex-col gap-24">
            {children}
        </ul>
    )
}
