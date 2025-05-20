export default  function CheckAds () {
    const data = [
    { id: 'โฆษณา', content: 'ข้อความ 1', time: '10:15 น.' },
    { id: 'โฆษณา', content: 'ข้อความ 2', time: '10:15 น.' },
  ];
    return (
        <>
       <header className="topbar">ตรวจสอบข่าว</header>
            <div className="main">
        <div className="search-bar">
          <span style={{ marginRight: '8px' }}>🔍</span>
          <input type="text" placeholder="ค้นหา" />
          <span id="search-star" style={{ marginLeft: 'auto', cursor: 'pointer' }}>☆</span>
        </div>

        <div className="list-container">
          <div className="list-header">
            <span></span> {/* checkbox */}
            <span></span> {/* star */}
            <span>หัวข้อ</span>
            <span className="Center">เนื้อหา</span>
            <span className="right">เวลา</span>
          </div>

          {data.map((item) => (
            <div className="list-row" key={item.id}>
              <input type="checkbox" className="checkbox" />
              <span className="star">⭐</span>
              <span>{item.id}</span>
              <span className="Center">{item.content}</span>
              <span className="right">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
            

            
        

        </>
    )
}