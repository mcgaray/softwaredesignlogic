import React, { createContext, useState, useEffect} from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {

  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || [])
  const [items, setItems] = useState(cartFromLocalStorage);
  const [products, setProducts] = useState([]);
  const [ocassions, setOcassions] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  },[items])

  const fetchProduct = async () => {
    try {
      const res = await fetch(`/api/product/`);
      if (res.ok) {
        const json = await res.json();
        setProducts(json);
      } else {
        console.log('Something went wrong');
      }
    } catch (error) {
        console.error(error);
      }
  }

  const fetchCategories = async () => {
    try {
      const res = await fetch(`/api/category/`);
      if (res.ok) {
        const json = await res.json();
        setCategories(json);
      } else {
        console.log('Something went wrong');
      }
    } catch (error) {
        console.error(error);
      }
  }

  const fetchFlowers = async () => {
    try {
      const res = await fetch(`/api/flower/`);
      if (res.ok) {
        const json = await res.json();
        setFlowers(json);
      } else {
        console.log('Something went wrong');
      }
    } catch (error) {
        console.error(error);
      }
  }

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`/api/blog/`);
      if (res.ok) {
        const json = await res.json();
        setBlogs(json);
      } else {
        console.log('Something went wrong');
      }
    } catch (error) {
        console.error(error);
      }
  }

  const fetchOcassion = async () => {
    try {
      const res = await fetch(`/api/ocassion/`);
      if (res.ok) {
        const json = await res.json();
        setOcassions(json);
      } else {
        console.log('Something went wrong');
      }
    } catch (error) {
        console.error(error);
      }
  }

  useEffect(() => {
    fetchProduct()
    fetchFlowers()
    fetchOcassion()
    fetchCategories()
    fetchBlogs()
  }, [])

  const addToCart = (productId, title, flowerType, price, description, ocassion, category, imageUrl) => {
    const existingProductIndex = items.findIndex(item => item.productId === productId);
  
    if (existingProductIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingProductIndex].quantity += 1;
      setItems(updatedItems);
    } else {
      setItems((prevItems) => [
        ...prevItems,
        {
          productId,
          quantity: 1,
          title,
          flowerType,
          price,
          description,
          ocassion,
          category,
          imageUrl,
        },
      ]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedItems = items.filter(item => item.productId !== productId);
    setItems(updatedItems);
  };

  return (
    <DataContext.Provider value={{ items, products, flowers, ocassions, categories, blogs, addToCart, removeFromCart}}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
