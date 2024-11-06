import React from "react";
import Post from "./Post";

const CommentsSection = ({ posts, setPosts, autor, setAutor, comentario, setComentario }) => {
    const handleAutorChange = (e) => setAutor(e.target.value);
    const handleComentarioChange = (e) => setComentario(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const novoPost = { autor, comentario, likes: 0 };
        setPosts([...posts, novoPost]);
        setAutor("");
        setComentario("");
    };

    return (
        <div className="comments-section">
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Autor"
                    value={autor}
                    onChange={handleAutorChange}
                    required
                />
                <textarea
                    placeholder="Comentário"
                    value={comentario}
                    onChange={handleComentarioChange}
                    required
                />
                <button type="submit">Postar Comentário</button>
            </form>
            <div className="comments-list">
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        post={post}
                        onExcluirClick={() => setPosts(posts.filter((_, i) => i !== index))}
                        onLikeClick={() => setPosts(
                            posts.map((p, i) => i === index ? { ...p, likes: p.likes + 1 } : p)
                        )}
                    />
                ))}
            </div>
        </div>
    );
};

export default CommentsSection;
