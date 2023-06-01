import { useContext, useReducer, useEffect } from "react";
import { Context } from "../../Context/Context";
import { getValue } from "../../getValue/getValue";
import { Reducer } from "../../Reducers/Reducer";
import styled from "styled-components";

const MainPrincipal = styled.main`
  background-color: #dedede;
  justify-content: space-between;
`;

const NAV = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 130px;
  width: 100%;

  @media (max-width: 400px) {
    padding: 0;
  }
`;

const Ancora = styled.a`
  padding-left: 10px;
  text-decoration: none;
  font-family: Saira;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: Center;
  cursor: pointer;

  .selected {
    color: #41414d;
    border-bottom: 4px;
    border-bottom: 4px solid #ffa585;
  }

  @media (max-width: 400px) {
    font-size: 10px;

    .selected {
      white-space: nowrap;
    }
  }
`;

const UL = styled.ul`
  color: #41414d;
  border-bottom: 4px;
`;

const Selected = styled.select`
  border: none;
  color: #737380;
  font-family: Saira;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  padding-left: -30px;
  cursor: pointer;

  @media (max-width: 400px) {
    width: 130px;
    margin-right: 12px;
  }
`;

const Option = styled.option``;

const SQUADERS = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px 120px;
  gap: 10px;
`;

const SQUAD = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #737380;
  background-color: #e9e9f0;
  font-family: Saira;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  border-radius: 5px;
  cursor: pointer;
  #selected {
    color: red;
  }
`;

const DIV = styled.div`
  margin-top: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  padding: 0 120px;

  img {
    height: 100%;
    width: 100%;
    padding: 20px;
    cursor: pointer;
    border-radius: 10px;
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    padding: 0 40px;
    width: 100%;

    img {
      width: 100%;
    }
  }
`;

const DivData = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 400px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.p`
  font-family: Saira;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  padding: 0 30px;
`;

const Price = styled.p`
  font-family: Saira;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  padding: 0 30px;
  color: #09090a;
`;

export const Main = () => {
  const [state, dispatch] = useContext(Context);
  const { _ACTIONS, products } = state;
  const getApi = async () => {
    try {
      const data = await fetch("http://localhost:1337/api/product/");
      const dataJson = await data.json();

      dispatch({ type: _ACTIONS.SET_PRODUCTS, product: dataJson.data });

      console.log(state);
    } catch (e) {
      throw new Error(e);
    } finally {
      console.log("Terminei");
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <MainPrincipal>
        <NAV>
          <DIV style={{ display: "flex" }}>
            <Ancora href="">
              <UL className={"selected"}>TODOS OS PRODUTOS</UL>
            </Ancora>
            <Ancora>
              <UL
                onClick={() => {
                  console.log(state);
                  // dispatch({
                  //   ...state,
                  //   type: "t-Shirt",
                  //   product: product,
                  // });
                }}
              >
                CAMISETAS
              </UL>
            </Ancora>
            <Ancora>
              <UL className={``} onClick={() => {}}>
                CANECAS
              </UL>
            </Ancora>
          </DIV>
          <DIV>
            <Selected>
              <Option>Organizar por</Option>
              <Option>Novidades</Option>
              <Option>Preço: Maior - menor</Option>
              <Option>Preço: Menor - maior</Option>
              <Option>Mais vendidos</Option>
            </Selected>
          </DIV>
        </NAV>
        <SQUADERS>
          <SQUAD id="selected">1</SQUAD>
          <SQUAD>2</SQUAD>
          <SQUAD>3</SQUAD>
          <SQUAD>4</SQUAD>
          <SQUAD>5</SQUAD>
          <SQUAD> {"<"} </SQUAD>
          <SQUAD> {">"}</SQUAD>
        </SQUADERS>
        <Grid>
          {products &&
            products.map((element) => (
              <DivData key={element.id}>
                <img src={element.attributes.urlImg} />
                <Title>{element.attributes.name}</Title>
                <Price>R$ {getValue()}</Price>
              </DivData>
            ))}
        </Grid>
      </MainPrincipal>
    </>
  );
};
