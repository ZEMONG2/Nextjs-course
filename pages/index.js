import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
          {/* <Link replace href="/portfolio">
            Portfolio
          </Link>
          현재 페이지에서 새로 페이지 불러옴 즉, 뒤로가기시 그전 페이지로
          돌아갈수 없음 */}
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
