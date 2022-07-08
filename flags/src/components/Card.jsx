import styled from "styled-components";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  boder-radius: var(--radii);
  cursor: pointer;
  box-shadow: var(--shadow);
  overflow: hidden;
`;

const CardImage = styled.img`
  display: flex;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 150px;
  box-shadow: var(--shadow);
`;
const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;
const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fa-md);
  font-weight: var(--fw-bold);
`;
const CardList = styled.ul`
  margin: 0;
  padding: 1rem 0 0;
  list-style: none;
`;
const CardListItem = styled.li`
  font-size: var(--fa-sm);
  line-height: 1.5;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Card = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

export default Card;
