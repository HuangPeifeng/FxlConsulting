import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  recordList = [
    {
      cover: 'assets/images/record1.jpg',
      info: '理慈榮獲InterContinental Finance Magazine評選為2019年「世界前100法律事務所」'
    },
    {
      cover: 'assets/images/record2.png',
      info: '理慈榮獲CV Magazine 之2018年  Emerging Markets Business Awards 評選為「台灣年度併購法律事務所」及「台灣年度智慧財產交易專家法律事務所」。'
    },
    {
      cover: 'assets/images/record3.jpg',
      info: '理慈榮獲Corporate USA Today評選為2018年「台灣年度全方位法律事務所」'
    },
    {
      cover: 'assets/images/record4.jpg',
      info: '理慈榮獲Corporate Insider 2018 M&A Awards 評選為2018年「台灣年度法律事務所」'
    },
    {
      cover: 'assets/images/record5.png',
      info: '理慈榮獲Media Law International 評選為臺灣首選律師事務所之一'
    },
    {
      cover: 'assets/images/record6.jpg',
      info: '理慈暨陳信宏律師榮獲Acquisition International Magazine之2018 Global Excellence Awards評選為「2018年台灣公平交易法頂尖法律顧問」'
    },
  ];
  roleList = [
    {
      title: 'CherryPay案例看跨境匯兌在我國及外國立法例相關法令發展',
      info: '2019.7.29 林芳維 律師[1]   一、前言 隨著全球化時代來'
    },
    {
      title: '「新興跨境匯兌模式」之法律風險',
      info: '2019.7.26 莊薇馨 律師[1] 一、前言 在數位時代下，科技之發展已逐漸'
    },
    {
      title: '關於印發最高人民檢察院第十四批指導性案例的通知（中國大陸）',
      info: '2019.5.21 張凱旋 律師 2019年5月21日最高人民檢察院發佈了第十四'
    },
    {
      title: '界定公職人員之關係人時 倘適用範圍產生疑義 應從嚴限縮解釋 故修正前利益衝突迴避法第3條第4款規定之董事 應不包括獨立董事（台灣）',
      info: '2018.12.27 伍涵筠 律師 臺北高等行政法院於民國107年12月27日作'
    },
    {
      title: '依契約約款所載 任一方違約時 他方得解除契約並得向對方請求賠償其損害 旨在使兩造履行契約 而非一方得任意支付違約金以解除契約（台灣）',
      info: '2019.3.29 闕立婷 律師 最高法院於民國108年3月29日以108年度台'
    },
    {
      title: '除顯然違背法令或當事人已提出新訴訟資料足以推翻原判斷外同一當事人就該重要爭點所提起之訴訟中法院及當事人就該已經法院判斷之重要爭點皆不得為相反之判斷或主張（台灣）',
      info: '2019.3.14 翁乃方 律師 最高法院於民國108年3月14日作成107年度'
    },
    {
      title: '事業推出之系爭藥品倘採用與市面上他種具相同功能之藥品相似之包裝，是否構成混淆消費者致足以影響交易秩序之不公平競爭行為 最高法院認為應一併考量須醫師處方藥品之交易習慣、產業特性及刊載系爭藥品廣告之處所等因素綜合判斷（台灣）',
      info: '2019.1.31 莊薇馨 律師 最高法院於民國108年1月31日作成107年度'
    },
    {
      title: '穩定幣的法律管制（台灣）',
      info: '2019.6.17 劉昱劭 律師 從2018年末開始，臉書想跨足區塊鏈領域及發行'
    },
  ];

  tabIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  changeTab(value) {
    this.tabIndex = value;
  }

}
