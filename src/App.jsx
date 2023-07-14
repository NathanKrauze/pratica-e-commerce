import { useState } from 'react'
import ProductsTable from './components/ProductsTable'
import Cart from './components/Cart'
import { styled } from 'styled-components';
import PRODUTOS from './constants/produtos';

export default function App() {

  const [ adicionados, setAdicionados] = useState([])

  return (
    <ContainerApp>
      <ProductsTable produtos={PRODUTOS} adicionados={adicionados} setAdicionados={setAdicionados} />
      <Cart adicionados={adicionados} setAdicionados={setAdicionados}/>
    </ContainerApp>
  )
}

const ContainerApp = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-right: 400px;
`;