# 素革 SOGE — 電商首頁

高階極簡手工皮件品牌的現代化電商首頁前端。

## 品牌設定

| 項目 | 內容 |
|------|------|
| 產品類型 | 高階極簡風皮件 |
| 色彩 | 奶油白 `#F7F3ED`、深木 `#3D2E24`、質感金 `#B8956C` |
| 字體 | Cormorant Garamond（標題）+ Noto Sans TC（內文） |

## 專案結構

```
product-project/
├── index.html      # 主頁面
├── css/styles.css  # 自訂樣式與動畫
├── js/main.js      # 互動邏輯
└── README.md
```

## 本地預覽

```bash
# 方式一：Python
python3 -m http.server 8080

# 方式二：npx
npx serve .
```

瀏覽器開啟 `http://localhost:8080`

## 功能一覽

- 響應式導覽列（桌面 / 漢堡選單）
- 滾動後 Header 毛玻璃效果
- Hero 主視覺 + CTA 懸停動畫
- 精選分類卡片（放大 + 陰影浮起）
- 熱銷商品四欄網格（雙圖切換、評分、特價、加入購物車）
- 品牌信任區塊
- 頁尾地圖、社群、電子報訂閱

## 技術棧

- HTML5
- [Tailwind CSS](https://tailwindcss.com)（CDN）
- 原生 JavaScript（無框架依賴）
