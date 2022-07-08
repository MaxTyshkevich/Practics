import styled from "styled-components";
import Select from "react-select";

const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: "var(--colors-ui-base)",
      borderRadius: "var(--radii)",
      boxShadow: "var(--shadow)",
      border: "none",
      padding: "0.25rem",
      height: "50px",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",

      backgroundColor: state.isSelected
        ? "var(--colors-ui-base)"
        : "var(--colors-bg)",
    }),
  },
})`
  width: 250px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & * {
    color: var(--colors-text) !important;
  }

  & > div[id] {
    background-color: transparent;
  }
`;

export default CustomSelect;
