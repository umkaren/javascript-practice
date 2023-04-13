let photoSlideShow = {
    photoList: ['photo1', 'photo2', 'photo3', 'photo4'],
    currentPhotoIndex: 0,
    nextPhoto() {
        if (this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex])
        } else {
            console.log("End of slideshow.");
        }
    },
    prevPhoto() {
        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
          console.log("Start of slideshow");
        }
      },

    getCurrentPhoto() {
        console.log(this.photoList[this.currentPhotoIndex]);
    }
}

photoSlideShow.getCurrentPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();

photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();

