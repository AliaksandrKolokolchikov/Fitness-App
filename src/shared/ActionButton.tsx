import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import {SelectedPage} from "@/shared/types.ts";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

export const ActionButton = ({ children, setSelectedPage }:Props) => {
    return (
        <AnchorLink>
            {children}
        </AnchorLink>
    );
};
