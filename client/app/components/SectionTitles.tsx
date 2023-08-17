import React from 'react'
import { Box, Typography } from '@mui/material'

type Props = {
    title: string
    except: string
}

const SectionTitles = ({title, except}: Props) => {
  return (
    <Box className="">
        <Typography variant="h2" className="text-3xl text-center text-black max-w-md mx-auto font-bold md:max-w-lg lg:max-w-2xl">
            {title}
        </Typography>
        <Typography variant="body2" className="py-4 text-center mx-auto w-full text-black md:text-md">
            {except}
        </Typography>
    </Box>
  )
}

export default SectionTitles