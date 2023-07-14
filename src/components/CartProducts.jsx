import { styled } from "styled-components"


export default function CartProducts({adicionados, adicionado, setAdicionado, retiraCarrinho}){

    return(
        <ItemCarrinho>
            <img src={adicionado.imagem}/>
            <div>
                <strong>{adicionado.nome}</strong>
                <h1>{adicionado.preco}</h1>
            </div>
            <button onClick={()=>retiraCarrinho(adicionado)}>x</button>
        </ItemCarrinho>
    )
}

const ItemCarrinho = styled.div`
  border: 1px solid black;
  display: flex;
  margin: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  strong {
    margin-bottom: 5px;
  }
`;