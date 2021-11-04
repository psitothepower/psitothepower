import SEO from './SEO'
import Placeholder from './pages/Placeholder'

import './App.css'

function App() {
  return (
    <div className="App">
      <SEO
        url={process.env.PUBLIC_URL}
        title={process.env.REACT_APP_SEO_TITLE}
        thumbnail={process.env.REACT_APP_SEO_IMAGE}
        description={process.env.REACT_APP_SEO_DESCRIPTION}
        keywords={process.env.REACT_APP_SEO_KEYWORDS}
      />
      <Placeholder />
    </div>
  );
}

export default App;
