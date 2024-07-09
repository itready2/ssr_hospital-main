
const Appointment = () => {

  const headingStyle: React.CSSProperties = {
    color: 'green', // สีแดง
    fontSize: '24pt' // ขนาดฟอนต์
  };


  return (
    <main style={{ height: '50vh', display: 'flex', alignItems: 'center' , flexDirection:'row', justifyContent: 'center'}}>
      <h1 style={headingStyle}>
        ขออภัยหน้านี้ยังไม่พร้อมใช้งาน
      </h1>
    </main>
  )
}

export default Appointment
