import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';

import './styles.css'

const App = () => {
  return (
    <Tabs>
      <Tab label={'Tab 1'}>
        <p>Content 1</p>
      </Tab>

      <Tab label={'Tab 2'}>
        <ul>
          <li>List</li>
          <li>Content</li>
          <li>2</li>
        </ul>
      </Tab>

      <Tab label={'Tab 3'}>
        <figure>
          <img src={'http://placehold.it/200'} alt={'Image Content 3'} />
          <figcaption>Image Content 3</figcaption>
        </figure>
      </Tab>
    </Tabs>
  );
}

export default App;
