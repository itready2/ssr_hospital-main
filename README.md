## การติดตั้งโปรเจค

1. **Clone Repository**

    ```bash
    git clone <repository-url>
    ```

2. **Navigate to Project Directory**

    ```bash
    cd <project-directory>
    ```

3. **Install Dependencies**

    ```bash
    npm install
    # หรือ
    yarn install
    ```

4. **Run the Project**

    ```bash
    npm run dev
    #หรือ
    yarn dev
    ```
5. **สามารถเข้าถึงโปรเจกต์ได้ที่ URL: [http://localhost:3000](http://localhost:3000)**

## วิธีการเพิ่ม Route ใน NextJS (Typescript)
1. สร้าง Folder ใน src/app/[locale]

    - โดยการตั้งชื่อ Folder โดยจะเป็นการตั้งชื่อ Route
    - ถ้าเป็น Dynamic Route ให้ใช้ [ ] มาครอบเช่น [slug], [id]

2. สร้างไฟล์ **page.tsx** ใน Folder ที่สร้าง

3. เขียนโค้ดสำหรับ Route ใหม่

4. เพิ่ม Link ไปยัง Route ใหม่ใน Navigation
