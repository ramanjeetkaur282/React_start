import { useState } from 'react';
import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import {EXAMPLES} from './data.js';


function App() {
  const [selectedTopic,setSelectedTopic]=useState();
  function selecthandle(selectedButton){
       setSelectedTopic(selectedButton);
  }
  return (
    <div>
        <Header></Header>
        <main>
          <section id="core-concepts">
            <h2> Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map((conceptItem)=>  (<CoreConcepts key={conceptItem.title} {...conceptItem}
                />))}
              
            </ul>
          </section>
          <section id='examples'>
            <h2>Examples</h2>
            <menu>
             <TabButton isSelected={selectedTopic==='components'} onSelect={()=> {selecthandle('components')}}>Components</TabButton>
             <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=> {selecthandle('jsx')}}>JSX</TabButton>
             <TabButton isSelected={selectedTopic==='props'} onSelect={()=> {selecthandle('props')}}>Props</TabButton>
             <TabButton isSelected={selectedTopic==='state'} onSelect={()=> {selecthandle('state')}}>States</TabButton>
            </menu>
            {!selectedTopic ? <p>Please select a Topic.</p> : (
            <div id='tab-Content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>)}
            
           
          </section>
      </main>
    </div>
  );
}

export default App;
