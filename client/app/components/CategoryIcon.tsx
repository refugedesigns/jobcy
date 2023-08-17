import React from 'react'
import { Box, Typography } from "@mui/material"

type Props = {
    icon: React.ReactNode;
    title: string;
    except: string
}

const CategoryIcons = (props: Props) => {
  return (
    <Box>
      <Box className="w-[64px] h-[64px] bg-[rgba(118,109,244,.1)] flex justify-center items-center rounded-lg">
        {props.icon}
      </Box>
      <Typography>{props.title}</Typography>
      <Typography>{props.except} jobs</Typography>
    </Box>
  );
}

export default CategoryIcons