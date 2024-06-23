// -------- css files ------------
import "./components/card/product-card.css";
import "./components/footer/footer.css"

// -------- components ------------ 
import ProductCard from './components/card/product-card';
import Footer from './components/footer/footer';

// -------- images ----------
import star from "/svg/star.svg";
import headPhone from "/svg/headphone.svg";
import book from "/svg/book.svg";

import img1 from "/images/1984.png";
import img2 from "/images/rich-dad.png";
import img3 from "/images/code-8.png";
import img4 from "/images/daniel-qiz.png";
import img5 from "/images/mark-mar-son.png";
import img6 from "/images/ego-enemy.png";
import img7 from "/images/ro-kit.png";
import img8 from "/images/nick-lake.png";
import img9 from "/images/mark-goldman.png";
// ---------------------------------------------------------------

function App() {
  return(
    <>
    <main>
      <div className="container">
        <h1 id="book-type">Янги қўшилганлар</h1>
        <div id="new-adds">
          <ProductCard img={img1} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={star} rating={"4.7"} phone={headPhone} book={book}/>
          <ProductCard img={img2} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={star} rating={"4.7"} phone={headPhone} book={book}/>
          <ProductCard img={img3} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={star} rating={"4.7"} phone={headPhone} book={book}/>
          <ProductCard img={img4} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={star} rating={"4.7"} phone={headPhone} book={book}/>
          <ProductCard img={img5} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={star} rating={"4.7"} phone={headPhone} book={book}/>
        </div>

        <h1 id="book-type">Аудио китоблар</h1>
        <div id="audio-books">
          <ProductCard img={img6} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={star} rating={"4.7"} phone={headPhone} book={book} hidden={true}/>
          <ProductCard img={img7} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={star} rating={"4.7"} phone={headPhone} book={book} hidden={true}/>
          <ProductCard img={img5} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={star} rating={"4.7"} phone={headPhone} book={book} hidden={true}/>
          <ProductCard img={img8} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={star} rating={"4.7"} phone={headPhone} book={book} hidden={true}/>
          <ProductCard img={img9} name={"code-8"} info={"SIYOSAT, FANTASTIKA"} star={star} rating={"4.7"} phone={headPhone} book={book} hidden={true}/>
        </div>
      </div>
    </main>

    <Footer/>
    </>
  )
}

export default App