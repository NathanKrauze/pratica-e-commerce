import Products from "./Products"
import { styled } from "styled-components"

export default function ProductsTable({produtos, adicionados, setAdicionados}){
    return(
        <ContainerLista>
            {produtos.map(produto => <Products produto={produto} adicionados={adicionados} setAdicionados={setAdicionados}/>)}
        </ContainerLista>
    )
}

const ContainerLista = styled.div`
  display: flex;
  flex-wrap: wrap;
`;