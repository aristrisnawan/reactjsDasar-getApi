import {React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    async function getDetailArticle() {
      const request = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
      );
      
      if (!request.ok) {
          setLoading(false);
          return setNotFound(true);
      }
      const response = await request.json();

      document.title = response.title
      setArticle(response);
      setLoading(false);
    }
    getDetailArticle();
  }, [params]);

  

  if (notFound) {
      return <h1>Data tidak ditemukan</h1>
  }
  return (
    <div className="section">
      {loading ? (
        <i>Loading data...</i>
      ) : (
        <>
          <h4 className="article-title">{article.title}</h4>
          <img src={article.imageUrl} alt={article.title} className="article-image"/>
          <i className="article-time">Publish : {new Date(article.publishedAt).toLocaleDateString()}</i>
          <p className="article-summary">{article.summary}</p>
          <p>Sumber : {article.newsSite}</p>
          <p>
            Source :{" "}
            <a href={article.url} target="_blank" rel="noreferrer">
              Klik dan kunjungi
            </a>
          </p>
        </>
      )}
    </div>
  );
}
