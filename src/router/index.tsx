import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home/index'
import React01 from '../pages/react01/index'
import React02 from '../pages/react02/index'
import React03 from '../pages/react03/index'
import React04 from '../pages/react04/index'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="home" />} />
                <Route path="home" element={<Home />}>
                    首页
                </Route>
                <Route path="react01" element={<React01 />}>
                    React01
                </Route>
                <Route path="react02" element={<React02 />}>
                    React02
                </Route>
                <Route path="react03" element={<React03 />}>
                    React03
                </Route>
                <Route path="react04" element={<React04 />}>
                    React04
                </Route>
            </Routes>
        </div>
    )
}
export default App
