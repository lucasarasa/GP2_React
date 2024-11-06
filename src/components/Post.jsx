// Post.js
const Post = ({ post, onExcluirClick, onLikeClick }) => {
    const { autor, comentario, likes } = post;

    return (
        <div className="post">
            <h2>{autor}</h2>
            <p>{comentario}</p>
            <div className="post-footer">
                <p>Likes: {likes}</p>
                <button onClick={onLikeClick}>Like</button>
                <button onClick={onExcluirClick}>Excluir</button>
            </div>
        </div>
    );
};

export default Post;
