// Script 
const minusBtn = document.querySelector('.minus')
const plusBtn  = document.querySelector('.plus')
const qtyInput = document.querySelector('.qty-input')
const qtyitem  = document.querySelector('.qty-item')
const price  = document.querySelector('.price')

if (plusBtn && qtyInput && qtyitem && price) {
plusBtn.onclick = () => {
    let value = parseInt(qtyInput.value)
    let valueItem  = parseInt(qtyitem.value)
    let pricevalue = parseInt(price.value)
    
    if(value < 99){
        qtyInput.value = value + 1 
        qtyitem.value = valueItem + 1
        price.value = pricevalue*2
    }   
}
}

if (minusBtn && qtyInput && qtyitem && price) {
minusBtn.onclick = () => {
    let value = parseInt(qtyInput.value)
    let valueItem  = parseInt(qtyitem.value)
    let pricevalue = parseInt(price.value)
    if(value > 1){
    qtyInput.value = value - 1
    qtyitem.value = valueItem -1
    price.value = pricevalue / 2
    } 
}
}


  // รายการรูปภาพที่จะแสดงในสไลด์
        const images = [
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-mink-blouson--HUF20EAI9356_PM2_Front%20view.png?wid=1090&hei=1090", //Item1
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-onthego-mm--M45321_PM2_Front%20view.jpg", // Itm2 
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-embossed-suede-hoodie--HUL61ESXD866_PM2_Front%20view.png?wid=1090&hei=1090" ,//Itm3 
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-go-14-mm--M11257_PM2_Front%20view.png?wid=1090&hei=1090" ,
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-oxford--M22735_PM1_Side%20view.png?wid=1090&hei=1090", // itm5
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-all-in-bb--M12925_PM2_Front%20view.png?wid=1090&hei=1090", // itm6
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-remix-ankle-boot--BVQ001PC92_PM2_Front%20view.png?wid=1090&hei=1090"  ,// itm7
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mink-bomber--HUF21EAI9002_PM2_Front%20view.png?wid=1090&hei=1090", // itm8 
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mink-trucker-jacket--HUF98EAI9810_PM2_Front%20view.png?wid=1090&hei=1090", // itm9
        ];
        const previewimg = [
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-mink-blouson--HUF20EAI9356_PM1_Cropped%20worn%20view.png?wid=1090&hei=1090", // 1
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-onthego-voyage--M46823_PM1_Interior%20view.png?wid=1090&hei=1090", // 2
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-embossed-suede-hoodie--HUL61ESXD866_PM1_Cropped%20view.png?wid=1090&hei=1090", // 3
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-go-14-mm--M25060_PM1_Side%20view.png?wid=1090&hei=1090", //4
            "https://th.louisvuitton.com/images/is/poster-video/b0b17fb2-e5d1-358f-ae57-e87568b4e8dd-1716983712.jpg?wid=1090",  //5
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-all-in-bb--M12925_PM1_Worn%20view.png?wid=1090&hei=1090", //6
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-remix-ankle-boot--BVQ001PC92_PM1_Cropped%20worn%20view.png?wid=1090&hei=1090" , //7
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mink-bomber--HUF21EAI9002_PM2_Front%20view.png?wid=1090&hei=1090" , //8
            "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mink-trucker-jacket--HUF98EAI9810_PM2_Front%20view.png?wid=1090&hei=1090"//9

            
            

        ]

        let currentIndex = 0;
        const productImg = document.getElementById('productImg');
        const previewproduct  = document.getElementById('previewproduct');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn && nextBtn && productImg) {
        prevBtn.addEventListener('click', () => {
            // ลด index ลง 1 ถ้าเป็น 0 ให้วนไปรูปสุดท้าย
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1 && previewimg.length-1;
            productImg.src = images[currentIndex] , 
            previewproduct.src = previewimg[currentIndex];
        });

        nextBtn.addEventListener('click', () => {
            // เพิ่ม index ขึ้น 1 ถ้าถึงรูปสุดท้ายให้วนกลับไปรูปแรก
            currentIndex = (currentIndex < images.length - 1 && currentIndex < previewimg.length -1 && previewimg.length-1) ? currentIndex + 1 : 0;
            productImg.src = images[currentIndex] , 
            previewproduct.src = previewimg[currentIndex];
        });
        }

         // รอให้หน้าเว็บโหลดเนื้อหาทั้งหมดเสร็จก่อน
        document.addEventListener('DOMContentLoaded', function() {
            
            document.body.style.opacity = 1;
        });
