import styled from "styled-components";
import Lupe from "../../imgs/search-loupe.png";
import Car from "../../imgs/Group.png";
import { useContext } from "react";
import { Context } from "../../Context/Context";
const Heade = styled.header`
  height: 160px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 140px;
`;

const Logo = styled.div`
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  font-size: 40px;
  line-height: 60px;
  color: #5d5d6d;
`;

const Input = styled.input`
  width: 352px;
  height: 42px;
  left: 871px;
  top: 19px;
  font-weight: 400;
  font-size: 14px;
  line-height: 60px;
  color: #5d5d6d;
  border-radius: 8px;
  padding-left: 20px;
  outline: none;
  border: none;
  background-color: #f3f5f6;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IMG = styled.img`
  height: 30px;
  margin-left: -50px;
  cursor: pointer;
`;

const IMGCar = styled.img`
  height: 30px;
  padding-left: 30px;
  cursor: pointer;
`;

const Size = styled.div`
  height: 20px;
  width: 20px;
  background-color: #de3838;
  border-radius: 100%;
  position: relative;
  top: 15px;
  left: -15px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  font-family: Saira;
`;
export const Header = () => {
  const { size } = useContext(Context);
  return (
    <>
      <Heade>
        <Logo>Capputeeno</Logo>
        <Flex>
          <Input type="text" placeholder="Procurando por algo específico?" />
          <IMG src={Lupe} />
          <Flex>
            <IMGCar src={Car} />
            <Size>{size}</Size>
          </Flex>
        </Flex>
      </Heade>
    </>
  );
};
