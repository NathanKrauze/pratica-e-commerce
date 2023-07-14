import CartProducts from "./CartProducts"
import { styled } from "styled-components"


export default function Cart({adicionados, setAdicionados}){

    function retiraCarrinho(adicionado){
        const newAdicionados = [...adicionados]
        newAdicionados.splice((adicionados.indexOf(adicionado)),1)
        setAdicionados(newAdicionados)
    }

    return(
        <ContainerCarrinho>
            {adicionados.map(adicionado => <CartProducts adicionados={adicionados} adicionado={adicionado} setAdicionados={setAdicionados} retiraCarrinho={retiraCarrinho}/>)}
        </ContainerCarrinho>
    )
}

const ContainerCarrinho = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 100vh;
  position: absolute;
  right: 0;
`;