import React from 'react';
import { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import Details from '../Details/Details'

import useStyles from './styles';

const List = () => {

  const classes = useStyles();
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  const places = [
    {name: 'Cool Place'},
    {name: 'Best Beer'},
    {name: 'Best Steak'},
    {name: 'Cool Place'},
    {name: 'Best Beer'},
    {name: 'Best Steak'},
    {name: 'Cool Place'},
    {name: 'Best Beer'},
    {name: 'Best Steak'},
  ]

  return (
    <div className={classes.container}>
      <Typography variant="h4">Restaurants, Hotels & Attractions</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(event) => {setType(event.target.value)}}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(event) => {setRating(event.target.value)}}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>3.0 & Above</MenuItem>
          <MenuItem value={4}>4.0 & Above</MenuItem>
          <MenuItem value={4.5}>4.5 & Above</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, index) =>
          <Grid item key={index} xs={12}>
            <Details place={place} />
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default List
