import './App.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatsFetch } from './store/catSlice';
import './App.css';
function App() {
  const dispatch = useDispatch();

  const cats = useSelector(state => state.cat.cats);

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  console.log(cats);

  return (
    <div className="App">
      <h1>Cat Species Gallery</h1>
      <p>
        Images of different species of cats. Lots of cats for your viewing
        pleasure
      </p>
      <hr />
      <div className="Gallery">
        {cats.map(cat => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              {/* <img src={cat.} alt={cat.name} width="200" height="200" /> */}
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>Temperament : {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
