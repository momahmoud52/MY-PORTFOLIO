// تشغيل مكتبة AOS
AOS.init();

// إخفاء شاشة التحميل بعد 10 ثوانٍ من تحميل الصفحة
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.transition = 'opacity 0.8s ease';
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 800);
  }, 6000); // بعد 10 ثوانٍ
});

// تمرير سلس عند الضغط على السهم
document.querySelector('.scroll-down')?.addEventListener('click', () => {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
});

// نموذج الإرسال باستخدام EmailJS
document.getElementById('consultForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    return Swal.fire({
      icon: 'warning',
      title: 'تنبيه',
      text: 'يرجى تعبئة جميع الحقول.',
      confirmButtonText: 'موافق'
    });
  }

  emailjs.send("service_dr8owcm", "template_36cwfas", {
    from_name: name,
    from_email: email,
    message: message
  }, "i_0Anw2UdLxOsVHZ4")
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'تم الإرسال!',
        text: 'تم إرسال رسالتك بنجاح، وسنقوم بالرد عليك قريباً.',
        confirmButtonText: 'موافق'
      });
      this.reset();
    })
    .catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'خطأ!',
        text: 'حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً.',
        confirmButtonText: 'موافق'
      });
    });
});
