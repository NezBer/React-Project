import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <div className="sidebar">
      <Link to="/admin">หน้าหลัก</Link>
      <Link to="/CheckNews">ตรวจสอบข่าว</Link>
      <Link to="/CheckAds">ตรวจสอบโฆษณา</Link>
      <Link to="/Customer">ลูกค้า</Link>
      <Link to="#">พนักงาน</Link>
      <Link to="#" className="logout">ออกจากระบบ</Link>
      <Link to="#" className="logout">ออกจากระบบ</Link>
    </div>
  );
}
