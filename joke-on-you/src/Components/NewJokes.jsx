function NewJokes() {
    function refreshPage() {
        window.location.reload(false);
      }
      
    return (
        <div className="button">
        <button onClick={refreshPage}>sudo GIMMIE ANOTHER 10!</button>
        </div>
    )
}

export default NewJokes;