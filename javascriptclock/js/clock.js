//Kullanıcı ismini alma
let name = prompt("Lütfen adınız giriniz")

//alınan ismin DOM a eklenmesi
document.querySelector("#myName").innerHTML = name;


const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

//10 zaman kısmında 10 dan küçük bir değer varsa başına 0 ekleme fonksiyonu;
function sing(s) {
    return (
        s < 10 ? `0${s}` : s
    )
}

//zamanı oluşturma ve DOM a yazdırma fonksiyonu
function showTime() {
    const time = new Date()
    const hours = sing(time.getHours());
    const minutes = sing(time.getMinutes());
    const seconds = sing(time.getSeconds());
    document.querySelector("#myClock").innerHTML = `${hours}:${minutes}:${seconds} ${days[time.getDay()]} `
}
// Açılışta direk tarihin eklenmesi için fonsiyon ilk ilk yüklemede için gerekli
showTime()

// zamanın her saniye teninden oluşturulması ve DOM a aktarılması için her saniye tekrarlama işlemi
setInterval(showTime, 1000)




