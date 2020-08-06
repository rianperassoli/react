import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';
import { Tab as TabReactTabs, Tabs as TabsReactTabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import './styles.css'

const App = () => {
  return (
    <>
      <TabsReactTabs>
        <TabList>
          <TabReactTabs>Title 1</TabReactTabs>
          <TabReactTabs>Title 2</TabReactTabs>
          <TabReactTabs>Title 3</TabReactTabs>
          <TabReactTabs>Title 4</TabReactTabs>
        </TabList>

        <TabPanel>
          <p>Content 1</p>
        </TabPanel>
        <TabPanel>
          <ul>
            <li>List</li>
            <li>Content</li>
            <li>2</li>
          </ul>
        </TabPanel>
        <TabPanel>
          <figure>
            <img src={'http://placehold.it/200'} alt={'Image Content 3'} />
            <figcaption>Image Content 3</figcaption>
          </figure>
        </TabPanel>
      </TabsReactTabs>

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
    </>
  );
}

export default App;
