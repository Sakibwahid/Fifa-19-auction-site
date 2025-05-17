import React from "react";

export function Stars({ count }) {
    return (
        <div>
            {[...Array(count)].map((_, index) => (
                <span key={index}>⭐</span>
            ))}
        </div>
    );
}
