import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getArticles() {
      const requestArticle = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const response = await requestArticle.json();

      setArticle(response);
      setLoading(false);
    }
    getArticles();
  }, []);

  useEffect(() => {
    document.title = "Blog"
  })
  return (
    <div className="section">
      <h1 className="section-title">Blog</h1>
      <p className="section-description">Berikut adalah beberapa article oranglain :</p>

      {loading && <i>Loading data...</i>}
      {!loading && (
        <div className="articles">
          {article.map((art) => {
            return (
              <article key={art.id} className="article">
                <h3 className="article-title">
                  <Link to={`/blog/${art.id}`}>{art.title}</Link>
                </h3>
                <i className="article-time">{new Date(art.publishedAt).toLocaleDateString()}</i>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
