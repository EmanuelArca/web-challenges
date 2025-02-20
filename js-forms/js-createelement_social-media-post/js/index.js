console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body (sieheunten)

const newArticle = document.createElement("article");
newArticle.classList.add("post");

const newParagraph = document.createElement("p");
newParagraph.classList.add("post__content")

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");

const newSpan = document.createElement("span");
newSpan.classList.add("post__username");

const newButton = document.createElement("button");
newButton.classList.add("post__button")


// append to the body 

document.body.append(newArticle);

newArticle.append(newParagraph);

newParagraph.textContent = "Hallo ich bin der zweite Post";

newArticle.append(newFooter);
newFooter.textContent = "@User77";

.append(newSpan);

.append(newButton);

newButton.classList.add("post__button");

newButton.type ="button";



