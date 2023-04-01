export default function MeowArticle() {
  const res = await fetch('https://meowfacts.herokuapp.com', {
    next: { revalidate: 3 },
  });
  const data = await res.json();
  const factText = data.data[0];
  return (
    <div>
      <article className={styles.article}>{factText}</article>
    </div>
  );
}
