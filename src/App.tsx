import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route index element={<Homepage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
