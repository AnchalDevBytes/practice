Nested Comment.

```bash

function renderComment(comment) {
    const div = document.createElement("div");

    div.className = "comment";
    div.textContent = comment.text;

    if(comment.child.length > 0) {
        const childContainer = document.createElement("div");

        childContainer.className = "child";
        
        for(const child of comment.child) {
            childContainer.appendChild(renderComment(child));
        }

        div.appendChild(childContainer);
    }

    return div;
}

function renderComments(comments, container) {
    const fragment = document.createDocumentFragment();

    for(const comment of comments) {
        fragment.appendChild(renderComment(comment));
    }

    container.appendChild(fragment);
}

```
