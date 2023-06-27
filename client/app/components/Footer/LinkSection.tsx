import React from 'react'
import FooterLink from './FooterLink'
import { Typography, Box } from '@mui/material';

type Props = {
    title: string;
    links: Array<{title: string, href: string}>;
}

const LinkSection = ({title, links}: Props) => {
  return (
        <Box className="space-y-4">
        <Typography variant='h6' className='text-lg text-white'>{title}</Typography>
        <Box className="space-y-2">
            {links.map((link, index) => (
                <FooterLink                
                key={index} 
                title={link.title}
                href={link.href}
                />
            ))}
        </Box>
        </Box>
  )
}

export default LinkSection