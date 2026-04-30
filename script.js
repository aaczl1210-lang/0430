// 處理 Navbar 中錨點連結的平滑滾動
document.addEventListener('DOMContentLoaded', () => {
    // 取得所有具有 href 屬性且以 # 開頭的連結
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // 防止預設的跳轉行為
            e.preventDefault();

            // 取得目標 ID (移除 # 符號)
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // 計算滾動位置，需扣除固定的 Navbar 高度
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;

                // 執行平滑滾動
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
