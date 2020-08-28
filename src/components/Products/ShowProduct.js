import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import '../Products/showproduct.css';
import Pagination from '../Pagination/pagination';
import { Row, Col, Cascader, Option } from 'antd';
import { Link } from 'react-router-dom'
import Posts from '../Pagination/post';


function ShowProducts() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const [products, setProducts] = useState([]);
  const [newSpellName, setNewSpellName] = useState();
  // Pagination
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("Products").get();
      setProducts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  // Get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const handleSearchChange = event => {
  //   setSearchTerm(event.target.value)
  //   console.log(event.target.value, 'event.target.value');
  //   handleSearchProducts()
  // }

  const handleSearchChange = event => {
    setSearchTerm(event.target.value)
  }



  // const handleSearchProducts = () => {
  //   const products = [...products];
  //   console.log(products);
  //   const regex = new RegExp(searchTerm, '');
  //   const searchResults = products.reduce((acc, product) => {
  //     if (
  //       (product.name && product.type && product.size.match(regex)) ||
  //       product.color.match(regex)
  //     ) {
  //       acc.push(product);
  //     }
  //     return acc;
  //   }, []);
  //   setSearchResults(searchResults)
  // };

  const renderProduct = (product, index) => {
    return (

      <Col key={index} className="products" span={4}>
        <div className="animation-2">

          <a><h2>yêu thích</h2></a>
        </div>
        <div className="animation-3">
          <a><h3 className="price">40%</h3></a>
          <a><h2>GIẢM</h2></a>
        </div>
        <img src={product.image} alt="ảnh" />
        <p>Name product: {product.name}</p>
        <p>Size: {product.size}</p>
        <p>Type: {product.type}</p>
        <p>Color: {product.color}</p>
        <p className="price"> đ.{product.price}</p>
        <div className="animation-1">
          <a><h2>Tìm sản phẩn tư                                                                        ơng tự</h2></a>
        </div>
      </Col>
    );
  };

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
      product.size.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
      product.type.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
      product.color.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });

  return (
    <div className="container-product">
      <Row>
        <Col span={18}><input className='searchInput' onChange={handleSearchChange} placeholder='Nhập để tìm kiếm' /></Col>
        <Col span={6}>
          <Cascader placeholder="Sắp xếp theo giá tiền" />

        </Col>
      </Row>


      {/* {searchTerm
        ? displayProducts(searchResults)
        : displayProducts(products)} */}
      <Row>
        {filteredProducts.map((product, index) => {
          return renderProduct(product, index);
        })}
      </Row>
      <div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate} />
      </div>
    </div>
  );

}

export default ShowProducts;