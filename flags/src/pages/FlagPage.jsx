import styled from "styled-components";
import { useParams, link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../config";
import Info from "../components/Info";

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radii);
  border: none;

  color: var(--colors-text);
  cursor: pointer;
`;

const FlagPage = () => {
  const navigate = useNavigate();
  let { name } = useParams();
  const [country, setCountry] = useState(null);

  console.log(`country: `, country);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info {...country} />}
    </div>
  );
};

export default FlagPage;
