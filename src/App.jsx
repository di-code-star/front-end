import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import ButtonBox from './components/ButtonBox'
import Screen from './components/Screen'
import Wrapper from './components/Wrapper'

function App() {

  let [calc, setCalc] = useState(
    {
      sign: "",
      num: 0,
      res: 0,
    }
  );

  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
  ]

  const numClickHandler = (e) => {
    e.prevetDefault();
    const value = e.target.innerHTML;
  }

  return (
    <>
      <div className="h-screen bg-gray-100">
        <div className="flex h-full justify-center items-center">
          <div className="bg-white shadow-md rounded-lg p-4">

            <Wrapper>
              <Screen value={calc.num ? calc.num : calc.res}>
              </Screen>
              <ButtonBox>
                {
                  btnValues.flat().map((btn, i) => {
                    return (
                      <Button
                        key={i}
                        className={btn === "=" ?
                          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          :
                          "bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"}
                        value={btn}
                        onClick={() => {

                          btn === "C"
                            ? resetClickHandler
                            : btn === "+-"
                              ? invertClickHandler
                              : btn === "%"
                                ? percentClickHandler
                                : btn === "="
                                  ? equalsClickHandler
                                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                                    ? signClickHandler
                                    : btn === "."
                                      ? commaClickHandler
                                      : numClickHandler
                        }}
                      >

                      </Button>

                    )
                  }
                  )
                }
              </ButtonBox>
            </Wrapper>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
