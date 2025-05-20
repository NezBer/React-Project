import { Routes, Route } from 'react-router-dom';
import Admin from './component/admin';
import CheckNews from './component/CheckNews';
import Navbar from './component/navbar';
import CheckAds from './component/CheckAds';
import Customer from './component/customer';
// เพิ่มคอมโพเนนต์อื่น ๆ ตามต้องการ

function App() {
  return (
      <>
      <Navbar/>

    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/CheckNews" element={<CheckNews />} />
      <Route path="/CheckAds" element={<CheckAds />} />
      <Route path="/Customer" element={<Customer />} />
      {/* เพิ่ม Route อื่น ๆ */}
    </Routes>

    </>
  );
}

export default App;
