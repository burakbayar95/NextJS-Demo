import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, TextField, Grid, Paper, Pagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const CustomPaper = styled(Paper)({
  padding: '20px',
  backgroundColor: '#fff',
  minHeight: '100vh',
  margin: '0 10vw',
});

const filterData = (query, data) => {
  if (!query) return data;
  return data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(query.toLowerCase())
    )
  );
};

const SearchBar = ({ setSearchQuery }) => (
  <form onSubmit={(e) => e.preventDefault()} style={{ marginBottom: '20px' }}>
    <TextField
      id="search-bar"
      onChange={(e) => setSearchQuery(e.target.value)}
      label="Search..."
      variant="outlined"
      size="small"
      fullWidth
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: 'blue' }} />
    </IconButton>
  </form>
);

SearchBar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default function App({ initialData }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;
  
  const dataFiltered = filterData(searchQuery, initialData);
  const count = Math.ceil(dataFiltered.length / PER_PAGE);
  const currentPageData = dataFiltered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <CustomPaper>
      <SearchBar setSearchQuery={setSearchQuery} />
      <Grid container spacing={2}>
        {currentPageData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={count}
        page={page}
        onChange={(_, value) => setPage(value)}
        variant="outlined"
        color="primary"
        shape="rounded"
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      />
    </CustomPaper>
  );
}

App.propTypes = {
  initialData: PropTypes.array.isRequired,
};

App.defaultProps = {
  initialData: [],
};