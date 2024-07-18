

import Step1 from './components/forms/Step1'
import Step3 from './components/forms/Step3'
import Step4 from './components/forms/Step4'
import Step5 from './components/forms/Step5'
import Layout from './components/common/Layout'
import SetUp2 from './components/forms/Step2'
import FinalReport from './components/forms/FinalReport'
import { Navigate, Route,BrowserRouter as Router, Routes,  } from 'react-router-dom'




function App() {
  return (
    <Router>
    <Routes>
       <Route  element={<Layout/>}>
       <Route  path="/" element={ <Navigate to="/step1" />} />
       <Route path="/step1" element={<Step1/>} />
       <Route path="/step2" element={<SetUp2/>} /> 
       <Route path="/step3" element={<Step3/>}/>
       <Route path="/step4" element={<Step4/>}/>
       <Route path="/step5" element={<Step5/>}/>
       <Route path="/reportoverview" element={<FinalReport/>}/>
       </Route>
    </Routes>
  </Router>
  ) 
}

export default App
