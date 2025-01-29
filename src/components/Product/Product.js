import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from "prop-types";
import {useState} from 'react';


const Product = ({name,title,basePrice, colors,sizes}) => {

  const [currentColor, setCurrentColor] =useState(colors[0])
  const [currentSize, setCurrentSize] =useState(sizes[0].name);

  const prepareColorClassName=color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = () => {
    const selectedSize=sizes.find(size=>size.name===currentSize);
    return basePrice + (selectedSize ? selectedSize.additionalPrice : 0);
  }

  const handleSubmit = event => {
    event.preventDefault();

    console.log("===============")
    console.log("Added to cart");
    console.log(`Product: ${title}`);
    console.log(`Price: ${getPrice()}`);
    console.log(`Size: ${currentSize}`);
    console.log(`Color: ${currentColor}`);
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={`${title}-${currentColor}`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price:{getPrice()}$</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size=> (
                <li key={size.name}>
                  <button type="button" className={clsx({[styles.active]: size.name===currentSize})}
                  onClick ={()=> setCurrentSize(size.name)}>{size.name}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => (
                <li key={color}>
                  <button type="button" className={clsx(prepareColorClassName(color), {[styles.active]: color === currentColor})}
                  onClick={()=>setCurrentColor(color)}>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button} type="submit">
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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