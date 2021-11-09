(function () {
  const imagesLinkArray = [
    "https://images.unsplash.com/photo-1545623703-583dd2364bbd?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw0NzMxNTUyfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1577737330379-1f82737418ab?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w0NzMxNTUyfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1570279402939-62a46724e051?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NDczMTU1Mnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0NzMxNTUyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/flagged/photo-1573763435095-2077a3fd80b0?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8NDczMTU1Mnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1573150323599-ac3231efdbc9?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTJ8NDczMTU1Mnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1568816642854-e5a99030f9af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1387&q=80",
    "https://images.unsplash.com/photo-1624798225136-0f618af39bac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVjYXRpJTIwbXVsdGlzdHJhZGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1624870420774-8b3b08b7db0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGR1Y2F0aSUyMG11bHRpc3RyYWRhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1624400567110-5f023807720a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGR1Y2F0aXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1624798223318-1b32138b678c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGR1Y2F0aXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1545623703-583dd2364bbd?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw0NzMxNTUyfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1577737330379-1f82737418ab?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w0NzMxNTUyfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1570279402939-62a46724e051?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NDczMTU1Mnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0NzMxNTUyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/flagged/photo-1573763435095-2077a3fd80b0?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8NDczMTU1Mnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1573150323599-ac3231efdbc9?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTJ8NDczMTU1Mnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1568816642854-e5a99030f9af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1387&q=80",
    "https://images.unsplash.com/photo-1624798225136-0f618af39bac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVjYXRpJTIwbXVsdGlzdHJhZGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1624870420774-8b3b08b7db0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGR1Y2F0aSUyMG11bHRpc3RyYWRhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1624400567110-5f023807720a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGR1Y2F0aXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1624798223318-1b32138b678c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGR1Y2F0aXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ];

  const htmlNodePrototype = {
    mainImg: (imgLink, index) =>
      `<img class="carousel__main-image" async src="${imgLink}" data-idx="${index}" alt="Main image display"/>`,
    imgItem: (imageLink, index) =>
      `<img class="carousel__image-item" async src="${imageLink}" data-idx="${index}" alt="Image Item" />`,
  };
  const imagesContainer = document.getElementById("image-list");
  const mainImagesContainer = document.getElementById("main-image-list");

  imagesLinkArray.forEach((imageLink, i) => {
    const imageItem = htmlToElement(htmlNodePrototype.imgItem(imageLink, i));
    const mainImgItem = htmlToElement(htmlNodePrototype.mainImg(imageLink, i));

    mainImagesContainer.appendChild(mainImgItem);
    imagesContainer.appendChild(imageItem);
    // imageItem.addEventListener("click", chooseImage.bind(imageItem));
  });

  //==================================== function details ==============================================

  //function to convert html to Node element
  function htmlToElement(html) {
    var template = document.createElement("template");
    // Never return a text node of whitespace as the result
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }
})();
