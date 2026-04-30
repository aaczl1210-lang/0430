/* CSS Variables for Ukiyo-e theming */
:root {
    --bg-color: #eaddcf; /* 和紙/宣紙的米黃色背景 */
    --text-main: #2b2b2b; /* 木版畫的墨黑 */
    --text-muted: #59544c; /* 較淺的墨色 */
    --accent-color: #c73e3a; /* 傳統朱紅色 (印泥/強調) */
    --secondary-color: #1c2e4a; /* 藍摺 (傳統深藍) */
    --card-bg: #dcd1c4; /* 稍微深一點的紙色 */
    --nav-height: 70px;
}

/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    /* 替換為襯線字體，展現漢字的傳統美感 */
    font-family: 'Noto Serif TC', "PMingLiU", serif;
    background-color: var(--bg-color);
    color: var(--text-main);
    line-height: 1.8;
    scroll-behavior: smooth;
    /* 加入淡淡的點狀紋理模擬和紙質感 */
    background-image: radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px);
    background-size: 10px 10px;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: var(--nav-height);
    background-color: var(--bg-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    z-index: 1000;
    border-bottom: 3px solid var(--text-main);
}

/* 將 Logo 設計成類似傳統印章 (Hanko) */
.nav-brand {
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--bg-color);
    background-color: var(--accent-color);
    padding: 0.2rem 0.8rem;
    border: 2px solid var(--text-main);
    border-radius: 4px;
    letter-spacing: 2px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 2rem;
}

.nav-links a {
    color: var(--text-main);
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 700;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--accent-color);
}

/* Common Section Styles */
section {
    padding: 100px 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    border-bottom: 2px dashed rgba(43, 43, 43, 0.2);
}

.section-title {
    font-size: 2.8rem;
    margin-bottom: 2rem;
    color: var(--secondary-color);
    position: relative;
    display: inline-block;
}

/* 加入傳統引號樣式裝飾標題 */
.section-title::before {
    content: '『';
    color: var(--accent-color);
}
.section-title::after {
    content: '』';
    color: var(--accent-color);
    display: inline;
    width: auto;
    height: auto;
    background-color: transparent;
    margin-top: 0;
}

/* Hero Section */
.hero-section {
    padding-top: calc(100px + var(--nav-height));
    background: linear-gradient(135deg, rgba(28,46,74,0.03) 0%, rgba(199,62,58,0.03) 100%);
}

.hero-title {
    font-size: 4.5rem;
    font-weight: 900;
    line-height: 1.3;
    margin-bottom: 1rem;
}

.highlight {
    color: var(--accent-color);
    /* 增加錯位陰影，模擬木板印刷 */
    text-shadow: 3px 3px 0px rgba(0,0,0,0.1);
}

.hero-subtitle {
    font-size: 1.5rem;
    color: var(--text-muted);
    margin-bottom: 3rem;
    max-width: 600px;
    border-left: 5px solid var(--accent-color);
    padding-left: 1rem;
}

.hero-buttons {
    display: flex;
    gap: 1.5rem;
}

/* 按鈕設計為方正的木板塊風格 */
.btn {
    padding: 0.8rem 2rem;
    border-radius: 0;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    border: 2px solid var(--text-main);
    position: relative;
}

/* 模擬木板畫的立體偏移厚度 */
.btn::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 100%;
    height: 100%;
    background-color: var(--text-main);
    z-index: -1;
    transition: all 0.3s ease;
}

.btn:hover::after {
    top: 0;
    left: 0;
}

.btn-primary {
    background-color: var(--accent-color);
    color: var(--bg-color);
}

.btn-primary:hover {
    background-color: var(--text-main);
    color: var(--bg-color);
}

.btn-outline {
    background-color: var(--bg-color);
    color: var(--text-main);
}

.btn-outline:hover {
    background-color: var(--secondary-color);
    color: var(--bg-color);
}

/* About Section */
.about-content {
    color: var(--text-main);
    font-size: 1.2rem;
    max-width: 800px;
    background-color: rgba(255,255,255,0.3);
    padding: 2.5rem;
    border: 3px solid var(--text-main);
    box-shadow: 10px 10px 0px rgba(0,0,0,0.08);
}

.about-content p {
    margin-bottom: 1.5rem;
    text-align: justify;
}

.skills-container {
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

/* 技能標籤設計為傳統長條題籤（千社札）風格 */
.skill-tag {
    background-color: transparent;
    color: var(--secondary-color);
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 700;
    border: 2px solid var(--secondary-color);
    border-radius: 0px;
    position: relative;
}

.skill-tag::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    right: -5px;
    bottom: -5px;
    background-color: rgba(28,46,74,0.08);
    z-index: -1;
}

/* Contact Section */
.contact-section {
    text-align: center;
}

.contact-section .section-title {
    display: inline-block;
}

.contact-text {
    color: var(--text-main);
    font-size: 1.2rem;
    margin-bottom: 3rem;
    font-weight: 700;
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

/* 聯絡卡片加上粗框與背後錯位色彩 */
.contact-card {
    background-color: var(--bg-color);
    padding: 2rem;
    border: 3px solid var(--text-main);
    text-decoration: none;
    color: var(--text-main);
    width: 250px;
    position: relative;
    transition: transform 0.3s ease;
    border-radius: 0;
}

.contact-card::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    width: 100%;
    height: 100%;
    background-color: var(--accent-color);
    z-index: -1;
    transition: all 0.3s ease;
}

.contact-card h3 {
    margin-bottom: 1rem;
    color: var(--text-main);
    font-size: 1.5rem;
    border-bottom: 2px solid var(--text-main);
    padding-bottom: 0.5rem;
}

.contact-card p {
    color: var(--text-muted);
    font-size: 1rem;
    font-weight: 700;
}

.contact-card:hover {
    transform: translate(-4px, -4px);
}

.contact-card:hover::after {
    top: 12px;
    left: 12px;
}

/* Footer */
.footer {
    text-align: center;
    padding: 2rem;
    color: var(--text-main);
    font-size: 1rem;
    background-color: var(--card-bg);
    border-top: 3px solid var(--text-main);
    font-weight: 700;
}

/* Responsive Design (RWD) */
@media (max-width: 768px) {
    .hero-title {
        font-size: 3rem;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
    }
    
    .contact-links {
        flex-direction: column;
        align-items: center;
    }
    
    .contact-card {
        width: 100%;
        max-width: 300px;
        margin-bottom: 1rem;
    }
}
