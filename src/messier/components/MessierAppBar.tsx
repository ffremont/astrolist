import * as React from 'react'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import LogoImg from '../assets/logo.png'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { useMessierContext } from '../hooks/useMessierContext'

export const MessierAppBar = () => {
  const ctx = useMessierContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <img src={LogoImg} className="appbar-logo" alt="logo" />
          <Typography variant="h6" color="inherit" component="div">
            Liste d'observation
          </Typography>

          <Box sx={{ flexGrow: 1 }} justifyContent="end" display="flex">
            <IconButton
              onClick={() => {
                ctx.changeOpenFilter(true)
              }}
              className="filter-icon"
              aria-label="upload picture"
            >
              <FilterAltIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
