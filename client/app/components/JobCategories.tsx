import { Container, Grid } from '@mui/material'
import React from 'react'
import SectionTitles from './SectionTitles'
import CategoryIcon from './CategoryIcon'
import TechIcon from './svgs/TechIcon'
import ITIcon from './svgs/ITIcon'
import GVIcon from './svgs/GVIcon'
import ACCIcon from './svgs/ACCIcon'
import ConsIcon from './svgs/ConsIcon'
import CommIcon from './svgs/CommIcon'
import DesignIcon from './svgs/DesignIcon'
import HumanIcon from './svgs/HumanIcon'

const JobCategories = () => {
  return (
   <Container className='my-10'>
    <SectionTitles 
    title='Browse Jobs Categories'
    except='Post a job to tell us your project. We&apos;ll match you with the right freelancers for it'
    />
    <Grid container spacing={2}>
      <CategoryIcon icon={<ITIcon />} title='IT & Software' except='1250' />
      <CategoryIcon icon={<TechIcon />} title='Technology' except='1250' />
      <CategoryIcon icon={<GVIcon />} title='Government' except='1250' />
      <CategoryIcon icon={<ACCIcon />} title='Accounting / Finance' except='1250' />
      <CategoryIcon icon={<ConsIcon />} title='Construction / Facilities' except='1250' />
      <CategoryIcon icon={<CommIcon />} title='Tele-Communications' except='1250' />
      <CategoryIcon icon={<DesignIcon />} title='Design & Multimedia' except='1250' />
      <CategoryIcon icon={<HumanIcon />} title='Human Resources' except='1250' />
    </Grid>
   </Container>
  )
}

export default JobCategories