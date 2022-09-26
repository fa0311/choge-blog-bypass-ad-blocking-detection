const bypasser = (nodeList: HTMLElement) => {
    const query = '.fc-ab-root';
    if(nodeList.parentElement == null) return;
    const feedList:  NodeListOf<Element> = nodeList.parentElement.querySelectorAll(query);
    for (const feed of feedList) {
        feed.remove();
        const bodyList:  NodeListOf<Element> = document.querySelectorAll("body");
        for (const body of bodyList) {
            body.attributes.removeNamedItem("style");
            console.log("[choge-blog-bypass-ad-blocking-detection] success.");
        }
    }
}

const observer = new MutationObserver(records => {
    for (const record of records) {
        for (const nodeList of record.addedNodes) {
            if (nodeList instanceof HTMLElement) {
                bypasser(nodeList);
            }
        }
    }
});

observer.observe(document.documentElement, { childList: true, subtree: true });