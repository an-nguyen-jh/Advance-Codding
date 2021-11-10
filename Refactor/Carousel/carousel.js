(function addEventHandlers() {
  const verticalImageLinks = [
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
  ];
  const subImagesContainer = document.getElementById("sub-image-container");
  const mainImageContainer = document.getElementById("main-image-container");
  const prevButton = document.querySelector(
    ".carousel__control.carousel__control__prev-btn"
  );
  const nextButton = document.querySelector(
    ".carousel__control.carousel__control__next-btn"
  );
  let currentImageIndex = 0;
  const mainImageContainerWidth = mainImageContainer.offsetWidth;
  const mainImageContainerOffset = subImagesContainer.offsetLeft;
  const subImageList = document.querySelectorAll(".carousel__sub-image");
  //active class for first image & disable prevBtn
  subImagesContainer.firstChild.classList.add("carousel__sub-image-active");
  prevButton.disabled = true;

  addEventHandlersToElement();

  function addEventHandlersToElement() {
    prevButton.addEventListener("click", function previousImage() {
      scrollMainImage(-1);
    });
    nextButton.addEventListener("click", function nextImage() {
      scrollMainImage(1);
    });
    subImageList.forEach(function addSelectImageEvent(image) {
      image.addEventListener("click", selectImage);
    });
  }

  function handleHiddenSubImageAtEndAndBeginOfContainer(
    imageOffsetLeft,
    imageOffsetWidth,
    scrollLeft
  ) {
    const offsetOfImageWithMainImageContainer =
      imageOffsetLeft - mainImageContainerOffset;
    const subImageRightOffset =
      offsetOfImageWithMainImageContainer + imageOffsetWidth;
    // sub-image list container didn't show full image in the right or left,
    //so we scorll container to fit sub-image
    if (subImageRightOffset > scrollLeft + mainImageContainerWidth) {
      subImagesContainer.scrollLeft =
        subImageRightOffset - mainImageContainerWidth;
    }
    if (offsetOfImageWithMainImageContainer < scrollLeft) {
      subImagesContainer.scrollLeft = offsetOfImageWithMainImageContainer;
    }
  }

  function controlNavigationButtonActiveness(currentImageIndex) {
    if (currentImageIndex === 0) {
      prevButton.disabled = true;
      nextButton.disabled = false;
    } else if (currentImageIndex === verticalImageLinks.length - 1) {
      nextButton.disabled = true;
      prevButton.disabled = false;
    } else if (
      currentImageIndex > 0 &&
      currentImageIndex < verticalImageLinks.length - 1
    ) {
      prevButton.disabled = false;
      nextButton.disabled = false;
    }
  }

  function handleMainImageTransform(imgIndex) {
    mainImageContainer.style.transform = `translateX(${
      -mainImageContainerWidth * imgIndex
    }px)`;
  }

  //create function to handle navigation Button
  function scrollMainImage(direction) {
    subImageList[currentImageIndex].classList.remove(
      "carousel__sub-image-active"
    );
    currentImageIndex += direction;
    subImageList[currentImageIndex].classList.add("carousel__sub-image-active");
    controlNavigationButtonActiveness(currentImageIndex);
    //make main container scroll
    handleMainImageTransform(currentImageIndex);
    handleHiddenSubImageAtEndAndBeginOfContainer(
      subImageList[currentImageIndex].offsetLeft,
      subImageList[currentImageIndex].offsetWidth,
      subImagesContainer.scrollLeft
    );
  }

  function selectImage() {
    const selectedImageIndex = parseInt(this.getAttribute("data-index"));
    subImageList[currentImageIndex].classList.remove(
      "carousel__sub-image-active"
    );
    currentImageIndex = selectedImageIndex;

    subImageList[currentImageIndex].classList.add("carousel__sub-image-active");

    controlNavigationButtonActiveness(currentImageIndex);

    handleMainImageTransform(currentImageIndex);
    handleHiddenSubImageAtEndAndBeginOfContainer(
      this.offsetLeft,
      this.offsetWidth,
      subImagesContainer.scrollLeft
    );
  }
})();
