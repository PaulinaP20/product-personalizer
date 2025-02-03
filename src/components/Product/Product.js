import styles from './Product.module.scss';
import PropTypes from "prop-types";
import {useState} from 'react';
import ProductImage from '../ProductImage/ProductImage'
import ProductForm from '../ProductForm/ProductForm';


const Product = ({name,title,basePrice, colors,sizes}) => {

  const [currentColor, setCurrentColor] =useState(colors[0])
  const [currentSize, setCurrentSize] =useState(sizes[0].name);

  const getPrice = () => {
    const selectedSize=sizes.find(size=>size.name===currentSize);
    return basePrice + (selectedSize ? selectedSize.additionalPrice : 0);
  }
  return (
    <article className={styles.product}>
      <ProductImage name ={name} title={title} currentColor ={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price:{getPrice()}$</span>
        </header>
        <ProductForm
          title={title}
          sizes={sizes}
          colors={colors}
          currentColor={currentColor}
          currentSize={currentSize}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          getPrice={getPrice}
          />
      </div>
    </article>
  )
};

Product.propTypes={
  name:PropTypes.string.isRequired,
  basePrice:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  sizes:PropTypes.arrayOf(PropTypes.shape({
    name:PropTypes.string.isRequired,
    additionalPrice:PropTypes.number.isRequired,
  })).isRequired,
  colors:PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Product;