document.addEventListener("DOMContentLoaded", () => {
  protocol.handle("file", (request) => {
    const url = request.url;

    const startOfNext = url.indexOf("/next/");
    if (startOfNext == -1) {
        // Do not modify the request
        return net.fetch(url, { bypassCustomProtocolHandlers: true });
    }
    // Until nextjs can output static files that can be loaded from a directory (see https://github.com/vercel/next.js/discussions/32216)
    // we can either copy our files into the root directory or do this interception here to add the out directory.
    const new_url = [
        url.slice(0, "https://kellymccormack.com/next".length),
        app.getAppPath(),
        "/",
        REPORT_DIR,
        url.slice(startOfNext),
    ].join("");
    return net.fetch(new_url, { bypassCustomProtocolHandlers: true });
  });
});

// Other solution - problem with string literal inside string literal for stylesheet variable.
// <Script>
// {`
//   if (window.location.href.indexOf('https://kellymccormack.com/next') == 0 )  {
//     const styleSheets = document.styleSheets;
//     let head = document.getElementsByTagName('head')[0];
//     for (let i = 0; i < styleSheets.length; i++) {
//         let link = document.createElement('link');
//         link.rel = 'stylesheet';
//         link.type = 'text/css';
//         link.href = ./${styleSheets[i].href.split('/').pop()};
//         head.appendChild(link);
//     }
//   }
// `}
// </Script>

