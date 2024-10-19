document.getElementById("getSuggestion").addEventListener("click", async () => {
    const topic = document.getElementById("topic").value;
    const response = await fetch('/get-suggestion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic }),
    });
    const data = await response.json();
    document.getElementById("suggestion").innerText = data.suggestion;
});
