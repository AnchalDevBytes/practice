```bash

# suppose we have comments like this :- 

# [
#   {
#     id: 1,
#     text: "Hello",
#     children: [
#       {
#         id: 2,
#         text: "Hi",
#         children: [
#           {
#             id: 3,
#             text: "Nice!",
#             children: [
#               {
#                 id: 4,
#                 text: "Exactly!"
#               }
#             ]
#           }
#         ]
#       }
#     ]
#   }
# ]

function renderComment(comment) {
    const div = document.createElement("div");

    div.className = "comment";
    div.texContent = comment.text;

    if(comment.children.length > 0) {

        const childContainer = document.createElement("div");

        for(const child of comment.children) {
            childContainer.appendChild(renderComment(child));
        }

        div.appendChild(childContainer);
    }

    return div;
}

# Rendering all root comments we will need other functions

function renderComments(comments, container) {
    const fragment = document.createDocumentFragment();

    for(const comment of comments) {
        fragment.appendChild(renderComment(comment));
    }

    container.appendChild(fragment);
}


# Usage:- 

const root = document.getElementById("root");
renderComments(comments, root);

```
