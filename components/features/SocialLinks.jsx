import styled from "styled-components"
import Link from "next/link";
import { socialLinks } from '../../public/assets/page-content/links'
import { useState } from "react";

function SocialLinks() {
    return (
        <SocialLinksContainer className="flex-center">
            {socialLinks.map(link => (
                <Link key={link.link} href={link.link}><a>{link.icon}</a></Link>
            ))}
        </SocialLinksContainer>
    )
}

const SocialLinksContainer = styled.div`
   width: 100%;
   font-size: 2em;
   color: #fcfcfc;
   cursor: pointer;
   &:hover{
    color: #d3d3d3;
   }
   gap: 1em;
`;
export default SocialLinks