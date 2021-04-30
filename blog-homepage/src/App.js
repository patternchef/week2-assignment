import missedArticles from './missed-articles.json';
import yourArticles from './your-articles.json';
import Article from './Article';
import Article2 from './Article2';

function App() {
  return (
    <div>
      <h3>For you</h3>
      <hr />
      <div className="container">
        {missedArticles.map((a, index) => {
          return <Article key={index} article={a} />
        })}
      </div>
      <h3>In case you missed it</h3>
      <hr />
      <div className="container">
        {yourArticles.map((a, index) => {
          return <Article2 key={index} article={a} />
        })}
      </div>
    </div>


    
  );
}

export default App;
