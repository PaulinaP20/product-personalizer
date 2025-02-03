import styles from '../Product/Product.module.scss'
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import PropTypes from "prop-types";

const ProductForm = ({title,currentSize, currentColor,sizes,colors,setCurrentColor,setCurrentSize,price}) => {

    const handleSubmit = event => {
        event.preventDefault();

        console.log("===============")
        console.log("Added to cart");
        console.log(`Product: ${title}`);
        console.log(`Price: $ ${price}`);
        console.log(`Size: ${currentSize}`);
        console.log(`Color: ${currentColor}`);
      }

    return (
    <form onSubmit={handleSubmit}>
        <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
        <OptionColor colors={colors} currentColor ={currentColor}setCurrentColor={setCurrentColor} />
        <Button className={styles.button} type="submit">
        <span className="fa fa-shopping-cart" />
      </Button>

    </form>)
}

ProductForm.propTypes={
    title:PropTypes.string.isRequired,currentSize:PropTypes.string.isRequired,
    currentColor:PropTypes.string.isRequired,
    sizes:PropTypes.array.isRequired,colors:PropTypes.array.isRequired,setCurrentColor:PropTypes.func.isRequired,
    setCurrentSize:PropTypes.func.isRequired,
    price:PropTypes.number.isRequired,
}

export default ProductForm;