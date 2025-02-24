// Chọn tất cả các liên kết neo (liên kết bắt đầu bằng #)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // Tạo hiệu ứng cuộn mượt
            });
        }
    });
});




const categoryNav = document.querySelector('.category-nav');
const categoryNavUl = categoryNav.querySelector('ul');

categoryNavUl.addEventListener('mouseover', function(event) {
    const targetLi = event.target.closest('li');
    if (targetLi && targetLi.querySelector('ul')) {
        targetLi.querySelector('ul').style.display = 'block';
    }
});

categoryNavUl.addEventListener('mouseout', function(event) {
    const targetLi = event.target.closest('li');
    if (targetLi && targetLi.querySelector('ul')) {
        targetLi.querySelector('ul').style.display = 'none';
    }
});





const products = document.querySelectorAll('.product');

products.forEach(product => {
    product.addEventListener('mouseover', () => {
        product.style.transform = 'scale(1.05)'; // Phóng to sản phẩm
        product.style.transition = 'transform 0.3s ease'; // Tạo hiệu ứng mượt mà
    });

    product.addEventListener('mouseout', () => {
        product.style.transform = 'scale(1)'; // Trả về kích thước ban đầu
    });
});
