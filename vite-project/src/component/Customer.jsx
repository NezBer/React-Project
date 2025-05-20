import './CustomerTable.css';

const customers = [
  { id: '654123', name: 'นาย.xxxxxx xxxxxxx' },
  { id: '684123', name: 'นาย.xxxxxx xxxxxxx' },
  { id: '674123', name: 'นาย.xxxxxx xxxxxxx' },
  { id: '604123', name: 'นาย.xxxxxx xxxxxxx' }
];

function CustomerTable() {
  return (
    <>
      <header className="topbar">Admin</header>

      <div className="main">
        <div className="search-bar">
          <span style={{ marginRight: '8px' }}>🔍</span>
          <input type="text" placeholder="ค้นหา" />
          <span id="search-star" style={{ marginLeft: 'auto', cursor: 'pointer' }}>☆</span>
        </div>

        <div className="customer-container">
          <table className="customer-table">
            <thead>
              <tr>
                <th>รหัสลูกค้า</th>
                <th>ชื่อ-นามสกุล</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td>
                    <input type="text" value={customer.id} readOnly />
                  </td>
                  <td>
                    <input type="text" value={customer.name} readOnly />
                  </td>
                  <td>
                    <button className="info-button">ข้อมูลทั้งหมด</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> {/* ✅ ปิด <div className="main"> ให้ถูกต้อง */}
    </>
  );
}

export default CustomerTable;
