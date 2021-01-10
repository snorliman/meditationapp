import "./Carousel.scss";
import styled from "styled-components";


 const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  margin: 10px;
  width: 450px;
  img {
      height: 100%;
      width: 100%;
      object-fit: cover;
  }
`;
export default Item;