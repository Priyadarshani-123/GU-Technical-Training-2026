import { useState } from 'react'
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

async function bubbleSort(arr, setArray) {
  let n = arr.length;
  let swapped;
  for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              swapped = true;
          }
          setArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, 1000));
      }
      if (!swapped) break;
  }
  return arr;
}

const Bubble = () => {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(5)
  const [element, setelement] = useState("")

  const handleSort = async () => {
    let arr = array.map(Number);
    await bubbleSort(arr, setArray);
};

  const handleGenerateArray = () => {
    const newArray = element.split(',').map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num));
    console.log(newArray,newArray.length)
    if (newArray.length == size) {
      setArray(newArray);
    } else {
      console.log(newArray)
      alert(`Please enter exactly ${size} numbers.`);
    }
  };

  return (
    <>
      <div className="main">
        <h1>Bubble Sort</h1>
        <div className='size'>
          <div className='arr_size'>
            <h2>Enter the Size of Array</h2>
            <input type="number" id="size_arr" name="size" value={size}placeholder='Size of Array' onChange={((e) => {
              setSize(e.target.value)
            })} />
          </div>
          <div className='elements'>
            <h2>Enter Array Elements</h2>
            <input id="size_arr" name="size" placeholder='Size of Array' value={element} onChange={((e) => {
              setelement(e.target.value)
            })} />
          </div>
        </div>
        <div className='btn'>
          <input type="button" value="Set Array" className='submit' onClick={handleGenerateArray} />
          <input type="button" value="Sort" className='submit' onClick={handleSort} />
        </div>

        <div id = "chart" style={{ display: 'flex', alignItems: 'flex-end', height: '300px', gap: '10px', marginTop: '20px' }}>
                {array.map((value, index) => (
                    <div key={index} id="inner" >
                      <div style={{ width: '45px', height: `${value * 3}px`, backgroundColor: 'blue', textAlign: 'center', color: 'white', transition: 'height 0.5s ease-in-out' }}>
                      </div>
                        {value}
                    </div>
                ))}
            </div>
      </div>
    </>
  )
}

export default Bubble