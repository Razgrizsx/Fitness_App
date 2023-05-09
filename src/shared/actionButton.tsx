import AnchorLink from "react-anchor-link-smooth-scroll"
import React from 'react'
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void

}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
    className="rounded-md bg-blue-600 px-10 py-2 hover:bg-blue-400 hover:text-white"
    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton