// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Lấy video element
    const video = document.querySelector(".Background-Video");

    // Xác định trạng thái video
    let isVideoPlaying = false;

    // Kiểm tra xem video có đang chạy không
    function checkVideoPlaying() {
        return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
    }

    // Bắt sự kiện khi trang được load
    document.addEventListener("visibilitychange", function () {
        // Kiểm tra khi chuyển đến hoặc rời khỏi trang
        if (document.visibilityState === "visible") {
            // Nếu video không đang chạy, chạy lại video
            if (!isVideoPlaying) {
                video.play();
                isVideoPlaying = true;
            }
        } else {
            // Nếu video đang chạy, tạm dừng video
            if (isVideoPlaying) {
                video.pause();
                isVideoPlaying = false;
            }
        }
    });

    // Bắt sự kiện khi chuyển đến trang khác
    document.addEventListener("click", function (event) {
        // Kiểm tra xem người dùng đã click vào liên kết chưa
        if (event.target.tagName === "A") {
            // Nếu video đang chạy, tạm dừng video khi chuyển trang
            if (checkVideoPlaying()) {
                video.pause();
                isVideoPlaying = false;
            }
        }
    });
});
function flip0(){
    document.documentElement.style.setProperty("--show0","none");
    document.documentElement.style.setProperty("--show1","block");
}
function flip1(){
    document.documentElement.style.setProperty("--show0","block");
    document.documentElement.style.setProperty("--show1","none");
}