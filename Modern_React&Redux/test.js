// import "./styles.css";
// import React, { useState } from "react";
// import Field from './components/field';
// import Languages from './components/languages';
// import Translate from './components/translate';

// export default function App() {
//   const [language, setLanguage] = useState('ru');
//   const [text, setText] = useState('');

//   return (
//     <div>
//       <Field label ="Enter English" onChange={setText} value={text} />
//       <Languages language={language} onLanguageChange={setLanguage} />
//       <hr />
//       <Translate text={text} language={language} />
//     </div>
//   );
// }
// //

import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));


