(function addEventHandler() {
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
  ];
  const imagesContainer = document.getElementById("image-list");
  const mainImagesContainer = document.getElementById("main-image-list");
  const preButton = document.querySelector(
    ".carousel__control.carousel__control__left-btn"
  );
  const nextButton = document.querySelector(
    ".carousel__control.carousel__control__right-btn"
  );
  let index = 0;
  const MAIN_IMG_WIDTH = mainImagesContainer.offsetWidth;
  const CONTAINER_OFFSET_LEFT = imagesContainer.offsetLeft;
  const imagesList = document.querySelectorAll(".carousel__image-item");
  //active class for first image & disable preBtn
  imagesContainer.firstChild.classList.add("carousel__image-active");
  preButton.disabled = true;

  function scrollSubImage(imageOffsetLeft, imageOffsetWidth, scrollLeft) {
    const offsetOfImgWithContainer = imageOffsetLeft - CONTAINER_OFFSET_LEFT;
    const imageRightOffset = offsetOfImgWithContainer + imageOffsetWidth;
    // sub-image list container didn't show full image in the right or left,
    //so we scorll container to fit sub-image
    if (imageRightOffset > scrollLeft + MAIN_IMG_WIDTH) {
      imagesContainer.scrollLeft = imageRightOffset - MAIN_IMG_WIDTH;
    }
    if (offsetOfImgWithContainer < scrollLeft) {
      imagesContainer.scrollLeft = offsetOfImgWithContainer;
    }
  }

  function controlNavigationButton(index) {
    if (index === 0) {
      preButton.disabled = true;
      nextButton.disabled = false;
    } else if (index === imagesLinkArray.length - 1) {
      nextButton.disabled = true;
      preButton.disabled = false;
    }
    if (index > 0 && index < imagesLinkArray.length - 1) {
      preButton.disabled = false;
      nextButton.disabled = false;
    }
  }
  //create function to handle navigation Button
  function scrollMainImage(direction) {
    //S1: remove active of old image
    imagesList[index].classList.remove("carousel__image-active");
    index += direction;
    //S2: check if index of image is in of range and control navigate button
    controlNavigationButton(index);
    console.log(index);
    //S3: if index not out of range in image array we switch image to pre image in array
    if (index >= 0 && index < imagesLinkArray.length) {
      //make main container scroll back
      mainImagesContainer.style.transform = `translateX(${
        -MAIN_IMG_WIDTH * index
      }px)`;

      //active pre image
      imagesList[index].classList.add("carousel__image-active");
      //scroll if image out of sub-image container
      scrollSubImage(
        imagesList[index].offsetLeft,
        imagesList[index].offsetWidth,
        imagesContainer.scrollLeft
      );
    }
    // index out of range of carousel so can not go further
    if (index === 0) {
      preButton.disabled = true;
    }
  }

  function chooseImage() {
    //get store attribute in image
    const imgIdx = parseInt(this.getAttribute("data-idx"));
    //remove active behavior
    imagesList[index].classList.remove("carousel__image-active");
    //make main container scroll to selected image
    mainImagesContainer.style.transform = `translateX(${
      -MAIN_IMG_WIDTH * imgIdx
    }px)`;

    scrollSubImage(
      this.offsetLeft,
      this.offsetWidth,
      imagesContainer.scrollLeft
    );
    //copy index
    index = imgIdx;
    //disable button when using click image
    controlNavigationButton(index);
    //add active behavior
    imagesList[imgIdx].classList.add("carousel__image-active");
  }
  //handle Event
  preButton.addEventListener("click", function previousImage() {
    scrollMainImage(-1);
  });
  nextButton.addEventListener("click", function nextImage() {
    scrollMainImage(1);
  });
  imagesList.forEach(function addChooseImageEvent(image) {
    image.addEventListener("click", chooseImage);
  });
})();
