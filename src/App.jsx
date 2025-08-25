import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import SidebarBag from './components/SidebarBag';


export default function App() {
  const [produtos, atualizarProdutos] = useState([]);
  const [showSidebarBag, setShowSidebarBag] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [bagTotal, setBagTotal] = useState(0);

  const addToBagTotal = (value) => setBagTotal(bagTotal + value);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => atualizarProdutos(data.products)); //products é o nome da propriedade do json que tem os dados
  }, []);

  const addProductToBag = (id) => {
    const productToAdd = produtos.find(product => product.id === id);
    if (selectedProducts.includes(productToAdd)) return;
    setSelectedProducts(selectedProducts.concat(productToAdd));
    setBagTotal(bagTotal + productToAdd.price);
  };


  const removeProductFromBag = (id) => {
    const newSelectedProducts = selectedProducts.filter(
        (product) => product.id !== id
    );
    setSelectedProducts(newSelectedProducts);
  }

  return (
    <div>
      <Router>
        <div className="App">
          <Navbar
            selectedProducts={selectedProducts}
            setShowSidebarBag={setShowSidebarBag}
          />
          <SidebarBag
              addToBagTotal={addToBagTotal}
              removeProductFromBag={removeProductFromBag}
              bagTotal={bagTotal}
              selectedProducts={selectedProducts}
              setShowSidebarBag={setShowSidebarBag}
              showSidebarBag={showSidebarBag}
          />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    addToBagTotal={addToBagTotal}
                    removeProductFromBag={removeProductFromBag}
                    selectedProducts={selectedProducts}
                    addProductToBag={addProductToBag}
                    produtos={produtos}
                    setShowSidebarBag={setShowSidebarBag}
                    showSidebarBag={showSidebarBag}
                    bagTotal={bagTotal}
                    
                  />
                }
              />
              <Route
                path="/products"
                element={<ProductsPage
                  addProductToBag={addProductToBag}
                  produtos={produtos}
                />}
              />              
              <Route path="/bag/checkout" element={
                <div>
                  <h4>Página de Checkout</h4>
                  <p>Total: {bagTotal}</p>
                </div>
              } />

            </Routes>
              
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}
