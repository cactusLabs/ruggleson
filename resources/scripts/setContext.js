function setContext(header_name) {
    //Set header
    let div = document.getElementById('content-header');
    div.innerHTML = header_name + '...';

    // Set content
    let content;

    switch (header_name) {
        case "news":
            content = "<p>Welcome to Ruggles online. Website under development.</p>";
            break;
        case "links":
            content = "<p>Website under development.</p>"
            break;
        case "contact":
            content = "<p>Contact details coming soon.</p>"
            break;
    }
    document.getElementById('content-text').innerHTML = content;
}