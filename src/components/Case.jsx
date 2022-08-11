import React from "react";

export default function Case({ children }) {
    return (
        <div className="grid grid-cols-12">
            <section className="col-span-10 col-start-2">{children}</section>
        </div>
    );
}
