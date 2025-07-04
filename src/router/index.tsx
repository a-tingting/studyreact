import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home/index'
import React01 from '../pages/react01/index'
import React02 from '../pages/react02/index'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="home" />} />
                <Route path="home" element={<Home />}>
                    首页
                </Route>
                <Route path="react01" element={<React01 />}>
                    个人中心
                </Route>
                <Route path="react02" element={<React02 />}>
                    登录页
                </Route>
            </Routes>
        </div>
    )
}
export default App
