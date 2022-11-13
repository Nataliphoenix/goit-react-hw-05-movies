import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  SearchForm,
  Wrapper,
  Icon,
  SearchFormInput,
} from 'components/Searchbar/Searchbar.styled';

export function Searchbar({ onSubmit }) {
  const [seachMovie, setSeachMovie] = useState('');

  const handleSearchWord = e => {
    setSeachMovie(e.currentTarget.value.toLowerCase());
  };

  const handleSearchSubmit = e => {
    e.preventDefault();

    if (seachMovie.trim() === '') {
      toast.error(`Sorry, movie not found. Please try again.`);
      return;
    }
    onSubmit(seachMovie);
    setSeachMovie('');
  };

  return (
    <Wrapper>
      <SearchForm onSubmit={handleSearchSubmit}>
        <Icon />
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={seachMovie}
          onChange={handleSearchWord}
        />
      </SearchForm>
    </Wrapper>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
