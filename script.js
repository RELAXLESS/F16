document.getElementById('otherButton').onclick = function() {
    const button = document.getElementById('otherButton');
    button.style.position = 'absolute';
    button.style.top = Math.random() * (window.innerHeight - button.offsetHeight) + 'px';
    button.style.left = Math.random() * (window.innerWidth - button.offsetWidth) + 'px';

    // Remove the text growing effect when button is clicked
    const message = document.getElementById('message');
    message.style.display = 'none'; // Ensure message is hidden when button is clicked
};

document.getElementById('shammarButton').onclick = function() {
    const container = document.querySelector('.container');
    container.style.display = 'none'; // إخفاء كل المحتويات

    const message = document.createElement('p');
    message.className = 'message';
    message.textContent = 'شمر لو إني ما اعرف مسكنها من صيتها والله لأقول: (شمر دولــه)';
    document.body.appendChild(message); // إضافة الرسالة إلى الصفحة
};

document.getElementById('hirnText').onclick = function() {
    window.open('https://www.instagram.com/hirn', '_blank'); // استخدام رابط صحيح
};
