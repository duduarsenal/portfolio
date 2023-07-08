import styled from "styled-components";

const Item = styled.div`
  transition: transform 200ms ease;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 10px;
  margin: 5px;
  border: 1px solid
    ${({ active }) => (active ? "rgba(0,0,0,.2)" : "rgba(0,0,0,.02)")};
  color: #fff;
  background-color: rgba(32, 32, 32, 0.7);
  border-radius: 10px;
  transition: scale 0.2s;
  &:hover {
    cursor: pointer;
    background-color: rgba(32, 32, 32, 0.9);
    scale: 1.02;
  }`
;

export default Item;