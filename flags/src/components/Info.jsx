import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { filterByCode } from "../config";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  margin-top: 3rem;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;
const InfoImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const InfoTitle = styled.h2`
  margin: 0;
  font-weight: var(--fw-normal);
`;
const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  line-height: 1.8;
  & > b {
    font-weight: var(--fw-bold);
    padding: 0 1rem 0 0;
  }
`;
const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  & > b {
    font-weight: var(--fw-bold);
    padding: 0 1rem 0 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;
const TagGroup = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 1rem;
`;
const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-bg);
  box-shadow: var(--shadow);
  line-height: 1.6;
  cursor: pointer;
`;

const Info = (props) => {
  const {
    name,
    flag,
    currencies = [],
    nativeName,
    capital,
    population,
    region,
    topLevelDomain,
    subregion,
    languages = [],
    borders = [],
  } = props;

  const [neighbors, setNeighbors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (borders.length) {
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbors(data.map((c) => c.name)));
    }
  }, [borders]);

  return (
    <Wrapper>
      <InfoImg src={flag} alt={name} />
      <div>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native name:</b> {nativeName}
            </ListItem>
            <ListItem>
              <b>Population :</b> {population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Subregion:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain:</b>
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currencies:</b>
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Languages:</b>
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries: </b>
          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map((b) => (
                <Tag key={b} onClick={() => navigate(`/country/${b}`)}>
                  {b}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};

export default Info;
