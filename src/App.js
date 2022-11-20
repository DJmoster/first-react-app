// https://www.os-templates.com/free-website-templates/rs-1200-prototype-35

import './App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import ArticlesGrid from './components/ArticlesGrid';
import BigArticleGrid from './components/BigArticlesGrid';
import Footer from './components/Footer';

function App () {
  return (
      <div className="App">
        <Header />
        <Slider />
        <ArticlesGrid />
        <BigArticleGrid />
        <Footer />
      </div>
  );
}

export default App;
