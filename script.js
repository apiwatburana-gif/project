// ตัวอย่าง event handler ค้นหา
document.querySelector(".search-box button").addEventListener("click", () => {
  let keyword = document.querySelector(".search-box input").value;
  if (keyword.trim() === "") {
    alert("กรุณากรอกสิ่งที่ต้องการค้นหา 😊");
  } else {
    alert("คุณกำลังค้นหา: " + keyword);
  }
});
// คลิกที่ปุ่มหมวดหมู่
document.querySelectorAll(".category").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("คุณเลือกหมวดหมู่: " + btn.innerText);
  });
});
// ข้อมูลรายวิชาตัวอย่าง
const courses = {
  education: [
    { title: "หลักการสอนเบื้องต้น", desc: "การสอนและฝึกอบรมสำหรับครูยุคใหม่" },
    { title: "จิตวิทยาการศึกษา", desc: "เรียนรู้การเข้าใจผู้เรียน" }
  ],
  science: [
    { title: "ฟิสิกส์เบื้องต้น", desc: "แนวคิดพื้นฐานด้านวิทยาศาสตร์" },
    { title: "คณิตศาสตร์สำหรับวิศวกรรม", desc: "หลักคณิตที่ใช้ในงานจริง" }
  ],
  technology: [
    { title: "พื้นฐานการเขียนโปรแกรม", desc: "เริ่มต้นเขียนโค้ดด้วย Python" },
    { title: "การพัฒนาเว็บไซต์", desc: "สร้างเว็บแอปพลิเคชันด้วย HTML, CSS, JS" }
  ],
  business: [
    { title: "การจัดการธุรกิจ", desc: "กลยุทธ์การบริหารธุรกิจ" },
    { title: "การตลาดดิจิทัล", desc: "เรียนรู้การตลาดออนไลน์" }
  ]
  // 👉 คุณสามารถเพิ่มหมวดอื่นได้เอง
};

// อ่านค่าหมวดจาก URL
const params = new URLSearchParams(window.location.search);
const cat = params.get("cat");

if (cat && courses[cat]) {
  document.getElementById("category-title").innerText =
    "รายวิชา: " + cat.toUpperCase();

  let container = document.getElementById("course-container");
  courses[cat].forEach(c => {
    let div = document.createElement("div");
    div.className = "course-card";
    div.innerHTML = `
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <button>เริ่มเรียน</button>
    `;
    container.appendChild(div);
  });
} else {
  document.getElementById("course-container").innerHTML =
    "<p style='text-align:center'>ไม่พบรายวิชาในหมวดนี้</p>";
}
