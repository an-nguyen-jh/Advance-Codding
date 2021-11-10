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
  const subImagesContainer = document.getElementById("image-list");
  const mainImageContainer = document.getElementById("main-image-list");
  const prevButton = document.querySelector(
    ".carousel__control.carousel__control__left-btn"
  );
  const nextButton = document.querySelector(
    ".carousel__control.carousel__control__right-btn"
  );
  let imageIndex = 0;
  const mainImageContainerWidth = mainImageContainer.offsetWidth;
  const mainImageContainerOffset = subImagesContainer.offsetLeft;
  const subImageList = document.querySelectorAll(".carousel__image-item");
  //active class for first image & disable prevBtn
  subImagesContainer.firstChild.classList.add("carousel__image-active");
  prevButton.disabled = true;

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

  function controlNavigationButtonActiveness(imageIndex) {
    if (imageIndex === 0) {
      prevButton.disabled = true;
      nextButton.disabled = false;
    } else if (imageIndex === verticalImageLinks.length - 1) {
      nextButton.disabled = true;
      prevButton.disabled = false;
    }
    if (imageIndex > 0 && imageIndex < verticalImageLinks.length - 1) {
      prevButton.disabled = false;
      nextButton.disabled = false;
    }
  }
  //create function to handle navigation Button
  function scrollMainImage(direction) {
    subImageList[imageIndex].classList.remove("carousel__image-active");
    imageIndex += direction;
    controlNavigationButtonActiveness(imageIndex);
    if (imageIndex >= 0 && imageIndex < verticalImageLinks.length) {
      //make main container scroll back
      mainImageContainer.style.transform = `translateX(${
        -mainImageContainerWidth * imageIndex
      }px)`;

      subImageList[imageIndex].classList.add("carousel__image-active");
      handleHiddenSubImageAtEndAndBeginOfContainer(
        subImageList[imageIndex].offsetLeft,
        subImageList[imageIndex].offsetWidth,
        subImagesContainer.scrollLeft
      );
    }
    if (imageIndex === 0) {
      prevButton.disabled = true;
    }
  }

  function selectImage() {
    const selectedImgeIndex = parseInt(this.getAttribute("data-idx"));
    subImageList[imageIndex].classList.remove("carousel__image-active");
    mainImageContainer.style.transform = `translateX(${
      -mainImageContainerWidth * selectedImgeIndex
    }px)`;

    handleHiddenSubImageAtEndAndBeginOfContainer(
      this.offsetLeft,
      this.offsetWidth,
      subImagesContainer.scrollLeft
    );
    imageIndex = selectedImgeIndex;
    controlNavigationButtonActiveness(imageIndex);
    subImageList[imageIndex].classList.add("carousel__image-active");
  }
  //handle Event
  prevButton.addEventListener("click", function previousImage() {
    scrollMainImage(-1);
  });
  nextButton.addEventListener("click", function nextImage() {
    scrollMainImage(1);
  });
  subImageList.forEach(function addSelectImageEvent(image) {
    image.addEventListener("click", selectImage);
  });
})();
