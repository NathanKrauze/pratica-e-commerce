import { styled } from "styled-components"


export default function Products({produto, adicionados, setAdicionados}){

    function adicionarCarrinho(produto){
        if(!adicionados.some(add => add.nome === produto.nome)){
            let novoAdicionado = [...adicionados, produto]
            setAdicionados(novoAdicionado)
        }
    }

    return(
        <ItemProduto>
            <img src={produto.imagem}/> 
            <div>
                <h1>{produto.nome}</h1> 
                <h1>{produto.preco}</h1>       
            </div> 
            <button onClick={()=>adicionarCarrinho(produto)}>comprar</button>  
        </ItemProduto>
    )
}

const ItemProduto = styled.div`
  border: 1px solid black;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;

  img {
    width: 200px;
    height: 200px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
  }
`;