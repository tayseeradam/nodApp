import Timer from "./components/Timer";

import Counter from "./components/Counter";



const App= () => {

  return (
<div className="flex flex-col justify-center items-center h-screen 
text-4xl text-center px-4 py-2  "><Timer/>
  <Counter/>
</div>
  );
};

export default App;

