import './CustomerTable.css';

const customers = [
  { id: '654123', name: 'นาย.xxxxxx xxxxxxx' },
  { id: '684123', name: 'นาย.xxxxxx xxxxxxx' },
  { id: '674123', name: 'นาย.xxxxxx xxxxxxx' },
  { id: '604123', name: 'นาย.xxxxxx xxxxxxx' }
];

export default function Employee() {
  return (
    <>
<header className="topbar">พนักงาน</header>
            <div className="main">
        <div className="search-bar">
          <span style={{ marginRight: '8px' }}>🔍</span>
          <input type="text" placeholder="ค้นหา" />
          <span id="search-star" style={{ marginLeft: 'auto', cursor: 'pointer' }}></span>
        </div>  

  <div className="alt-customer-container">
    <table className="alt-customer-table">
      <thead>
        <tr>
          <th>รหัสลูกค้า</th>
          <th>ชื่อ-นามสกุล</th>
          <th></th>
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
              <button className="alt-info-button">ข้อมูลทั้งหมด</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </>
  );
}


