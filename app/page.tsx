import Image from "next/image";

export default function Home() {
    return (
      <div className="container">
        <nav>
          <div className="title">私のポートフォリオ</div>
          <div>
              <form action="#"></form>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
          </div>
        </nav>
        <section>
            <div className="content">
                <h1>劉佩玉のポートフォリオ</h1>
                <h3>日本電子専門学校　Webデザイン科　</h3>
                <p>私は常に学び続け、チームワークや柔軟性、成長意欲を大切にしながら、
                将来も新たな挑戦に取り組んでいきたいと考えています。</p>
                <button className="primary-btn">お問い合わせ</button>
            </div>
        </section>
        <section>
            <div>
              <h2>自己紹介</h2>
              <Image
                src="/myself.jpg"
                width={260}
                height={38}
                alt="公園のベンチに座って、ケーキを持ち上げる写真." />
                <p>大学では中国で動物科学を専攻。</p>
                <p>卒業後、乳製品製造業に就職し、牛乳の品質管理の仕事を担当しました。
                主な業務内容はデータ分析と管理です。</p>
            </div>
        </section>
      </div>
      
    );
  }