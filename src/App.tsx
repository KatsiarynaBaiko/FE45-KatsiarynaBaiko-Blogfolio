import React from 'react';

//step 3 Button
import Button, { ButtonTypes } from './components/Button';

//step 3 Title
import Title from './components/Title';
//step 3 Tabs
import Tabs, { TabsTypes }from './components/Tabs';
//step 3 Tabslist
import Tabslist from './components/Tabslist';


// function App() {
//   return (
//     <div></div>
//   );
// }

const App = () => {
  return (
    <div>
      {/* //step 4 Title */}
      <Title title = 'Sing in (тут будет title)'/>

      {/* //step 4 Tabslist */}
      <Tabslist />
   


const App = () => {
  return (
    <div>

      {/* //step 4 Button */}
      {/* <Button type={ButtonTypes.Primary} title={'Primary'} onClick={()=> {}} disabled={true}/> или */}
      <Button disabled type={ButtonTypes.Primary} title={'Primary'} onClick={()=> {}}/> 
      <Button type={ButtonTypes.Secondary} title={'Secondary'} onClick={()=> {}}/>
      <Button type={ButtonTypes.Error} title={'Error'} onClick={()=> {}}/>
    </div>

    
  );
}

export default App;
