function setContext(header_name) {
    //Set header
    let div = document.getElementById('content-header');
    div.innerHTML = header_name + '...';

    // Set content
    let content;

    switch (header_name) {
        case "news":
            content = "<p>welcome to ruggles online. this website is under development.</p>" +
                "please feel free to have a sniff around.";
            break;
        case "links":
            content = "<p><a href='https://github.com/cactusLabs' id='link-github'>ruggles on github</a></p>" +
                "<p><a href='https://www.linkedin.com/in/john-ruggles-4437b3120/' id='link-linkedin'>ruggles on linkedIn</a></p>" +
                "<p><a href='https://www.youtube.com/channel/UCR4irx2OoqMu_WwKr5_BoMw' id='link-youtube'>ruggles on youtube</a></p>";
            break;
        case "contact":
            content = "<p>contact details coming soon.</p>"
            break;
    }
    document.getElementById('content-text').innerHTML = content;
}