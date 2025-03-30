

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
    </div>
    
  );
}
