import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const id = router.query.newsId;

  return (
    <>
      <div>
        <h1>The detail page {id}</h1>
      </div>
    </>
  );
}
export default DetailPage;
