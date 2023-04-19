import Link from "next/link";

function NewsPage() {
  return (
    <>
      <div>
        <h1>The News page</h1>
        <ul>
          <li>
            <Link href="/news/nextjs">NextJs is great</Link>
          </li>
          <li>Something else</li>
        </ul>
      </div>
    </>
  );
}
export default NewsPage;
