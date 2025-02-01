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
