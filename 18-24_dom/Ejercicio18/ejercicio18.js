document.getElementById("funButton").addEventListener
("click", function()
{
    const responses = [
        "Este es otro parrafo de texto",
        "Eres increible!!",
        "Vuelve a cambiarme!",
        "Presiona click",
    ];
    const randomIndex =
    Math.floor(Math.random() * 
    responses.length);
        document.getElementById
    ("response").textContent =
    responses[randomIndex];
});
