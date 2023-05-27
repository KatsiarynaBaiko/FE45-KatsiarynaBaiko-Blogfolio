import React from 'react';

//step 3 Button
import Button, { ButtonTypes } from './components/Button';

// function App() {
//   return (
//     <div></div>
//   );
// }

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
