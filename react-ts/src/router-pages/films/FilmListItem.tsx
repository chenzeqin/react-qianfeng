import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { FilmItem } from '../type';

function FilmListItem(props: FilmItem & RouteComponentProps) {
  const { filmId, poster, name } = props;

  function handleClick(filmId: number) {
    console.log(props);
    props.history.push(`/maizuo/detail/${filmId}`);
  }
  return (
    <li onClick={() => handleClick(filmId)}>
      <img style={{ width: '100px' }} src={poster} alt="" />
      <span>{name}</span>
    </li>
  );
}

export default withRouter(FilmListItem);
