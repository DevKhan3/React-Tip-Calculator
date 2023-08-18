import './App.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiDollar } from 'react-icons/bi';
import { useState } from 'react';

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);
  const [total, setTotal] = useState(0);
  const [tipTotal, setTipTotal] = useState(0);
  const [peopleError, setPeopleError] = useState(false);

  const handleAmount = () => {
    people < 1 ? setPeopleError(true) : setPeopleError(false);

    let resultTipTotal = parseFloat((bill * (tip * 0.01)) / people).toFixed(2);
    setTipTotal(resultTipTotal);

    setTotal(
      (parseFloat(bill / people) + parseFloat(resultTipTotal)).toFixed(2)
    );
  };

  const handleReset = () => {
    setBill(0);
    setTip(0);
    setPeople(1);
    setTotal(0);
    setTipTotal(0);
  };

  return (
    <>
      <main className='w-full h-screen bg-sky-300 grid place-content-center'>
        <div className='bg-white flex  w-[800px]  p-10 rounded-xl '>
          <div className='w-[600px] h-96 p-5'>
            <div className='mb-5'>
              <div className='my-5 relative p-0 m-0 space-y-2'>
                <label
                  className='text-slate-500 font-bold font-poppins'
                  htmlFor=''
                >
                  Bill
                </label>
                <br />
                <input
                  className='bg-green-100 w-full px-5 mt-2 py-2 rounded-lg text-right focus:outline-none '
                  type='number'
                  value={bill}
                  onChange={(e) => setBill(e.target.value)}
                />
                <BiDollar size={20} className='absolute bottom-3 left-2' />
              </div>
            </div>
            <div className='my-5'>
              <label
                htmlFor=''
                className='text-slate-500 font-bold font-poppins'
              >
                Select Tip %
              </label>

              <div className='space-x-2 py-2 space-y-3 px-2 '>
                <button
                  value={tip}
                  onClick={() => setTip(5)}
                  className='text-white bg-green-950 w-fit px-6 rounded-lg py-1'
                >
                  5%
                </button>
                <button
                  value={tip}
                  onClick={() => setTip(10)}
                  className='text-white bg-green-950 w-fit px-6 rounded-lg py-1'
                >
                  10%
                </button>
                <button
                  value={tip}
                  onClick={() => setTip(15)}
                  className='text-white bg-green-950 w-fit px-6 rounded-lg py-1'
                >
                  15%
                </button>
                <button
                  value={tip}
                  onClick={() => setTip(25)}
                  className='text-white bg-green-950 w-fit px-6 rounded-lg py-1'
                >
                  25%
                </button>
                <button
                  value={tip}
                  onClick={() => setTip(50)}
                  className='text-white bg-green-950 w-fit px-6 rounded-lg py-1'
                >
                  50%
                </button>

                <input
                  type='text'
                  className='w-20 px-2 py-1 rounded-lg bg-green-100 focus:outline-none'
                  value={tip}
                  onChange={(e) => setTip(e.target.value)}
                  placeholder='Custom'
                />
              </div>
            </div>
            <div className='my-5 relative p-0 m-0 space-y-2'>
              <label className='mr-20' htmlFor=''>
                Number of People
              </label>
              {peopleError ? (
                <span className='text-red-500 w-full'> Can't be Zero</span>
              ) : (
                ''
              )}
              {peopleError ? (
                <input className='border-2 border-red-500 bg-green-100 w-full px-2 py-2 text-right rounded-lg'></input>
              ) : (
                <input
                  type='number'
                  className='bg-green-100 w-full px-2 py-2 text-right focus:outline-none'
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                />
              )}
              <BsFillPersonFill
                size={20}
                className='absolute bottom-3 left-2'
              />
            </div>
            <div className='text-center'>
              <button
                onClick={handleAmount}
                className='text-black px-4 py-2 rounded-lg bg-green-400'
              >
                Calculate Amount
              </button>
            </div>
          </div>
          <div className='bg-green-900 w-[600px] rounded-lg p-8'>
            <div>
              <h1 className='text-white font-bold font-poppins'>Tip Amount</h1>
              <p className='text-white'>/ person</p>
              <p className='text-white font-bold mt-4'>{tipTotal} </p>
            </div>

            <div className='my-8'>
              <h1 className='text-white font-bold font-poppins'>Total</h1>
              <p className='text-white'>/ person</p>
              <p className='text-white font-bold mt-4'>{total}</p>
            </div>
            <div>
              <button
                onClick={handleReset}
                className='text-green-800 bg-green-300 w-full mt-10 py-2 rounded-lg'
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
