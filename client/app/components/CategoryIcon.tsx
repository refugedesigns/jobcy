import React from 'react'
import { Box, Typography } from "@mui/material"
import { motion } from 'framer-motion'

type Props = {
    icon: React.ReactNode;
    title: string;
    except: string
}

const CategoryIcons = (props: Props) => {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{duration: 0.5, ease: "easeOut"}} className="mx-auto flex flex-col items-center py-10 space-y-2 cursor-pointer">
      <Box className="w-[64px] h-[64px] bg-[rgba(118,109,244,.1)] flex justify-center items-center rounded-lg">
        {props.icon}
      </Box>
      <Typography variant='body2' className='font-bold text-lg text-slate-700'>{props.title}</Typography>
      <Typography variant='body2' className="text-slate-400">{props.except} jobs</Typography>
    </motion.div>
  );
}

export default CategoryIcons